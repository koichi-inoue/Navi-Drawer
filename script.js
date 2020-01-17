$(function(){

  // Toggle navButton
  $(".navButton").click( function(){

    if( $(this).hasClass('isOpen')) {

      $('.navButton').removeClass('isOpen');
      $('.overlay').removeClass('isOpen');
      $(".menu").removeClass('isOpen');

    } else {

      $('.navButton').addClass('isOpen');
      $('.overlay').addClass('isOpen');
      $(".menu").addClass('isOpen');

    }

  });

  // Overlay
  $(".overlay").click( function(){

    if( $(this).hasClass('isOpen')) {

      $('.navButton').removeClass('isOpen');
      $('.overlay').removeClass('isOpen');
      $(".menu").removeClass('isOpen');

    }

  });


});
