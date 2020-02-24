$(function () {

    $('.js-form').each(function () {
        let $form = $(this);
        if ($form) {
            initAjaxForm($form)

            function initAjaxForm($form) {
                // $('.js-fancy-ajax').fancybox({
                //     maxWidth: 400,
                //     maxHeight: 300,
                //     fitToView: false,
                //     width: '10%',
                //     height: '10%',
                //     autoSize: false,
                //     closeClick: false,
                //     openEffect: 'none',
                //     closeEffect: 'none'
                // });
                $form.validate({
                    reles: {
                        name: {
                            required: true,
                            minlength: 3
                        },
                        email: {
                            required: true,
                            email: true
                        }
                    },
                    messages: {
                        name: {
                            required: 'Введите имя',
                            minlength: 'Минимум 3 символа'
                        },
                        email: {
                            required: 'Введите email',
                            email: 'Введите коректный адрес'
                        }
                    },

                    // Make sure the form is submitted to the destination defined
                    // in the "action" attribute of the form when valid
                    submitHandler() {
                        const url = $form.attr("action");
                        $form.addClass("_loading");
                        $.ajax({
                            url,
                            type: $form.attr("method"),
                            data: $form.serialize(),
                            dataType: 'json',
                            complete() {
                                $form.removeClass("_loading");
                                $form.trigger('reset');

                                // // captcha reload
                                // grecaptcha.execute('6Ld8yL8UAAAAADTQp2q3oHMnn-OcCLMcQgUO4eAa', { action: 'homepage' }).then(function (token) {
                                //     var recaptchaResponse = document.getElementById('g-recaptcha-response');
                                //     recaptchaResponse.value = token;
                                // });
                            },
                            success(response) {
                                //
                                // $('.popup__title').html(response.data.title);
                                // $('.popup__text').html(response.data.message);
                                //
                                // $form.find(".js-fancy-ajax").trigger('click');
                            }
                        });
                        return false;
                    }
                });
            }
        }
    })
})
// $(function () {
//
//     $('form.js-form-validation').on('submit', function (e) {
//         e.preventDefault();
//         let $form = $(this);
//
//         $form.addClass('_loader');
//         $form.find('.btn').attr('disabled', true);
//         $form.validErrors('clearError');
//         $('.js-global-error').text('');
//         $.ajax({
//             url: $form.attr('action'),
//             type: $form.attr('method'),
//             data: $form.serialize(),
//             dataType: 'json',
//
//             complete() {
//                 $form.removeClass('_loader');
//                 $form.find('.btn').attr('disabled', false);
//             },
//             success(response) {
//                 if (response.status) {
//                     $form.find('.input-container-border').hide();
//                     if ($form.attr('data-clear')) {
//                         $form.find('input').val('');
//                     }
//                     if (response.reload) {
//                         $.fancybox.close();
//                         location.reload();
//                     } else if (response.redirect) {
//                         $.fancybox.close();
//                         location.replace(response.redirect);
//                     } else {
//                         $.fancybox.close();
//                         let popupMessage = $('.js-popup-message');
//                         popupMessage.find(".js-popup-title").text('');
//                         popupMessage.find(".js-popup-text").text('');
//                         popupMessage.find(".js-popup-title").text(response.title);
//                         popupMessage.find(".js-popup-text").text(response.text);
//                         $.fancybox.open(popupMessage);
//                     }
//                 } else {
//                     if ('errors' in response) {
//                         $form.validErrors('ajax', response);
//                     }
//                     if ('globalMessage' in response) {
//                         $('.js-global-error').text(response.globalMessage);
//                     }
//                     if (typeof response.globalMessage != 'undefined') {
//                         $form.find('.js-form-submit').show();
//                         $form.find('.js-form-submit').text(response.globalMessage);
//                     }
//                     if (typeof response.errors != 'undefined') {
//                         const $error = $form.find('.js-form-submit');
//                         $error.html('');
//
//                         for (let i in response.errors) {
//                             $form.find(`input[id="${i}"]`).siblings('.input-container-border').show();
//                             $error.append('<p>' + response.errors[i] + '</p>');
//                         }
//                         $error.show();
//                     }
//                 }
//             }
//         });
//     });
// });