import React, {Component} from 'react';
// import AtForm from '../AtForm.js';
// import AccountsUI from '../../components/AccountsUI.js';
import AtForm from '../../../AtForm.js';

// export default  class Login extends Component {
// 	render () {
// 		return (
// 			<div>
// 				<h1>YYOYOYOYO</h1>
// 				<AtForm />
// 			</div>
// 		);
// 	}
// }

export default class Login extends Component {
	render () {
		return (
			<div>
				<AtForm />
				<h1>Click Sign in to sign in</h1>
			</div>
		)
	}
}