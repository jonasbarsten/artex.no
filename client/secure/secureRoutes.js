import React from 'react';
// import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';

import { SecureLayout } from './layouts/SecureLayout.js';

import Login from './components/login/Login.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Users from './components/users/UsersWrapper.js';
import Profile from './components/users/profile.js';
import SiteInfo from './components/siteInfo/SiteInfoWrapper.js';
import AllApplications from './components/applications/AllApplications.js';
import ApplicationFormWrapper from './components/applications/ApplicationFormWrapper.js';

import Test from './components/Test.js';


// Wait for Roles to start so we can use it in routes

FlowRouter.wait();

Tracker.autorun(() => {
	if (Roles.subscription.ready() && !FlowRouter._initialized) {
		FlowRouter.initialize()
	}
});

// Redirect to '/' on logout, uses gwendall:accounts-helpers
Accounts.onLogout(function() {
	FlowRouter.go('/login');
});

// Route Group

var secureRoutes = FlowRouter.group({
	prefix: '/secure',
	name: 'secure',
	triggersEnter: [function(context, redirect) {
		if (!Meteor.userId()) {
			FlowRouter.go('/login');
		} else {
			Meteor.call('unarchiveUser');
		}

		// console.log('running group triggers');
	}]
});

// Routes

secureRoutes.route('/', {
	action() {
		mount(SecureLayout, {
			content: (<Profile />)
		})
	}
});

secureRoutes.route('/test', {
	action() {
		mount(SecureLayout, {
			content: (<Test />)
		})
	}
});

// secureRoutes.route('/login', {
// 	name: 'login',
// 	action() {
// 		mount(SecureLayout, {
// 			content: (<Login />)
// 		})
// 	}
// });

secureRoutes.route('/users', {
	action() {
		mount(SecureLayout, {
			content: (<Users />)
		})
	}
});

secureRoutes.route('/profile', {
	action() {
		mount(SecureLayout, {
			content: (<Profile />)
		})
	}
});

secureRoutes.route('/siteInfo', {
	action() {
		mount(SecureLayout, {
			content: (<SiteInfo />)
		})
	}
});

// TODO: only accesable for moderators and admin/super-admin
secureRoutes.route('/applications', {
	action() {
		if (Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin', 'moderator'])) {
			mount(SecureLayout, {
				content: (<AllApplications />)
			});
		}
	}
});

// TODO: only accessable for applicants
secureRoutes.route('/myapplications', {
	action() {
		mount(SecureLayout, {
			content: (<ApplicationFormWrapper />)
		})
	}
});

// secureRoutes.route('/resolutions/:id', {
// 	action(params) {
// 		mount(SecureLayout, {
// 			content: (<ResolutionDetail id={params.id} />)
// 		})
// 	}
// });