// Regarding reset and verify password
// The other routes are in frontRoutes
// They are here since it bypasses currently logged in user, so we can reset password for one user while being logged inn as another user

// import {mount} from 'react-mounter';

// import {MainLayout} from './layouts/MainLayout.js';
// import ResetPassword from './components/users/ResetPassword.js';

// Accounts.onResetPasswordLink( (token, done) => {

// 	mount(MainLayout, {
// 		content: (<ResetPassword token={token} />)
// 	})

// });