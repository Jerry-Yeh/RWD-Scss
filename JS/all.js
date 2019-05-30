 $(document).ready(function() {

 	/* header start */

 	$('.open').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('body').toggleClass('menu-show');
 	});

 	/* header end */
 	/* cart start */
 	$('.aside li').addClass('animated');
 	$('.aside li').click(function(){
 		$(this).toggleClass('active');
 		$(this).siblings().removeClass('active')
 	});
 	$('.all').click(function(event) {
 		/* Act on the event */
 		$('#classic').removeClass('none');
 		$('#handsome').removeClass('none');
 		$('#hamburg').removeClass('none');
 		$('#dragon').removeClass('none');
 	});
 	$('.french_fries').click(function(event) {
 		/* Act on the event */
 		$('#classic').addClass('none');
 		$('#handsome').addClass('none');
 		$('#hamburg').addClass('none');
 		$('#dragon').removeClass('none');
 	});
 	$('.heat').click(function(event) {
 		/* Act on the event */
 		$('#classic').addClass('none');
 		$('#handsome').removeClass('none');
 		$('#hamburg').addClass('none');
 		$('#dragon').addClass('none');
 	});
 	$('.hamburger').click(function(event) {
 		/* Act on the event */
 		$('#classic').removeClass('none');
 		$('#handsome').addClass('none');
 		$('#hamburg').removeClass('none');
 		$('#dragon').removeClass('none');
 	});

 	$('.fa-heart').click(function(){
 		$(this).toggleClass('far');
 		$(this).toggleClass('fas');
 	});

 	/* cart end */

 });