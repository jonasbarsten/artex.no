import React, {Component} from 'react';

export default class countdown extends Component {

	getRemaindingTime (endTime) {
		var t = Date.parse(endtime) - Session.get('time');
    	var seconds = ("0" + Math.floor( (t/1000) % 60 )).slice(-2);
    	var minutes = ("0" + Math.floor( (t/1000/60) % 60 )).slice(-2);
    	var hours = ("0" + Math.floor( (t/(1000*60*60)) % 24 )).slice(-2);
    	var days = Math.floor( t/(1000*60*60*24) );

    	console.log(t)

	    if (t <= 0) {
	    	clearInterval(timeinterval);
	    }
	 
	    return {
	    	'total': t,
	    	'days': days,
	    	'hours': hours,
	    	'minutes': minutes,
	    	'seconds': seconds
	    };
	}

	render () {
		return (
			<div id="countdown-wrapper">
				<div id="countdown-clockdiv">
					<div>
						<span className="countdown-days">00</span>
						<div className="countdown-smalltext">Days</div>
					</div>

					<div>
						<span className="countdown-hours">00</span>
						<div className="countdown-smalltext">Hours</div>
					</div>

					<div>
						<span className="countdown-minutes">00</span>
						<div className="countdown-smalltext">Minutes</div>
					</div>

					<div>
						<span className="countdown-seconds">00</span>
						<div className="countdown-smalltext">Seconds</div>
					</div>
				</div>
			</div>
				
		);
	}
}

			// <div id="clockdiv">
			// 	<div>
			// 		<span class="days">{{t.days}}</span>
			// 		<div class="smalltext">Days</div>
			// 	</div>

			// 	<div>
			// 		<span class="hours">{{t.hours}}</span>
			// 		<div class="smalltext">Hours</div>
			// 	</div>

			// 	<div>
			// 		<span class="minutes" {{attributes}}>{{t.minutes}}</span>
			// 		<div class="smalltext">Minutes</div>
			// 	</div>

			// 	<div>
			// 		<span class="seconds">{{t.seconds}}</span>
			// 		<div class="smalltext">Seconds</div>
			// 	</div>
			// </div>