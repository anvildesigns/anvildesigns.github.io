new WOW().init();

$(window).stellar({ horizontalScrolling: false });

/**Animated Header ----- Needs Classie to function **/


var cbpAnimatedHeader = (function() {

 var docElem = document.documentElement,
   header = document.querySelector( '.navbar' ),
   didScroll = false,
   changeHeaderOn = 300;

 function init() {
   window.addEventListener( 'scroll', function( event ) {
     if( !didScroll ) {
       didScroll = true;
       setTimeout( scrollPage, 250 );
     }
   }, false );
 }

 function scrollPage() {
   var sy = scrollY();
   if ( sy >= changeHeaderOn ) {
     classie.add( header, 'navbar-is-scrolled' );
   }
   else {
     classie.remove( header, 'navbar-is-scrolled' );
   }
   didScroll = false;
 }

 function scrollY() {
   return window.pageYOffset || docElem.scrollTop;
 }

 init();

})();

/**Navbar Colour Shift ----- Needs Classie to function **/


var cbpAnimatedHeader = (function() {

 var docElem = document.documentElement,
   header = document.querySelector( '.navbar-fixed-top' ),
   didScroll = false,
   changeHeaderOn = 300;

 function init() {
   window.addEventListener( 'scroll', function( event ) {
     if( !didScroll ) {
       didScroll = true;
       setTimeout( scrollPage, 250 );
     }
   }, false );
 }

 function scrollPage() {
   var sy = scrollY();
   if ( sy >= changeHeaderOn ) {
     classie.remove( header, 'navbar-expanded' );
   }
   else {
     classie.add( header, 'navbar-expanded' );
   }
   didScroll = false;
 }

 function scrollY() {
   return window.pageYOffset || docElem.scrollTop;
 }

 init();

})();

/**Brand Transition ----- Needs Classie to function **/


var cbpAnimatedHeader = (function() {

 var docElem = document.documentElement,
   header = document.querySelector( '.navbar-brand' ),
   didScroll = false,
   changeHeaderOn = 300;

 function init() {
   window.addEventListener( 'scroll', function( event ) {
     if( !didScroll ) {
       didScroll = true;
       setTimeout( scrollPage, 250 );
     }
   }, false );
 }

 function scrollPage() {
   var sy = scrollY();
   if ( sy >= changeHeaderOn ) {
     classie.add( header, 'brand-slide' );
   }
   else {
     classie.remove( header, 'brand-slide' );
   }
   didScroll = false;
 }

 function scrollY() {
   return window.pageYOffset || docElem.scrollTop;
 }

 init();

})();

/** Animated Scroll -------- **/

$('a').click(function(){
   $('html, body').animate({
       scrollTop: $( $(this).attr('href') ).offset().top
   }, 500);
   return false;
});

/** **/
$(function() {

   $('.menu-trigger').on('click', function(){
      $('.menu').toggleClass('menu-is-open');
   });

});

$(function() {

   $('.menu-trigger').on('click', function(){
      $('.top').toggleClass('top-is-open');
   });

});

$(function() {

   $('.menu-trigger').on('click', function(){
      $('.middle').toggleClass('middle-is-open');
   });

});

$(function() {

   $('.menu-trigger').on('click', function(){
      $('.bottom').toggleClass('bottom-is-open');
   });

});

/** Mailer ------- **/

$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
      $('#phone').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
