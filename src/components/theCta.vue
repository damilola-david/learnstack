
<template>
  <div class="cta">
    <div class="cta__container">
     <div class="cta__text">
      <h1>you can learn anything <br />if you got the drive</h1>
      <p>the question now is do you have the drive</p>
      <the-button>start learning <font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></the-button>
     </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../SCSS/abstract/" as a;

.cta{
  background: rgb(47, 248, 6);
  &__container{
    @include a.flex(center,center);
    padding: 30px 0px;
  }
  &__text{
    text-align: center;
    &>*{
      margin-bottom: 20px;
    }
    h1{
      font-size: 40px;
      @include a.breakpoint(small){
        font-size: 30px;
      }
    }
    button{
      background: #fff;
    }
  }
}
</style>