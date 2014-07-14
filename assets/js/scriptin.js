
$(function() {
	var $window = $(window);

	var picWidth = $('#pic').width();
	$('#profile-pic').attr({'width': picWidth, 'height': picWidth});


	$window.scroll(function (event) {
		var scrollTop = $window.scrollTop();

		console.log(scrollTop);
		if (scrollTop*0.4 < 250) {
			$('#box1').animate({height: scrollTop*0.4, width: scrollTop*0.4}, 10);
		}
		
	});

}); //on load 