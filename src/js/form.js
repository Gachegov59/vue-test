// function initAjaxForm($form) {
//     //$form.find(".js-mask-phone").inputmask("+7(999)999-99-99");
//     sbjs.init();
//     $form.find(".js-utm-type").val(sbjs.get.current.typ);
//     $form.find(".js-utm-src").val(sbjs.get.current.src);
//     $form.find(".js-utm-mdm").val(sbjs.get.current.mdm);
//     $form.find(".js-utm-cmp").val(sbjs.get.current.cmp);
//     $form.find(".js-utm-cnt").val(sbjs.get.current.cnt);
//     $form.find(".js-utm-trm").val(sbjs.get.current.trm);
// ​
//     $form.find(".js-utm-type-first").val(sbjs.get.first.typ);
//     $form.find(".js-utm-src-first").val(sbjs.get.first.src);
//     $form.find(".js-utm-mdm-first").val(sbjs.get.first.mdm);
//     $form.find(".js-utm-cmp-first").val(sbjs.get.first.cmp);
//     $form.find(".js-utm-cnt-first").val(sbjs.get.first.cnt);
//     $form.find(".js-utm-trm-first").val(sbjs.get.first.trm);
// ​
//     $.validator.addClassRules({
//         "-required": {
//             required: true
//         },
//         "-name": {
//             minlength: 2,
//             maxlength: 255
//         },
//         "-email": {
//             email: true
//         },
//         "-comment": {
//             minlength: 2,
//             maxlength: 2000
//         },
//         "-phone": {
//             phone: true
//         },
//         "-phone-chars": {
//             phoneChars: true
//         },
//         "-phone-length": {
//             phoneLength: [5, 20]
//         },
//         "-number": {
//             number: true
//         },
//         "-password": {
//             minlength: 4,
//             maxlength: 12
//         },
//         "-url": {
//             url: true
//         }
//     });
// ​
//     $form.validate({
//         errorPlacement(error, element) {
//             window.hz = error;
//             console.log(error);
//             element.closest(".b-form__row").find(".b-form__row-error").html(error.text());
//         },
// ​
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler () {
//         const url = $form.attr("action");
//         $form.addClass("_loading");
//         $.ajax({
//             url,
//             type: $form.attr("method"),
//             data: $form.serialize(),
//             dataType: 'json',
// ​
//                 complete(){
//             $form.removeClass("_loading");
//         },
//         success (response) {
//             if (response.status) {
//                 $form.find(".js-success").show();
//                 $form.find(".js-success").addClass("_location-after-close");
//                 $form.find(".js-fields").hide();
//                 $form.find(".js-success-text").text(response.successMessage);
//             } else {
//                 if (typeof response.globalMessage != "undefined") {
//                     $form.find(".js-error-global").show();
//                     $form.find(".js-error-global").text(response.globalMessage);
//                 }
//                 if (typeof response.errors != "undefined") {
//                     for (let i in response.errors) {
//                         const $input = $form.find("[name=" + i + "]");
//                         const $error = $input.closest(".b-form__row").find(".b-form__row-error");
// ​
//                                 $input.addClass("_error");
//                         $error.text(response.errors[i]).show();
//                     }
//                 }
//             }
//         }
//     });
//         return false;
//     }
// });
// }