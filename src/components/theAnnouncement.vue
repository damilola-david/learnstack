<template>
    <div class="announce">
        <div class="announce__container">
            <router-link to="/"><span>new</span><p>2023/2024 jamb tutorial admission is ongoing <font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/> </p></router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../SCSS/abstract" as a ;
.announce{
    position: fixed;
    top:80px;
    background: #fffe7a;
    color: #000;
    width: 100%;
    z-index: 999999;
    border: 2px solid #000;
    &__container{
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        //reducing the width at small screens
        @include a.breakpoint(small){
            @include a.container(90%)
        }
        
        //animation that makes the p tag to fade
        p{
            animation: fade 1s ease-in infinite alternate-reverse ;
        }
        @keyframes fade {
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
    }
}

//styling the router link that wraps the icon and p tag
a{
    display: flex;
    align-items: center;
    color: #000;
    text-align: center;
}

//new span tag
span{
    background: a.$green;
    margin-right: 10px;
    padding: 2.5px 16px;
    border-radius: 20px;

    @include a.breakpoint(small){
        display: none;
    }
}
</style>