// Basic Site Jquery and JavaScript

var $ = jQuery;

$( document ).ready(function() {
  $( ".mobile-trigger" ).click(function() {
    $( ".mobile-nav-container" ).animate({ "left": "-=100%" }, "fast");
  });

  $( ".fa-times" ).click(function() {
    $( ".mobile-nav-container" ).animate({ "left": "+=100%" }, "fast" );
  });
});
