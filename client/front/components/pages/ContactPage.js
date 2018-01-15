import React, {Component} from 'react';

export default class ContactPage extends Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12">
							<div className="section">
								<h4>Kontakt <span className="logo-font">ArtEx</span></h4>
								<div className="divider"></div>
								<p className="flow-text">Talent Norge</p>
								<p className="flow-text"> Prosjektleder Monica Borg Fure</p>
								<img className="responsive-img col s3 bw" src="/images/jury/monica.jpg" />
								<p className="flow-text"> E-post: <a href="mailto:monica@talentnorge.no ">monica@talentnorge.no </a></p>
								<p className="flow-text">Tel: <a href="tel:+4792635471">+47 926 35 471</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}