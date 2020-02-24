$(function () {
    let errorClass = 'js-form-validation__ajax_error-valid';
    $.fn.validErrors = function (type, ajaxResult = {}) {
        if (type === 'ajax' && Object.keys(ajaxResult.errors).length) {
            checkChildren(this);
        } else if (type === 'clearError') {
            checkChildren(this);
        }
        function removeError(item) {
            let tagName = item.tagName.toLowerCase();
            if (tagName === 'input' || tagName === 'select' || tagName === 'label' || tagName === 'textarea') {
                item.classList.remove(errorClass);
                let next = item.nextElementSibling;
                if (next && next.className.includes('js-form-validation__ajax-text')) {
                    $(next).remove();
                }
            }
        }
        function checkChildren(item) {
            item = $(item);
            if (item.children.length) {
                item.children().each((index, item) => {
                    if (Object.keys(ajaxResult).length && item.name in ajaxResult.errors) {
                        item.classList.add(errorClass);
                        item.insertAdjacentHTML('afterend', `<span class="js-form-validation__ajax-text">${ajaxResult.errors[item.name]}</span>`);
                        item.onclick = function () {
                            removeError(item);
                        };
                        item.onchange = function () {
                            removeError(item);
                        };
                    } else if (type === 'clearError') {
                        removeError(item);
                    }
                    return checkChildren(item);
                });
            }
        }
        return this;
    };
console.log(1)
});