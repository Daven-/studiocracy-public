/*jQuery(function() {
  //target comment-form from comment form partial
  $(".comment-form-div")
    .on("ajax:beforeSend", function(evt, xhr, settings) {
      return $(this).find('text_area')
      .addClass('uneditable-input')
      .attr('disabled', 'disabled');
    })
    .on("ajax:success", function(evt, data, status, xhr) {
      $(this).find('text_area')
      .removeClass('uneditable-input')
      .removeAttr('disabled', 'disabled')
      .val('');
      return $(xhr.responseText).hide().insertAfter($(this)).show('slow');
    });
});*/