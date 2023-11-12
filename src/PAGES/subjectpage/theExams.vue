<template>
  <section class="class">
    <div class="class__container">
      <h2>classes we offer for this course</h2>
      <div class="class__grid">
        <div class="class__grid__item" v-for="exam in classes" :key="exam">
          <div class="class__grid__item__image">
            <img :src="exam.image" alt="" :class="{isLive:gray}" />
          </div>
          <div class="class__grid__item__text">
            <div class="item__name">
              <h2>{{ exam.name }}</h2>
            </div>
            <div class="live">
              <span v-if="exam.isLive" class="classactive livenow">live</span>
              <span v-else class="classactive ended"> ended</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  inject: ["exams", "subjects", "id"],
  data() {
    return {
      classes: [],
    };
  },
  methods: {
    filterExams(id) {
        const selectedSubject = this.subjects.find( subject => subject.subjectName === id)
        const activeExams = selectedSubject.activeExams;
        const subjectExams=[];
        for(const activeExam of activeExams){
            const selected = this.exams.find(exam => exam.name === activeExam)
            subjectExams.push(selected)
      }
      this.classes = subjectExams
    },
  },
  created() {
    this.filterExams(this.id);
  },
  watch:{
    id(newroute){
        this.filterExams(newroute)
    }
  }
};
</script>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.class {
  &__container {
    @include a.container(90%);
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 50px;
    padding: 40px 0;

    @include a.breakpoint(small){
            grid-template-columns: repeat(1,1fr);
        }

    //styling the grid item
    &__item {
      border: 1.8px solid #000;
      position: relative;
      //styling the grid item text container
      &__text {
        display: flex;
        justify-content: space-between;
        //background: red;
        position: absolute;
        bottom: 10px;
        width: 100%;
        padding: 10px 20px;
        border: 2px dotted #000;
        border-left: 0px;
        border-right: 0px;
      }

      //styling the grid item image
      &__image {
        //background: pink;
        height: 70%;
        @include a.flex(center, center);
        
        img {
          width: 40%;
          height: 60%;
          object-fit: cover;
        }
      }
    }
  }
  .item-name {
    h2 {
      font-weight: 900;
    }
  }
  .live {
    display: flex;
    align-items: center;
  }
  .live > .classactive::before {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: "";
    margin-right: 10px;
  }
  .livenow::before {
    background: a.$green;
  }
  .ended::before {
    background: red;
  }
}
</style>
