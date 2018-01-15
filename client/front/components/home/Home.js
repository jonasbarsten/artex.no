import React, {Component} from 'react';

export default class Home extends Component {

	componentDidMount() {

		var windowHeight = $(window).height();
		var buttonHeight = document.getElementById('action-buttons-home').clientHeight;

		var sliderHeight = windowHeight - buttonHeight;

		$('.slider').slider({
			full_width: true,
			height: sliderHeight, // Set height of slider. (Default: 400)
			indicators: false, // Set to false to hide slide indicators. (Default: True)
			transition: 500, // Set the duration of the transition animation in ms. (Default: 500)
			interval: 6000 // Set the duration between transitions in ms. (Default: 6000)
		});
	}

	render () {

		return (


			<div>
				<div className="slider">
					<ul className="slides">
						<li>
							<img src="/images/homeSlider/8.jpg" /> 
							<div className="caption right-align">
								<h5 className="grey-text text-darken-4"></h5>
							</div>
							
						</li>
						<li>
							<img src="/images/homeSlider/5.jpg" /> 
							<div className="caption right-align">
								<h5 className="grey-text text-darken-4">Foto: Jörg Wiesner</h5>
							</div>
							
						</li>
						<li>
							<img src="/images/homeSlider/1.jpg" />
							<div className="caption right-align">
								<h5 className="grey-text text-lighten-2">Foto: Kjell Vassdal</h5>
							</div>
						</li>
						<li>
							<img src="/images/homeSlider/2.jpg" /> 
							<div className="caption right-align">
								<h5 className="grey-text text-darken-4">Foto: Christian Houge</h5>
							</div>
						</li>

						<li>
							<img src="/images/homeSlider/6.jpg" />
							<div className="caption right-align">
								<h5 className="grey-text text-darken-4">Foto: Jörg Wiesner</h5>
							</div>
						</li>

						<li>
							<img src="/images/homeSlider/3.jpg" />
							<div className="caption right-align">
								<h5 className="grey-text text-darken-4">Foto: Christian Houge</h5>
							</div>
						</li>

						<li>
							<img src="/images/homeSlider/4.jpg" />
							<div className="caption right-align">
								<h5 className="grey-text">Foto: Jörg Wiesner</h5>
							</div>
						</li>

						<li>
							<img src="/images/homeSlider/7.jpg" />
							<div className="caption right-align">
								<h5 className="grey-text">Foto: Kjell Vassdal</h5>
							</div>
						</li>

					</ul>
				</div>

				<div id="action-buttons-home" className="center section">
					<a href="/aboutNo" className="btn btn-large waves-effect white grey-text text-darken-4 z-depth-5">Om <span className="logo-font">ArtEx</span></a>
				</div>

			</div>
		);
	}
}