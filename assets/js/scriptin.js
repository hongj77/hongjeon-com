
$(function() {
	var $window = $(window);

	// var picWidth = $('#pic').width();
	// $('#profile-pic').attr({'width': picWidth, 'height': picWidth});


	$window.scroll(function (event) {
		var scrollTop = $window.scrollTop();

		console.log(scrollTop);
		if (scrollTop > 690) {
			makeIdAppear('#me-1');
		}
		if (scrollTop > 750) {
			makeIdAppear('#me-2');
		}
		if (scrollTop > 800) {
			makeIdAppear('#me-3');
		}

	});

}); //on load 

function makeIdAppear (id) {
	$(id).css('visibility', 'visible');
	$(id).addClass("animated fadeIn");
}