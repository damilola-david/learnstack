<template>
  <section class="outline">
    <div class="outline__container">
      <h2>learning outline</h2>
      <p>what you would learn at the end of the course
      </p>
      <div class="outline__grid">
        <div
          class="outline__grid__item"
          v-for="goals in courseOutline"
          :key="goals"
        >
        <div style="display: flex; align-items: center;">
            <img src="../../../public/IMAGES/layers.png" style="width: 30px; height: 30px;" alt="">
        </div>
          <div>
            {{ goals }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  inject: ["subjects",'id'],
  data() {
    return {
      courseOutline: null,
    };
  },
  methods:{
    loadSubject(subName) {
      const pickedSubject = this.subjects.find( (subject) => subject.subjectName === subName);
      this.courseOutline = pickedSubject.subjectGoals;
    },
  },
  created() {
    this.loadSubject(this.id);
  },
  watch: {
    id(newRoute) {
      this.loadSubject(newRoute);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.outline {
  &__container {
    @include a.container(85%);
    padding: 40px 0px;
    h2{
        margin-bottom: 10px;
        font-size: 40px;
    }
    p{
        margin-bottom: 20px;
        line-height:100%;
        color: a.$lightDark;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    column-gap: 40px;
    row-gap: 40px;
    //reducing the columns to 1 column on small screen size
    @include a.breakpoint(small){
      grid-template-columns:repeat(1,1fr);
    }
    &__item {
      display: flex;
      align-items: center;
      column-gap: 30px;
      color: a.$lightDark;
    }
  }
}
</style>
