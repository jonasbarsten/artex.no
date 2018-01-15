import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

export default class MainNav extends Component {
	componentDidMount() {
		$(".button-collapse").sideNav({
			menuWidth: 240, // Default is 240
				edge: 'left', // Choose the horizontal origin
				closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
				draggable: false // Choose whether you can drag to open on touch screens
			});

	}

	showNav() {

		$(".button-collapse").sideNav({
			menuWidth: 500, // Default is 240
				edge: 'left', // Choose the horizontal origin
				closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
				draggable: false // Choose whether you can drag to open on touch screens
			});

		$('.button-collapse').sideNav('show');
	}
	render() {
		return (
			<div className="nav-wrapper">
				<div id="menu-button-mobile-wrapper">
					<div className="fixed-action-btn">
						<a onClick={this.showNav.bind(this)} id="menu-button-mobile" className="right btn-floating btn-large waves-effect waves-light grey"><FontAwesome name="bars" size="5x" className="menu-button-mobile-icon" /></a>
					</div>
				</div>
				<ul id="slide-out" className="side-nav times-font">
					<li className="menu-logo"><p className="center-align logo-font"><a href="/">ArtEx</a></p></li>
					<li><div className="divider"></div></li>
					<li className={ActiveRoute.path('/') && 'active'}><a className="grey-text text-darken-4" href="/">Hjem</a></li>
					<li className={ActiveRoute.path('/aboutNo') && 'active'}><a className="grey-text text-darken-4" href="/aboutNo">Om</a></li>
					<li className={ActiveRoute.path('/aboutEn') && 'active'}><a className="grey-text text-darken-4" href="/aboutEn">About</a></li>
					<li><div className="divider"></div></li>
					<li className={ActiveRoute.path('/program') && 'active'}><a className="grey-text text-darken-4" href="/program">Programinnhold</a></li>
					<li className={ActiveRoute.path('/jury') && 'active'}><a className="grey-text text-darken-4" href="/jury">Faglig Råd</a></li>
					<li className={ActiveRoute.path('/mentors') && 'active'}><a className="grey-text text-darken-4" href="/mentors">Mentorer</a></li>
					<li className={ActiveRoute.path('/participants') && 'active'}><a className="grey-text text-darken-4" href="/participants">Deltakere</a></li>
					<li className={ActiveRoute.path('/whoMayApply') && 'active'}><a className="grey-text text-darken-4" href="/whoMayApply">Hvem kan søke?</a></li>
					<li className={ActiveRoute.path('/contact') && 'active'}><a className="grey-text text-darken-4" href="/contact">Kontakt</a></li>
					<li><div className="divider"></div></li>
					<li className={ActiveRoute.path('/login') && 'active'}><a className="grey-text text-darken-4" href="/login">Logg inn</a></li>
				</ul>
				<a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi mdi-menu"></i></a>
			</div>
		);
	}
}


			// <nav>
			// 	<div className="nav-wrapper grey lighten-5">
			// 		<a href="#" className="brand-logo grey-text text-darken-4">Logo</a>
			// 		<ul id="nav-mobile" className="right hide-on-med-and-down">
			// 			<li className={ActiveRoute.path('/') && 'active'}><a className="grey-text text-darken-4" href="/">Hjem</a></li>
			// 			<li className={ActiveRoute.path('/about') && 'active'}><a className="grey-text text-darken-4" href="/about">Om</a></li>
			// 			<li className={ActiveRoute.path('/program') && 'active'}><a className="grey-text text-darken-4" href="/program">Programinnhold</a></li>
			// 			<li className={ActiveRoute.path('/jury') && 'active'}><a className="grey-text text-darken-4" href="/jury">Faglig Råd</a></li>
			// 			<li className={ActiveRoute.path('/whoMayApply') && 'active'}><a className="grey-text text-darken-4" href="/whoMayApply">Hvem kan søke?</a></li>
			// 			<li className={ActiveRoute.path('/contact') && 'active'}><a className="grey-text text-darken-4" href="/contact">Kontakt</a></li>
			// 		</ul>
			// 	</div>
			// </nav>