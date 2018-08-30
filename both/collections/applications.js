Applications = new Meteor.Collection( 'applications' );

Applications.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Applications.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

const ApplicationsSchema = new SimpleSchema({
	"name": {
		type: String,
		optional: true
	},
	"applicantId": {
		type: String,
		optional: true
	},
	"lastUpdate": {
		type: Date,
		autoValue: function () {
			return new Date();
		}
	},
	"motivation": {
		type: String,
		label: "My motivation",
		optional: true
	},
	"nationality": {
		type: String,
		label: "My nationality",
		optional: true
	},
	"education": {
		type: String,
		label: "My education",
		optional: true
	},
	"evaluations": {
		type: [Object],
		optional: true
	},
	"locked": {
		type: Boolean,
		optional: true
	}
	// "evaluations.$.moderatorId": {
	// 	type: String,
	// 	autoValue: function () {
	// 		if (this.insert) {
	// 			return this.userId;
	// 		}
	// 	}
	// },
	// "evaluations.$.content": {
	// 	type: [Object]
	// },
	// "evaluations.$.content.rating": {
	// 	type: Number
	// },
	// "evaluations.$.content.notes": {
	// 	type: String
	// }
});

Applications.attachSchema( ApplicationsSchema );