$(function () {
    var app = new Vue({
        el: '#vue',
        data: {
            list: ['один', 'два', 'три'],
            users: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Pety'}
            ]
        }
    })
})