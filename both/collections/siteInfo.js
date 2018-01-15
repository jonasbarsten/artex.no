SiteInfo = new Meteor.Collection( 'siteInfo' );

SiteInfo.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

SiteInfo.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

const SiteInfoSchema = new SimpleSchema({
	"title": {
		type: String,
		label: "Site Title",
		optional: true
	},
	"description": {
		type: String,
		label: "Site description for search engines",
		optional: true
	}
});

SiteInfo.attachSchema( SiteInfoSchema );