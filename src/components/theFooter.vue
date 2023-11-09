<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__list">
                <h4>departments</h4>
                <a href="" class="">science</a>
                <a href="" class="">arts</a>
                <a href="" class="">commercial</a>
            </div>
            <div class="footer__list">
                <h4>company</h4>
                <a href="" class="">tuition</a>
                <a href="" class="">faq</a>
                <a href="" class="">careers</a>
                <a href="">invest</a>
            </div>
            <div class="footer__list">
                <h4>support</h4>
                <a href="" class="">blog</a>
                <a href="" class="">help</a>
                <a href="" class="">guides</a>
            </div>
            <div class="footer__list">
                <h4>follow</h4>
                <a href="" class="">twitter</a>
                <a href="" class="">facebook</a>
                <a href="" class="">linkedin</a>
                <a href="" class="">youtube</a>
            </div>
        </div>
        <div style="padding: 0px 70px;">
            <hr style=" border-color: #5c5c5c52; width: 100%; padding: 0px;">
        </div>
        <div style="text-align: center;  padding: 30px 0px;">
            &copy; LEARNSTACK 2023
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use "../SCSS/abstract/" as a;
.footer{
    
    &__container{
        @include a.container(70%);
        @include a.flex(space-between,stretch);
        padding: 40px 0px;

        //changing the flex items to column on small screens
        @include a.breakpoint(small){
            flex-direction: column;
        }
    }
    &__list{
        a{
            display: block;
            margin: 20px 0px;
        }
    }
}
</style>