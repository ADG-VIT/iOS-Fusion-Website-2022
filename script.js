const toggles = document.querySelectorAll('.faq-toggle');
var top = document.getElementById('top2');
var responsive = window.matchMedia('(max-width: 400px)');
var responsiv = window.matchMedia('(max-width: 500px)');
var responsi = window.matchMedia('(max-width: 800px)');

function myFunction(x) {
	console.log('Hi');
	x.classList.toggle('change');
}

toggles.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});

// Set the date we're counting down to
var countDownDate = new Date('Sep 30, 2022 00:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="time"
	if (window.innerWidth <= 920)
		document.getElementById('time').innerHTML =
			days + 'd<br>' + hours + 'h<br>' + minutes + 'm<br>' + seconds + 's';
	else
		document.getElementById('time').innerHTML =
			days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('time').innerHTML = 'EXPIRED';
	}
}, 1000);

top.onscroll = function () {
	myFunction();
};
function myFunction() {
	if (top.scrollY > 2350) {
		document.getElementById('active').className = 'timeline-inner-textbox';
		document.getElementById('child1').className = 'timeline-inner-textbox active';
		document.getElementById('timeline-elipse').style.top = '260px';
		document.getElementById('timeline-scroll').style.height = '206.2px';
		document.getElementById('text-timeline1').style.top = '180px';
		if (top.scrollY >= 2500) {
			document.getElementById('child2').className =
				'timeline-inner-textbox active';
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '470px';
			document.getElementById('timeline-scroll').style.height = '416.2px';
			document.getElementById('text-timeline1').style.top = '285px';
			document.getElementById('text-timeline2').style.top = '400px';
		}
		if (top.scrollY > 2650) {
			document.getElementById('child3').className =
				'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '650px';
			document.getElementById('timeline-scroll').style.height = '596.2px';
			document.getElementById('text-timeline2').style.top = '580px';
		}
		if (top.scrollY < 2650) {
			document.getElementById('child2').className = 'timeline-inner-textbox active';
			document.getElementById('child3').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '470px';
			document.getElementById('timeline-scroll').style.height = '416.2px';
		}
	}
	if (top.scrollY < 2500) {
		document.getElementById('child1').className ='timeline-inner-textbox active';
		document.getElementById('child2').className ='timeline-inner-textbox';
		document.getElementById('timeline-elipse').style.top ='260px';
		document.getElementById('timeline-scroll').style.height ='206.2px';
		document.getElementById('text-timeline1').style.top = '180px';
			document.getElementById('text-timeline2').style.top = '350px';
	}
	if (top.scrollY < 2350) {
		document.getElementById('child1').className = 'timeline-inner-textbox';
		document.getElementById('active').className = 'timeline-inner-textbox active';
		document.getElementById('timeline-elipse').style.top = '80px';
		document.getElementById('timeline-scroll').style.height = '26.2px';
		document.getElementById('text-timeline1').style.top = '0px';
	}


	if (responsi.matches) {
		if (top.scrollY > 4300) {
			document.getElementById('active').className = 'timeline-inner-textbox';
			document.getElementById('child1').className = 'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '260px';
			document.getElementById('timeline-scroll').style.height = '206.2px';
			if (top.scrollY >= 4400) {
				document.getElementById('child2').className = 'timeline-inner-textbox active';
				document.getElementById('child1').className = 'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '470px';
				document.getElementById('timeline-scroll').style.height = '416.2px';
			}
			if (top.scrollY > 4550) {
				document.getElementById('child3').className = 'timeline-inner-textbox active';
				document.getElementById('child2').className = 'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '650px';
				document.getElementById('timeline-scroll').style.height = '596.2px';
			}
			if (top.scrollY < 4550) {
				document.getElementById('child2').className ='timeline-inner-textbox active';
				document.getElementById('child3').className = 'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '470px';
				document.getElementById('timeline-scroll').style.height = '416.2px';
			}
		}
		if (top.scrollY < 4400) {
			document.getElementById('child1').className = 'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '260px';
			document.getElementById('timeline-scroll').style.height = '206.2px';
		}
		if (top.scrollY < 4300) {
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('active').className = 'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '80px';
			document.getElementById('timeline-scroll').style.height = '26.2px';
		}
	}


	if (responsive.matches) {
		if (top.scrollY > 2600) {
			document.getElementById('active').className = 'timeline-inner-textbox';
			document.getElementById('child1').className = 'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '200px';
		document.getElementById('text-timeline1').style.top = '85px';
		document.getElementById('timeline-scroll').style.height = '131.2px';
			if (top.scrollY > 2700) {
				document.getElementById('child2').className =
					'timeline-inner-textbox active';
				document.getElementById('child1').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
				document.getElementById('timeline-scroll').style.height = '251.2px';
				document.getElementById('text-timeline1').style.top = '135px';
			document.getElementById('text-timeline2').style.top = '200px';
			}
			if (top.scrollY > 2850) {
				document.getElementById('child3').className ='timeline-inner-textbox active';
				document.getElementById('child2').className ='timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '420px';
				document.getElementById('timeline-scroll').style.height = '351.2px';
			document.getElementById('text-timeline2').style.top = '300px';
			}
			if (top.scrollY < 2850) {
				document.getElementById('child2').className ='timeline-inner-textbox active';
				document.getElementById('child3').className ='timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
				document.getElementById('timeline-scroll').style.height = '251.2px';
			}
		}
		if (top.scrollY < 2700) {
			document.getElementById('child1').className =
				'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '200px';
			document.getElementById('timeline-scroll').style.height = '131.2px';
			document.getElementById('text-timeline1').style.top = '85px';
			document.getElementById('text-timeline2').style.top = '170px';
		}
		if (top.scrollY < 2600) {
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('active').className =
				'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '80px';
			document.getElementById('timeline-scroll').style.height = '11.2px';
			document.getElementById('text-timeline1').style.top = '-30px';
		}
	}
	if (responsiv.matches) {
		if (top.scrollY > 2600) {
			document.getElementById('active').className = 'timeline-inner-textbox';
			document.getElementById('child1').className =
				'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '200px';
			document.getElementById('timeline-scroll').style.height = '131.2px';
			if (top.scrollY > 2700) {
				document.getElementById('child2').className =
					'timeline-inner-textbox active';
				document.getElementById('child1').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
				document.getElementById('timeline-scroll').style.height = '251.2px';
			}
			if (top.scrollY > 2850) {
				document.getElementById('child3').className =
					'timeline-inner-textbox active';
				document.getElementById('child2').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '420px';
				document.getElementById('timeline-scroll').style.height = '351.2px';
			}
			if (top.scrollY < 2850) {
				document.getElementById('child2').className =
					'timeline-inner-textbox active';
				document.getElementById('child3').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
				document.getElementById('timeline-scroll').style.height = '251.2px';
			}
		}
		if (top.scrollY < 2700) {
			document.getElementById('child1').className =
				'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '200px';
			document.getElementById('timeline-scroll').style.height = '131.2px';
		}
		if (top.scrollY < 2600) {
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('active').className =
				'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '80px';
			document.getElementById('timeline-scroll').style.height = '11.2px';
		}
	}

}

myFunction(responsive); // Call listener function at run time
responsive.addListener(myFunction); // Attach listener function on state changes

myFunction(responsiv); // Call listener function at run time
responsiv.addListener(myFunction); // Attach listener function on state changes

myFunction(responsiv); // Call listener function at run time
responsiv.addListener(myFunction); // Attach listener function on state changes
