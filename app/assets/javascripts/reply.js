$(document).ready(function(){
  $('.reply-button')
    .one('click', function(){
      var parent_id = $(this).parent('.comment').attr('id')
      var parent_id_field = "<input value='" + parent_id + "' type='hidden' name='comment[parent_id]'' id='comment_parent_id'>"

      $(this).replaceWith($('#master-comment-form').clone().attr('id', "reply-div-" + parent_id))
      $('#' + "reply-div-" + parent_id).find('.field').append(parent_id_field)
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