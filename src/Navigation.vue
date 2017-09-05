<template>
    <div>
        <nav class="py-3 navbar navbar-expand-lg fixed-top row">
            <div class="col">
                <a class="nav-link" href="#">TIME</a>
            </div>
            <div class="col">
                <a class="nav-link" href="#">CNN</a>
            </div>
            <div class="col">
                <a class="nav-link" href="#">BBC</a>
            </div>
            <div class="col">
                <a class="nav-link" href="#">Google News</a>
            </div>
        </nav>
    </div>
</template>

<script>
    export default{}
</script>

<style>
    nav {
        background-color: lightsalmon;
    }

    nav a {
        color: #fff;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 20px;
        text-align: center;
    }

    nav a:hover{
        color: darkgray;
    }
</style>