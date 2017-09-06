<template>
    <div class="row">
        <div class="card" style="width: 32%;" v-for="article in articles">

            <img class="card-img-top" v-bind:src="article.urlToImage" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
                <p>{{article.publishedAt}}</p>
                <p class="card-text">{{article.description}}...</p>
                <a v-bind:href="article.url" target="_blank" class="btn btn-secondary btn-sm">Read More</a>
            </div>

        </div>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default{
        data:function(){
            return {
                articles: ''
            }
        },
        created:function(){
            let vm = this;
            Axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=245980c58e3a478eac2c71f8603dd229')
                .then(function(response){
                    vm.articles = response.data.articles;
                })
        }
    }
</script>

<style>


    img.card-img-top{
        margin-bottom: 5px;
    }

    .row .card{
        width: 31%;
        background: #fff;
        padding: 1%;
        margin-bottom: 30px;
    }

    .row .card:nth-of-type(3n+2){
        margin-left: 1%;
        margin-right: 1%;
    }

</style>