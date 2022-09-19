const toggles = document.querySelectorAll('.faq-toggle');
var top = document.getElementById('top');
var responsive = window.matchMedia('(max-width: 520px)');

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
	if (top.scrollY > 3150) {
		document.getElementById('active').className = 'timeline-inner-textbox';
		document.getElementById('child1').className =
			'timeline-inner-textbox active';
		document.getElementById('timeline-elipse').style.top = '260px';
		if (top.scrollY > 3300) {
			document.getElementById('child2').className =
				'timeline-inner-textbox active';
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '470px';
		}
		if (top.scrollY > 3550) {
			document.getElementById('child3').className =
				'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '650px';
		}
		if (top.scrollY < 3550) {
			document.getElementById('child2').className =
				'timeline-inner-textbox active';
			document.getElementById('child3').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '470px';
		}
	}
	if (top.scrollY < 3300) {
		document.getElementById('child1').className =
			'timeline-inner-textbox active';
		document.getElementById('child2').className = 'timeline-inner-textbox';
		document.getElementById('timeline-elipse').style.top = '260px';
	}
	if (top.scrollY < 3150) {
		document.getElementById('child1').className = 'timeline-inner-textbox';
		document.getElementById('active').className =
			'timeline-inner-textbox active';
		document.getElementById('timeline-elipse').style.top = '80px';
	}

	if (responsive.matches) {
		if (top.scrollY > 2900) {
			document.getElementById('active').className = 'timeline-inner-textbox';
			document.getElementById('child1').className =
				'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '200px';
			if (top.scrollY > 3000) {
				document.getElementById('child2').className =
					'timeline-inner-textbox active';
				document.getElementById('child1').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
			}
			if (top.scrollY > 3150) {
				document.getElementById('child3').className =
					'timeline-inner-textbox active';
				document.getElementById('child2').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '420px';
			}
			if (top.scrollY < 3150) {
				document.getElementById('child2').className =
					'timeline-inner-textbox active';
				document.getElementById('child3').className =
					'timeline-inner-textbox';
				document.getElementById('timeline-elipse').style.top = '320px';
			}
		}
		if (top.scrollY < 3000) {
			document.getElementById('child1').className =
				'timeline-inner-textbox active';
			document.getElementById('child2').className = 'timeline-inner-textbox';
			document.getElementById('timeline-elipse').style.top = '200px';
		}
		if (top.scrollY < 2900) {
			document.getElementById('child1').className = 'timeline-inner-textbox';
			document.getElementById('active').className =
				'timeline-inner-textbox active';
			document.getElementById('timeline-elipse').style.top = '80px';
		}
	}
}

myFunction(responsive); // Call listener function at run time
responsive.addListener(myFunction); // Attach listener function on state changes
