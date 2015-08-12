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
                return $(xhr.responseText).hide().insertAfter($(this)).show('slow');
            });
    });
});