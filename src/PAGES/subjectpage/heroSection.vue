<template>
  <section class="subject__hero" :style="{'background-image': 'url('+ subjectImage +')'}">
    <div class="subject__hero__container">
      <div class="subject__hero__text">
        <h1>{{ subjectName }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae
          dignissimos laudantium, sed quaerat accusantium!
        </p>
        <button @click="showProp()"></button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:["id"],
  inject: ["subjects"],
  data() {
    return {
      subjectName: "",
      subjectImage: "",
    };
  },
  methods: {
    loadSubject(subName) {
      const found = this.subjects.find((element) => element.subjectName === subName);
      console.log(found)
      this.subjectImage = found.subjectImage;
      this.subjectName = found.subjectName;
    },
    
  },
  created() {
    this.loadSubject(this.$route.params.id);
    console.log(this.id)
  },
  watch: {
    $route(newRoute) {
      this.loadSubject(newRoute);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.subject__hero {
  //background-image: url("../../../public/IMAGES/sixteen.jpg");
  background-position: top;
  background-size: cover;
  height: 90vh;
  &__container {
    @include a.container(85%);
    position: relative;
    z-index: 9999;
    height: 100%;
    //background-color: darkmagenta;
  }
  &__text {
    @include a.flex(center,flex-start);
    flex-direction: column;
    background: #fff;
    position: absolute;
    bottom: 5px;
    left: 0px;
    width: 40%;
    padding: 20px;
    height: 40%;
    border: 2px solid #000;
    color: #000;
    
    //styling the text container at phone size to increase the width
    @include a.breakpoint(small){
      width: 100%;
    }
    //styling the h1 tag in the hero-text
    h1 {
      font-size: 70px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #000;

      @include a.breakpoint(small){
      font-size: 60px;
    }

    //styling the p tag in the hero text div
    
    }
  }
}
p{
      color: a.$lightDark;
    }
</style>
