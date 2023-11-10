<script>
export default {
  inject: ["department",'id'],
  created() {
    this.loadDepartment(this.id);
  },
  methods: {
    loadDepartment(clasName) {
      const selectedDepartment = this.department.find(
        (department) => department.name === clasName);
      this.departmentName = selectedDepartment.name;
      this.departmentImage = selectedDepartment.images;
    },
  },
  watch: {
    id(newRoute) {
      this.loadDepartment(newRoute);
    },
  },
  data() {
    return {
      departmentName: "",
      departmentImage: null,
    };
  },
};
</script>

<template>
  <section class="banner">
    <div class="img__banner">
      <img
        v-for="image in departmentImage"
        :key="image"
        v-bind:src="image"
        alt=""
      />
    </div>
    <div class="banner__container">
      <div class="banner__text">
        <h1>welcome to the department of {{ departmentName }}</h1>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.banner {
  &::before {
    content: "";
    display: block;
    height: 100px;
  }
  position: relative;
  //background-repeat: repeat-x repeat;
}
.img__banner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80vh;
  gap: 0px;
  @include a.breakpoint(small) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 300px);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    display: block;
  }
}
.banner__text {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-40%);
  width: 40%;
  @include a.breakpoint(small) {
    top: 40%;
    width: 100%;
  }
  h1 {
    font-size: 65px;
    text-align: center;
    color: #fff;
    font-weight: 900;
    text-shadow: 5px 5px 0 #000;
    @include a.breakpoint(small) {
      font-size: 50px;
      text-align: center;
    }
    //background: blue;
  }
}
</style>
