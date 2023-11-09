<template>
    <div class="wrapper">
        <div class="container">
            <router-link to="/" class="logo"><h2>LEARNSTACKS</h2></router-link>
            <div class="dynamic__text__wrapper">
                <div class="dynamic__text">
                    <h1>lets start creating magic today </h1>
                </div>
            </div>
            <div class="buttons__wrapper">
                <the-button>log in</the-button>
                <router-link to="/register"><the-button>sign up</the-button></router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.wrapper{
    height: 100vh;
    .container{
        display: grid;
        grid-template-columns: 60% 40%;
        height: 100%;
        position: relative;
        a.logo{
            position: absolute;
            top: 30px;
            left: 100px;
            color: white

}
    }
    .dynamic__text__wrapper{
        @include a.flex(flex-start, center);
        background: #000;
    .dynamic__text{
         @include a.container(80%);
        h1{
            color: rgb(47, 248, 6);
            font-size: 50px;
            line-height: 80px;
        }
    }
    }
    .buttons__wrapper{
        @include a.flex(center,center);
        gap: 40px;
    }
}
</style>
<script>
export default {
    mounted(){
        
    }
}
</script>
