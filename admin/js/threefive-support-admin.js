(function ($) {
    'use strict';

    $(function () {
        var fieldValues = new Array();

        $('#threefive-support').submit(function (event) {
            event.preventDefault();

            var data = {
                    action: 'threefive_ajax_send_mail',
                    email: $('#tf_your_email').val(),
                    name: $('#tf_your_name').val(),
                    message: $('#tf_support_request_msg').val()
                },
                submitBtn = $('#tf_support_submit'),
                loader = $('div.loader'),
                messageBox = $('#message-box'),
                successMsg = 'Your request has been submitted successfully. We will review your request and respond shortly.',
                errorMsg = '';

            // Validation
            // Reset the errors and messages
            fieldValues = []; // Empty the array on each submit
            messageBox.removeClass('error updated').text(''); // Empty and reset the message box
            $('#threefive-support').find('.error').each(function () {
                $(this).removeClass('error');
            });

            // First, check for a valid email address.
            if ((data.email).indexOf('@') == -1) {
                fieldValues.push('false');
                $('#tf_your_email').addClass('error');
                errorMsg = 'Please enter a valid email address.';
                messageBox.addClass('error').text(errorMsg);
                return;
            }

            // Second, check for blank fields.
            $('#threefive-support').find('input.required, textarea.required').each(function () {
                if ($(this).val() == '' || (data.email).indexOf('@') == -1) {
                    fieldValues.push('false');
                    $(this).addClass('error');
                    errorMsg = 'Please fill out all required fields.';
                }
            });

            // Thirdly, check to see that no more than 3 files are being uploaded.
            var $fileUpload = $("#tf_support_request_files");
            if (parseInt($fileUpload.get(0).files.length) > 3) {
                fieldValues.push('false');
                errorMsg = "You can only upload a maximum of 3 files";
            }

            $fileUpload.each(function () {
                var thisFile = $(this);
                var fileSize = thisFile[0].files[0].size;
                var fileType = thisFile[0].files[0].type;

                if ( fileSize > 2097152 ) {
                    fieldValues.push('false');
                    errorMsg = "One or more of your files is larger than 2MB please reduce the size of your files before uploading.";
                }

                switch ( fileType  ) {
                    case 'application/pdf':
                    case 'image/png':
                    case 'image/jpeg':
                    case 'image/gif':
                        break; // Acceptable file types submitted.
                    default:
                        fieldValues.push('false');
                        errorMsg = "One or more of your files is not a supported file type. Accepted formats are: .jpg, .gif, .png, .pdf";
                }
            });

            //Lastly, Print the error message for blank fields
            messageBox.addClass('error').text(errorMsg);

            // All systems go!
            if ($.inArray('false', fieldValues) == '-1') {
                submitBtn.attr('disabled', 'disabled');
                loader.addClass('show');

                $.ajax({
                    url: wpAdminAjax.ajaxurl,
                    type: 'POST',
                    data: data,
                })
                    .done(function () {
                        loader.removeClass('show');
                        submitBtn.removeAttr('disabled');
                        messageBox.removeClass('error').addClass('updated').text(successMsg);
                        $('#tf_support_request_msg').val('');
                    })
                    .fail(function () {
                        // console.log("error");
                    })
            }

        });
    })

})(jQuery);
