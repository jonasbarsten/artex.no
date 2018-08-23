Meteor.methods({
	inviteUser(email, assignedRoles) {
		// Only allow inviting users if has role admin or manage-users
		if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'manage-users'])) {

    		check(email, String);
    		check(assignedRoles, Array);


    		// Check if someone tries to add unapproved roles to array
    		// TODO: validate array to only contain approved roles, not the other way around
    		var containsSuperAdmin = assignedRoles.indexOf('super-admin') > -1;

    		if (containsSuperAdmin) {
    			throw new Meteor.Error( 'bad-match', 'You are not allowed to assign other roles to users LOL' );
    		}

    		assignedRoles.push('invited');

			let emailExists = Invites.findOne( { email: email } );
			let token = Random.hexString( 15 );

			if ( !emailExists ) {

				// Add invite to database
				Invites.insert({
			        email: email,
			        token: token,
			        assignedRoles: assignedRoles,
			        dateInvited: new Date()
				});
				
				// Generate HTML template for mail invite from /private/email/templates/invite.html
				SSR.compileTemplate( 'inviteEmail', Assets.getText( 'email/templates/invite.html' ) );


				// TODO: Få inn site-data i mailen
				// const fromString = Meteor.settings.public.siteTitle + ' <invite@' + Meteor.settings.public.url + '>';
				// const subjectString = 'Welcome to ' + Meteor.settings.public.siteTitle;

				// console.log('from: ' + fromString);
				// console.log('subject: ' + subjectString);

				// Send invite
				Email.send({
					to: email,
					from: 'ArtEx <no-reply@artex.no>',
					subject: 'Faglig råd',
					html: SSR.render( 'inviteEmail', {
						url: Meteor.settings.public.url + '/invite/' + token + '?email=' + email
					})
				});

			} else {
				// TODO: tell front that user is already invited
				console.log('User already invited');
				// throw new Meteor.Error( 'already-invited', 'Sorry, it looks like you\'ve already invited this user' );
			}
		} else {
			throw new Meteor.Error( 'bad-match', 'You are not authorized to invite users' );
		}

	},
	createInvitedUser( user ) {
		check( user, {
			email: ValidEmail,
			firstName: String,
			lastName: String,
			password: Object,
			token: String
		});

		const profile = {};
		profile.firstName = user.firstName;
		profile.lastName = user.lastName;

		// Check if token exists and if it's corresponding email matched the email input
		let invite = Invites.findOne( { email: user.email, token: user.token }, { fields: { "_id": 1, "assignedRoles": 1 } } );

		if ( invite ) {

			// Create user
			let userId = Accounts.createUser( { profile: profile, email: user.email, password: user.password } );

			// Give user roles
			Roles.addUsersToRoles( userId, invite.assignedRoles );

			// Remove token
			// Invites.update( invite._id, {
			// 	$set: { accountCreated: true },
			// 	$unset: { token: "" }
			// });

			// Remove invite so that if user is deleted, the same email can be invited again

			Invites.remove(invite._id);

		} else {
			throw new Meteor.Error( 'bad-match', 'Hmm, this token doesn\'t match your email. Try again?' );
		}
	},
	createStandardUser( user ) {
		check( user, {
			email: ValidEmail,
			firstName: String,
			lastName: String,
			'dateOfBirth': String,
			password: Object
		});

		const profile = {};
		profile.firstName = user.firstName;
		profile.lastName = user.lastName;
		profile.dateOfBirth = user.dateOfBirth;

		// Check if user exists
		let userExists = Meteor.users.findOne( {'emails[0].address': user.email}, { fields: { "_id": 1 } } );

		if ( !userExists ) {
			// Create user
			let userId = Accounts.createUser( { profile: profile, email: user.email, password: user.password } );

			// Give user roles
			Roles.addUsersToRoles( userId, ['applicant', 'user'] );

			// Create application for user
			Applications.insert({
				name: "ArtEx 2017",
				applicantId: userId
			});

		} else {
			throw new Meteor.Error( 'bad-match', 'User aleady exists' );
		}
	},
	deleteUser (user) {

		// Validation
		check(user, Object);

		if (user._id == Meteor.userId()) {

			// Allow user to delete it self
			Meteor.users.remove(user._id);
		} else {

			// Only allow deleting other users if has role admin or manage-users
			if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {

				Meteor.users.remove(user._id);
			}
		}	
	},

	deleteUserFiles (user) {
		// Validation
		check(user, Object);

		if (user._id == Meteor.userId()) {

			// Allow user to delete it self
			UserFiles.remove({'meta.userId': user._id});
		} else {

			// Only allow deleting other users if has role admin or manage-users
			if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {

				UserFiles.remove({'meta.userId': user._id});
			}
		}
	},


	deleteUserApplications (user) {
		// Validation
		check(user, Object);

		if (user._id == Meteor.userId()) {

			// Allow user to delete it self
			Applications.remove({'applicantId': user._id});
		} else {

			// Only allow deleting other users if has role admin or manage-users
			if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {

				Applications.remove({'applicantId': user._id});
			}
		}
	},

	resetUserPassword () {
		Accounts.sendResetPasswordEmail(Meteor.userId());
	},
	deleteInvite (email) {

		// Validation
		check(email, String);

		// Only allow deleting invitations if has role admin or manage-users
		if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {
			// Remove invite from db
			Invites.remove({'email': email});
		}	
	},
	toggleManageUsers (user) {

		// Validation
		check(user, Object);

		// Check if logged in user has priveliges to manage users
		if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {
			// Check if user already is in Role
			if (Roles.userIsInRole(user._id, 'manage-users')) {
				// If in role, remove from role
				Roles.removeUsersFromRoles(user._id, 'manage-users');
  			} else {
  				// Else add to role
  				Roles.addUsersToRoles(user._id, 'manage-users');
  			}
		}

	},
	toggleModerator (user) {

		// Validation
		check(user, Object);

		// Check if logged in user has priveliges to manage users
		if ( Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'manage-users'])) {
			// Check if user already is in Role
			if (Roles.userIsInRole(user._id, 'moderator')) {
				// If in role, remove from role
				Roles.removeUsersFromRoles(user._id, 'moderator');
  			} else {
  				// Else add to role
  				Roles.addUsersToRoles(user._id, 'moderator');
  			}
		}
	},

	archiveUser (user) {
		Meteor.users.update({_id: user._id}, {$set: {'profile.archived': true}});
	}
});