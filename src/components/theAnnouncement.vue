<template>
    <div class="announce">
        <div class="announce__container">
            <router-link to="/"><span>new</span><p>2023/2024 jamb tutorial admission is ongoing </p><font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></router-link>
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
    //font-size: 90px;
    &__container{
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
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
a{
    display: flex;
    align-items: center;
    color: #000;
}
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