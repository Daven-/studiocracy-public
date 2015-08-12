$(document).ready(function(){
  $(document)
    .on('click', '.reply-button', function(){
          //Check if the box is already active
          if (!$(this).data('activated')){
              var parent_id = $(this).parent('.comment').attr('id')
              //Hidden field for comment parent ID
              var parent_id_field = "<input value='" + parent_id + "' type='hidden' name='comment[parent_id]'' id='comment_parent_id'>"
              $(this).replaceWith($('#master-comment-form').clone().attr('id', "reply-div-" + parent_id).show(0))
              $('#' + "reply-div-" + parent_id).find('.field').append(parent_id_field)
              //Set activated Jquery data to true
              $(this).data('activated', true)
          }
    });
  
  /*$(".comment-form-div")
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
    });*/
});