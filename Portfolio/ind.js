// Smooth scrolling when clicking on navigation links
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Contact form submission
    $('#contact-form').submit(function (e) {
      e.preventDefault();
      // Your form submission code goes here
      // For example, you can use an AJAX request to submit the form data to the server
    });
  });
  