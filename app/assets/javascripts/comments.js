jQuery(function() {
  //target comment-form from comment form partial
  $(".comment-form-div form")
    .on("ajax:beforeSend", function(evt, xhr, settings) {
      return $(this).find('text_area')
      .addClass('uneditable-input')
      .attr('disabled', 'disabled');
      console.log("FOUND IT")
    })
    .on("ajax:success", function(evt, data, status, xhr) {
      $(this).find('text_area')
      .removeClass('uneditable-input')
      .removeAttr('disabled', 'disabled')
      .val('');
      console.log(xhr.responseText);
      return $(xhr.responseText).hide().insertAfter($(this)).show('slow');
    });


  /*$(document)
    .on("ajax:beforeSend", ".comment", function() {
      return $(this).fadeTo('fast', 0.5); 
    })
    .on("ajax:success", ".comment", function() {
      return $(this).hide('fast');
    })
    .on("ajax:error", ".comment", function() {
      return $(this).fadeTo('fast', 1);
    });
});*/

$(document).ready(function(){
  $('.reply').click(function(){
    $(this).parent().appendChild('<a>hi</a>')
  });
});