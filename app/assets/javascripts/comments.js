$(document).ready(function() {
    jQuery(function () {
        //target comment-form from comment form partial
        $(document)
            .on("ajax:beforeSend", '.comment-form-div', function (evt, xhr, settings) {
                console.log("Ajax request sent")
                return $(this).find('text_area')
                    .addClass('uneditable-input')
                    .attr('disabled', 'disabled');
            })
            .on("ajax:success", '.comment-form-div', function (evt, data, status, xhr) {
                console.log("Ajax request successful")

                $(this).find('text_area')
                    .removeClass('uneditable-input')
                    .removeAttr('disabled', 'disabled')
                    .val('');
                $(this).hide('slow')
                return $(xhr.responseText).hide().insertAfter($(this)).show('slow');
            });
    });

    // characters remaining - works for the first one, but not for the rest
    // might have to give each text area and p its unique id, like
    // were doing with comments
    // not sure if this method will be any different http://stackoverflow.com/questions/29017809/ruby-on-rails-display-amount-of-characters-remaining-for-f-text-area
    // havent tried it yet
    function update(){
        var remaining = 100 - $("#comment_body").val().length; // a hundred for testing - change for production
        $("#remaining").text("characters remaining: " + remaining);
    }
    update();
    $('#comment_body').keyup(function(){
        update();
    });
    $('#comment_body').change(function(){
        update();
    });
});