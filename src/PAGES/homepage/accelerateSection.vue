<template>
  <section class="accelerate">
    <div class="accelerate__container">
      <h2>here to accelerate <br />you to <span>success</span></h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Ipsum
        illo soluta vero, quia ut quidem eius aspernatur sed! Culpa, nesciunt.
      </p>
      <div class="accelerate__grid">
        <div class="reason">
          <img src="../../assets/IMAGES/Rangitikei.png" alt="" />
          <div class="reason__text">
            <h5>fun learning</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ad
              voluptatem officiis, minus debitis ipsa.
            </p>
          </div>
        </div>

        <div class="reason">
          <img src="../../assets/IMAGES/Waiau.png" alt="" />
          <div class="reason__text">
            <h5>affordable tuition</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ad
              voluptatem officiis, minus debitis ipsa.
            </p>
          </div>
        </div>

        <div class="reason">
          <img src="../../assets/IMAGES/Waihou.png" alt="" />
          <div class="reason__text">
            <h5>flexible learning</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ad
              voluptatem officiis, minus debitis ipsa.
            </p>
          </div>
        </div>

        <div class="reason">
          <img src="../../assets/IMAGES/Wairau.png" alt="" />
          <div class="reason__text">
            <h5>learn from the best</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ad
              voluptatem officiis, minus debitis ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/abstract/" as a;
.accelerate {
  background: #000;
  color: #fff;
  z-index: 90;
  &__container {
    @include a.container(90%);
    padding: 30px 0px;
    h2 {
      font-size: 55px;
      margin: 20px 0px;
      @include a.breakpoint(small){
        font-size: 45px;
      }
      //styling the span in the h2
      span {
        color: rgb(47, 248, 6);
      }
    }
    p {
      margin: 20px 0px;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 400px);
    gap: 20px;

    @include a.breakpoint(small) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 500px);
    }
  }
}

.reason {
  //background: #fff;
  color: #f6eded;
  border: 2px solid #fff;
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    //background: rgb(47, 248, 6);
  }

  &__text {
    padding: 20px;
    width: 80%;
    @include a.breakpoint(small) {
      width: 100%;
    }
    h5 {
      font-size: 24px;
    }
  }
}
</style>
