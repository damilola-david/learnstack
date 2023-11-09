<template>
  <section class="vision">
    <div class="vision__container">
      <div class="vision__text">
        <h2>here to <span style="color: rgb(47, 248, 6);">transform</span> the future of education</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis,
          asperiores quidem natus modi optio dolor, eos praesentium provident
         
        </p>
        <div class="why__grid">
          <div class="one">
            <h3>virtual learning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae possimus quia ad non consectetur soluta similique
              architecto provi.
            </p>
          </div>
          <div class="two">
            <h3>quality over quantity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae possimus quia ad non consectetur
            </p>
          </div>
          <div class="two">
            <h3>detailed syllabus</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae possimus quia ad non consectetur soluta similique
              archit.
            </p>
          </div>
          <div class="two">
            <h3>stack learning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div class="vision__image">
        <img src="../../../public/IMAGES/pexels-julia-m-cameron-4144100.jpg" alt="" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.vision {
  &__container {
    @include a.container(90%);
    padding: 50px 0px;
    display: grid;
    grid-template-columns: 55% 45%;
    grid-auto-rows: auto;
    place-items: center;
    gap: 20px;
    @include a.breakpoint(small){
      grid-template-columns: repeat(1,1fr);
    }
  }
  &__text {
    h2 {
      font-size: 45px;
      width: 80%;
      margin-bottom: 10px;
      @include a.breakpoint(small){
        width: 100%;
      }
    }
    p {
      line-height: 35px;
    }
  }
  &__image {
    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      border: 2px solid #000;
      transform: scaleX(-1);
      object-position:bottom;
    }
  }
}
.why__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 240px);
  padding: 40px 0px;
    gap: 10px;
    @include a.breakpoint(small){
      grid-template-columns: repeat(1,1fr);
      grid-template-rows: none;
      grid-auto-rows: auto;
    }
  div:first-child{
    background-color: #000;
    color: #fff;
  }
  &>*{
    padding: 15px;
    //background: red;
    border-radius: 10px;
    border: 2px solid #000;

    h3{
      margin-bottom: 10px;
      font-size: 22px;
    }
  }
}
</style>
