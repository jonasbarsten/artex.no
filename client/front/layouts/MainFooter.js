import React, {Component} from 'react';

export default class MainFooter extends Component {
	render() {
		return (
			<footer className="page-footer white">
				<div className="divider"></div>

				<div className="container valign-wrapper row" style={{marginBottom: 0 + 'px'}}>
					<a href="http://www.talentnorge.no/" target="self" className="valign col s3 hoverable"><img className="responsive-img bw" src="/images/logos/talentnorge.jpg" /></a>
					<a href="http://nmh.no" target="self" className="valign col s3 hoverable"><img className="responsive-img bw" src="/images/logos/nmh.png" /></a>
					<a href="http://khio.no" target="self" className="valign col s3 hoverable"><img className="responsive-img bw" src="/images/logos/khio.png" /></a>
					<a href="http://hil.no/den_norske_filmskolen" target="self" className="valign col s3 hoverable"><img className="responsive-img bw" src="/images/logos/dnf.png" /></a>
				</div>
				<div className="footer-copyright">
					<div className="container grey-text">
						© 2016 Copyright ArtEx
						<a className="grey-text right" href="/about">Om ArtEx</a>
					</div>
				</div>
			</footer>
		);
	}
}