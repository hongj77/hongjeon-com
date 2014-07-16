
$(function() {
	var $window = $(window);

	//scroll responsive
	$window.scroll(function (event) {
		var scrollTop = $window.scrollTop();

		console.log(scrollTop);

		if (scrollTop < 420) {
			makeIdDissapear('#me-1');
			makeIdDissapear('#me-2');
			makeIdDissapear('#me-3');
		}
		// if (scrollTop < 550) {
		// 	makeIdDissapear('#project-section');
		// }
		if (scrollTop > 690) {
			makeIdAppear('#me-1');
		}
		if (scrollTop > 750) {
			makeIdAppear('#me-2');
		}
		if (scrollTop > 800) {
			makeIdAppear('#me-3');
		}

		// if (scrollTop > 1250) {
		// 	makeIdAppear('#project-section');
		// }
	});

	//hover responsive
	faded('#me-1');
	faded('#me-2');
	faded('#me-3');

}); //on load 

function faded (id) {
	var idHead = id + '-head';
	var idText = id + '-text';
	var idDark = id + '-dark';

	$(id).mouseenter(function() {
		$(idDark).css('visibility', 'visible');
		$(idHead).css('visibility', 'visible');
		$(idHead).removeClass('fadeOut');
		$(idHead).addClass('animated fadeIn');
		$(idText).css('visibility', 'visible');
		$(idText).removeClass('fadeOutDown');
		$(idText).addClass('animated fadeInUp');
	}).mouseleave(function() {
		$(idDark).css('visibility', 'hidden');
		$(idHead).removeClass('fadeIn');
		$(idHead).addClass('fadeOut');
		$(idText).removeClass('fadeInUp');
		$(idText).addClass('fadeOutDown');
	});
}

function makeIdAppear (id) {
	$(id).css('visibility', 'visible');
	$(id).addClass("animated fadeIn");
}

function makeIdDissapear(id) {
	$(id).css('visibility', 'hidden');
	$(id).removeClass("animated fadeIn");
}