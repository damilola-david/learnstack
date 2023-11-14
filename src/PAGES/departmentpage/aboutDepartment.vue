<template>
  <section class="about">
    <div class="about__container">
      <div class="">
        <video :src="departmentVideo" class="about-video" controls :poster=poster ></video>
      </div>
      <div class="about__text__wrapper">
        <div class="about__text">
          <h2>department of {{ departmentName }}</h2>
          <p>
            {{ aboutDepartment }}
          </p>

          <div class="about__head">
          <img :src=headDepartmentImage alt="" class="head__image">
          <div class="head__name">
            <h4>{{headDepartmentName}}</h4>
            <p>head of department</p>
          </div>
        </div>
        </div>
        
      </div>

    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/abstract/" as a;
.about {
  padding: 60px 0px;
  @include a.breakpoint(small) {
    padding: 10px 0px;
  }
  &__container {
    @include a.container(90%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(300px, auto);
    gap: 50px;
    background: #071b11;
    padding: 90px;
    color: #fff;
    border-radius: 10px;
    @include a.breakpoint(medium) {
      grid-template-columns: repeat(1, 1fr);
      padding: 90px 30px;
    }
  }

  .about-video {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    //border: 5px solid #000;
    padding: 0px;
  }
  &__text__wrapper {
    @include a.flex(flex-start, center);
  }
  &__text {
    h2 {
      font-size: 35px;
      margin-bottom: 10px;
    }
    p {
      line-height: 40px;
    }
  }
  &__head{
    display: flex;
    gap: 20px;
    //background: red;
    margin: 20px 0px;
    img{
      width: 10%;
      height: 60px;
      border-radius: 50px;
      object-fit: cover;
      @include a.breakpoint(medium) {
      width: 15%;
    }
    }
  }
}
</style>
<script>
export default {
  inject: ["department",'id'],
  created() {
    this.loadDepartment(this.id);
  },
  data() {
    return {
      departmentName: "",
      aboutDepartment: "",
      departmentVideo: null,
      headDepartmentName:"",
      headDepartmentImage:null,
      poster:"",
    };
  },
  methods: {
    loadDepartment(route) {
      const selectedDepartment = this.department.find(
        (department) => department.name === route
      );
      this.departmentName = selectedDepartment.name;
      this.departmentVideo = selectedDepartment.video;
      this.aboutDepartment = selectedDepartment.aboutDepartment;
      this.headDepartmentName = selectedDepartment.headName;
      this.headDepartmentImage = selectedDepartment.headImage;
      this.poster = selectedDepartment.poster;
    },
  },
  watch: {
    id(newRoute) {
      this.loadDepartment(newRoute);
    },
  },
};
</script>
