import React from 'react';

import MainNav from './MainNav.js';
import MainFooter from './MainFooter.js';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header>
			<MainNav />
		</header>
		<main>
			{content}
		</main>
		<div>
			<MainFooter />
		</div>
	</div>
)