$(document).ready( function() {
  $('#about_nav').click(function() {
    $('#about').fadeIn('slow',function(){
      $('#contact_nav').click(function() {
        $('#about').fadeOut('slow');
      });
    });
  });
  $('#contact_nav').click(function(){
    $('#contact').fadeIn('slow',function(){
      $('#about_nav').click(function(){
        $('#contact').fadeOut('slow');
      })
    });
  });
});