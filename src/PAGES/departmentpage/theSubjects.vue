<template>
  <section class="subjects">
    <div class="subjects__container">
      <h2>courses we offer in these department</h2>
      <div class="subjects__grid">
        <div
          class="subject"
          v-for="subject in classsubject"
          :key="subject"
          :style="{ backgroundImage: 'url(' + subject.image + ')' }"
        >
          <RouterLink :to="'/subject/' +subject.name">
            <the-button @click="coool()">{{ subject.name }} </the-button></RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../SCSS/abstract/" as a;
.subjects {
  &__container {
    @include a.container(90%);
    padding: 50px 0px;

    h2 {
      margin-bottom: 20px;
    }
  }
  &__grid {
    @include a.flex(space-between, center);
    @include a.breakpoint(small){
      flex-direction: column;
    }
    gap: 20px;
  }
  .subject {
    background-size: cover;
    //background: red;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 2px solid #000;
  }
  a {
    margin-bottom: 40px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      classsubject:[],
    };
  },
  inject: ["department","subjects"],
  created() {
    this.loadDepartment(this.$route.params.clasName);
  },
  methods: {
    loadDepartment(route) {
      const departmentSubjects = [];
      for (const subject of this.subjects){

      
        if(subject.class === route){
          departmentSubjects.push(subject)
        }
        }
      this.classsubject = departmentSubjects;
    },
    coool(){
      console.log('/subject/' +this.classsubject.name)
    }
  },
  watch: {
    $route(newRoute) {
      this.loadDepartment(newRoute);
    },
  },
};
</script>
