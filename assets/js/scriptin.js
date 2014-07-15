
$(function() {
	var $window = $(window);

	// var picWidth = $('#pic').width();
	// $('#profile-pic').attr({'width': picWidth, 'height': picWidth});


	$window.scroll(function (event) {
		var scrollTop = $window.scrollTop();

		console.log(scrollTop);
		// if (scrollTop*0.5 < 250) {
		// 	$('#box1').css({height: scrollTop*0.5, width: scrollTop*0.5});
		// }

		
		
	});

}); //on load 