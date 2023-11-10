<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="nav__logo">
        <router-link style="color: rgb(47, 248, 6)" to="/"
          ><h1>LEARNSTACK</h1></router-link
        >
      </div>
      <!--nav list-->
      <!--menu button-->
      <div class="menu" @click="clicked">
        <div :class="isClicked ? 'change bar bar1' : 'bar bar1'"></div>
        <div :class="isClicked ? 'change bar bar2' : 'bar bar2'"></div>
      </div>
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">home</router-link>
        </li>
        <li class="nav__item" @click="showdropdown()">
          departments
          <div class="dropdown" v-if="isVisible">


                <router-link to="/department/sciences">science</router-link>
             <router-link to="/department/arts">arts</router-link>
                <router-link to="/department/commercials"
                  >commercials</router-link
                >
          </div>
        </li>
        <li class="nav__item"><router-link to="/">tuition</router-link></li>
        <li class="nav__item"><router-link to="/">why us</router-link></li>
        <li class="nav__item"><router-link to="/">career</router-link></li>
        <li class="nav__item"><router-link to="/">exams</router-link></li>
      </ul>

      <!-- login & signup buttons-->
      <div class="loginwrapper">
        <router-link to="/login"
          ><the-button style="background-color: rgb(47, 248, 6); color: #0a0a0a"
            >sign in</the-button
          ></router-link
        >
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@use "../SCSS/abstract/" as a;
.nav {
  z-index: 9999999999;
  position: fixed;
  width: 100%;
  background: #000;
  height: 85px;
  @include a.flex(space-between, center);
  &__container {
    @include a.flex(space-between, center);
    @include a.container(85%);
    height: 100%;
    padding: 30px 0px;
  }
  &__list {
    @include a.flex(space-evenly, center);
    list-style-type: none;
    gap: 50px;
    text-transform: capitalize;
    font-size: 17px;
    height: 100%;

    @include a.breakpoint(small) {
    display: none;
        }
    li {
      font-weight: 400;
      color: #fff;
      position: relative;
      height: 100%;
      cursor: pointer;
    }
  }
  a {
    color: #fff;
  }
}
.loginwrapper {
  @include a.breakpoint(small) {
    display: none;
  }
}
.dropdown {
  background: a.$darkGrey;
  position: absolute;
  //bottom: -2px;
  left: 0%;
  padding: 20px 0px;
  width: 300%;
  margin-top: 10px;
  height: auto;
  //font-size: 50px;
  display: block;
  border: 1px solid #fff;

a{
  display: block;
  padding: 20px 10px;
  margin: 2px 0px;
  &:hover{
    background: #474747;
  }
}
}

.menu {
  display: none;
  @include a.breakpoint(small) {
    display: block;
  }
  .bar {
    height: 2px;
    width: 40px;
    margin: 10px 0px;
    background: #fff;
    transition: transform, rotate 0.5s ease-in-out;
  }
  .change.bar1 {
    rotate: -45deg;
    transform: translateY(10px);
    
  }
  .change.bar2 {
    rotate: 45deg;
    transform: translateY(-10px);
  }
}
</style>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isClicked: false,
    };
  },
  methods: {
    showdropdown() {
      this.isVisible = !this.isVisible;
    },
    clicked() {
      this.isClicked = !this.isClicked;
      console.log(this.isClicked);
    },
  },
};
</script>
