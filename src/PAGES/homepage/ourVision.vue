<template>
  <section class="vision">
    <!--container for the vision-->
    <div class="vision__container">
      <div class="vision__text">
        <h2>here to <span>transform</span> the future of education</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
          aliquid.
        </p>
      </div>
      <!--wrapper for the grid-->
      <div class="vision__grid">
        <!--grid section for the image-->
        <div class="vision__grid__image">
          <img
            src="../../../public/IMAGES/pexels-canva-studio-3153199.jpg"
            alt=""
          />
        </div>
        <!--grid section for the text-->
        <div class="vision__grid__text">
          <div class="text active">
            <div class="icon-div">
              <font-awesome-icon icon="fa-solid fa-check-double" class="icon" />
             </div>
            <div class="">
              <h3>quality over quantity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                voluptatum voluptatibus exercitationem praesentium consectetur
                doloremque error voluptate veniam non eos?
              </p>
            </div>
          </div>
          <div class="text">
            <div class="icon-div">
              <font-awesome-icon icon="fa-solid fa-check-double" class="icon" />
             </div>
            <div class="">
              <h3>online learning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                voluptatum voluptatibus exercitationem praesentium consectetur
                doloremque error voluptate veniam non eos?
              </p>
            </div>
          </div>
          <div class="text">
            <div class="icon-div">
              <font-awesome-icon icon="fa-solid fa-check-double" class="icon" />
             </div>
            <div class="">
              <h3>detailed learning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                voluptatum voluptatibus exercitationem praesentium consectetur
                doloremque error voluptate veniam non eos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.vision {
  &__container {
    @include a.container(95%);
    .vision__text {
      text-align: center;
      margin-bottom: 20px;
      @include a.breakpoint(small){
          width: 90%;
          margin: 0px auto;
        }
      h2 {
        margin-bottom: 10px;
        font-size: 45px;
        @include a.breakpoint(small){
          font-size: 35px;
        }
        span{
          color: a.$green;
        }
      }
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 600px;
    padding: 20px 0px;
    @include a.breakpoint(small){
      grid-template-columns: repeat(1,1fr);
      grid-auto-rows: auto;
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rebeccapurple;
      border-radius: 10px;
      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 10px;
        border: 2px #000;
      }
    }

    //styling the vision grid text
    &__text {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3,1fr);
      row-gap: 20px;
      padding: 20px 0px;
      justify-items: center;
      & > div {
        border: 1.8px solid #000;
        border-radius: 10px;
        width: 90%;
        .icon-div{
          max-width: 10%;
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          position: relative;
          .icon{
            position: absolute;
            top: 20%;

          }
        }
      }
    }
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin: 0px auto;
      //width: 90%;
      padding: 20px;
      h3 {
        margin-bottom: 10px;
      }
    }
  }
  .text.active{
    background: #000;
    color: #fff;
  }
}
</style>
