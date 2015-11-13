//  default jquery document ready
$(document).ready( function() {
  // //  jquery fires event when click on .detailLink elements
  // $('.detailLink').click(function() {
  //   //we're now inside the detaiLink click event

  //   //  create a variable that holds the content of "data-detail" from the elemen that's been clicked
  //   var detailLink = $(this).data('detail');
  //   console.log(detailLink);

  //   //  create a var by selecting .detailPane with data-detail = detailLink
  //   var pane = $('.detailPane[data-detail="'+detailLink+'"]');

  //   //  hide all .detailPane except 'pane'
  //   $('.detailPane').not(pane).fadeOut("fast", function() {

  //     // show 'pane'
  //     pane.fadeIn("slow", "linear");
  //   });
  // });


  var text;
  console.log(text);

  text = $('#about').text();
  console.log(text);
});