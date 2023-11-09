<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__text__wrapper">
        <div class="hero__text">
          <div class="text" v-motion
          :initial="{
      opacity: 0,
      x: -500,
      y:500,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      x:0,
      transition: {
        duration: 500,
    },
    }">
            <h1>prepare for your exams the <span>right </span>way</h1>
            <p>if you want to learn is not better to learn the right way?</p>
            <the-button>get started <font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></the-button>
          </div>
        </div>
      </div>
      <div class="hero__image__wrapper">
        <img src="../../../public/IMAGES/three.jpg" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/abstract/" as a;
.hero {
  &::before {
    height: 80px;
    content: "";
    display: block;
  }
  &__container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: minmax(400px, 600px);

    /*changing the hero section 
    banner to one column when on smaller devices*/
    @include a.breakpoint(small){
      grid-template-columns: repeat(1,1fr);
      grid-auto-rows: minmax(200px, 350px);
    }
  }
  &__text__wrapper {
    @include a.flex(flex-start, center);
    @include a.container(100%);
    background: rgb(8, 8, 8);
    color: #fff;
    h1 {
      font-size: 60px;
      margin-bottom: 20px;
      line-height: 80px;

      //styling the h1 on small screens
      @include a.breakpoint(small){
      font-size: 35px;
      line-height: 60px;
    }

      span {
        color: rgb(47, 248, 6);
        font-family: inherit;
      }
    }
    p {
      margin-bottom: 20px;
    }
  }
  &__text {
    @include a.container(70%);

    @include a.breakpoint(small){
      @include a.container(90%);
    }
    .text{
        width: 100%;
    }
  }
  &__image__wrapper {
    //@include a.flex(center, center);
    background: #123524;
    @include a.breakpoint(small){
      grid-row: 1/2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transform: scaleX(-1);
  @include a.breakpoint(small){
    object-position: top;
  }
      //clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    }
  }
}
</style>
