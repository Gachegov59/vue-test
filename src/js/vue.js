$(function () {
    var app = new Vue({
        el: '#vue',
        data: {
            hashtags: [],
            cities: [],
            textSearch: '',
            url: {
                hashtags: 'https://dka-develop.ru/api?type=hashtag',
                cities: 'https://dka-develop.ru/api?type=city'
            }
        },
        watch: {
           textSearch: function() {
               if(this.textSearch.length > 3) {
                   this.textSearch = 'Меняем содержимое поля из кода';
               }
           }
        },
        created: function () {
            console.log(this.url.hashtags)
        },
        methods: {
            getHashtags() {
                axios.get(this.url.hashtags).then((response) => {
                    console.log(this)
                    this.hashtags = response.data;
                })
            },
            getCities() {
                axios.get(this.url.cities).then((response) => {
                    console.log(response.data)
                    this.cities = response.data;
                })
            }
        }
    })
})