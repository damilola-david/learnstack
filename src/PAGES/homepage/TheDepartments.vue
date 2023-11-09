<template>
  <section class="departments">
    <h2 class="departments__heading">our departments</h2>
    <p class="departments__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias
      inventore harum non suscipit accusamus?
    </p>
    <!-- departments container div-->
    <div class="departments__container">
      <!--science department div-->
      <div class="department">
        <img src="../../../public/IMAGES/nine.jpg" alt="" />
        <div class="department__text">
          <h3>science class</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <router-link to="/department/sciences">view more<font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></router-link>
        </div>
      </div>

      <!--arts department div-->
      <div
        class="department"
        
      >
        <img src="../../../public/IMAGES/arts.jpg" alt="" />
        <div class="department__text">
          <h3>arts class</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <router-link to="/department/arts">view more<font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></router-link>
        </div>
      </div>

      <!--commercial department div-->
      <div
        class="department"
       
      >
        <img src="../../../public/IMAGES/ten.jpg" alt="" />
        <div class="department__text">
          <h3>commercial class</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <router-link to="/department/commercials">view more<font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use "../../SCSS/abstract/" as a;
.departments {
  padding: 60px 0px;
  .departments__heading {
    text-align: center;
    margin-bottom: 25px;
    font-weight: 900;
    font-size: 44px;
    @include a.breakpoint(small){
           font-size: 30px;
        }
  }
  .departments__text {
    text-align: center;
    margin-bottom: 25px;
  }
  &__container {
    @include a.container(90%);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 500px;
    gap: 30px;

    @include a.breakpoint(small){
      grid-template-columns: repeat(1,1fr);
      grid-auto-rows: minmax(300px,500px);
    }
  }

  .department {
    padding: 20px;
    border: 2px solid #000;
    img {
      width: 100%;
      height: 60%;
      object-fit: cover;
    }

    &__text {
      h3,
      p {
        margin: 20px 0px;
      }

      h3 {
        font-weight: 900;
      }
      p {
        font-weight: 100;
        color: #000000e1;
      }
    }
  }
}
</style>
