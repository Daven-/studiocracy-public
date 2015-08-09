$(document).ready(function(){
  $('.reply-button').one('click', function(){
    var parent_id = $(this).parent('.comment').attr('id')
    var parent_id_field = "<input value='" + parent_id + "' type='hidden' name='comment[parent_id]'' id='comment_parent_id'>"

    $(this).replaceWith($('#master-comment-form').clone().attr('id', "reply-div-" + parent_id))
    $('#' + "reply-div-" + parent_id).find('.field').append(parent_id_field)
  });
});