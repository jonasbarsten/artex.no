import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.js';
import Home from './components/home/Home.js';
import InviteSignUp from './components/users/InviteSignUp.js';
import SignUp from './components/users/SignUp.js';
import Login from './components/users/Login.js';
import Forgot from './components/users/Forgot.js';

import AboutPageEn from './components/pages/AboutPageEn.js';
import AboutPageNo from './components/pages/AboutPageNo.js';
import ContactPage from './components/pages/ContactPage.js';
import JuryPage from './components/pages/JuryPage.js';
import ProgramPage from './components/pages/ProgramPage.js';
import WhoMayApplyPage from './components/pages/WhoMayApplyPage.js';
import MentorsPage from './components/pages/MentorsPage.js';
import ParticipantsPage from './components/pages/ParticipantsPage.js';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Home />)
		})
	}
});

FlowRouter.route( '/invite/:token', {
	name: 'invite signup',
	action( params, queryParams ) {
		mount(MainLayout, {
			content: (<InviteSignUp token={params.token} email={queryParams.email}/>)
		})
	}
});

FlowRouter.route( '/signup', {
	name: 'signup',
	action() {
		mount(MainLayout, {
			content: (<SignUp />)
		})
	}
});

FlowRouter.route( '/login', {
	name: 'login',
	action() {
		mount(MainLayout, {
			content: (<Login />)
		})
	}
});

FlowRouter.route( '/forgot', {
	name: 'forgot',
	action() {
		mount(MainLayout, {
			content: (<Forgot />)
		})
	}
});

FlowRouter.route( '/aboutEn', {
	name: 'about english',
	action() {
		mount(MainLayout, {
			content: (<AboutPageEn />)
		})
	}
});

FlowRouter.route( '/aboutNo', {
	name: 'about norwegian',
	action() {
		mount(MainLayout, {
			content: (<AboutPageNo />)
		})
	}
});

FlowRouter.route( '/contact', {
	name: 'contact',
	action() {
		mount(MainLayout, {
			content: (<ContactPage />)
		})
	}
});

FlowRouter.route( '/jury', {
	name: 'jury',
	action() {
		mount(MainLayout, {
			content: (<JuryPage />)
		})
	}
});

FlowRouter.route( '/program', {
	name: 'program',
	action() {
		mount(MainLayout, {
			content: (<ProgramPage />)
		})
	}
});

FlowRouter.route( '/mentors', {
	name: 'mentors',
	action() {
		mount(MainLayout, {
			content: (<MentorsPage />)
		})
	}
});

FlowRouter.route( '/participants', {
	name: 'participants',
	action() {
		mount(MainLayout, {
			content: (<ParticipantsPage />)
		})
	}
});

FlowRouter.route( '/whomayapply', {
	name: 'Who May Apply',
	action() {
		mount(MainLayout, {
			content: (<WhoMayApplyPage />)
		})
	}
});