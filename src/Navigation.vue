<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top row">

                    <router-link tag="li" class="col" class-active="active" to="/" exact>TIME</router-link>
                    <router-link tag="li" class="col" class-active="active" to="/CNN" exact>CNN</router-link>
                    <router-link tag="li" class="col" class-active="active" to="/TechCrunch" exact>TechCrunch</router-link>
                    <router-link tag="li" class="col" class-active="active" to="/BBCSport" exact>BBC Sport</router-link>
        </nav>
    </div>
</template>

<script>
    export default{}
</script>

<style>
    nav.navbar {
        background-color: lightsalmon;
        padding: 0;
    }

    nav li {
        color: #fff;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 20px;
    }

    nav li{
        list-style-type: none;
        text-align: center;
    }

    nav li:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active{
        background-color: indianred;
        cursor: pointer;
    }

    nav li.col a:hover{
        color: #fff;
        text-decoration: none;
    }
</style>