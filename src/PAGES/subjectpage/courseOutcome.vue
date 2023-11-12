<template>
    <section class="outcome">
        <div class="outcome__container">
            <div class="outcome__text__wrapper">
                    <div class="outcome__text">
                        <h2>course outcome</h2>
                       <ul>
                        <li v-for="outcome in outcomeGoals" :key="outcome">{{outcome}}</li>
                       </ul>
                    </div>
            </div>
            <div class="outcome__image">
                <img :src=outcomeImage alt="">
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            outcomeImage:null,
            outcomeGoals:[],
        }
    },
    inject:["subjects","id"],
    methods:{
        loadCourseOutcome(id){
            const selectedSubject = this.subjects.find(subject => subject.subjectName === id);
            this.outcomeImage = selectedSubject.courseOutcomeImage;
            this.outcomeGoals=selectedSubject.courseOutcome;
        }
    },
    created(){
        this.loadCourseOutcome(this.id)
    },
    watch:{
        id(newRoute){
            this.loadCourseOutcome(newRoute)
        }
    }
    }
</script>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.outcome{
    height: 400px;
    @include a.breakpoint(small){
            height: auto;
        }
    &__container{
        display: flex;
        height: 100%;
        @include a.breakpoint(small){
            flex-direction: column;
        }
    }
    &__container >*{
        width: 50%;
        height: 100%;
        @include a.breakpoint(small){
            width: 100%;
        }
    }
    &__text__wrapper{
        display: flex;
        align-items: center;
        background: #000;
        @include a.breakpoint(small){
            padding: 20px;
        }
    }
    &__text{
        @include a.container(80%);
        color: #000;
        background: #ffb347;
        padding: 30px 40px;

        @include a.breakpoint(small){
            @include a.container(95%);
            padding-left: 30px ;
            padding-right: 0px;
        }

        h2{
            margin-bottom: 20px;
        }
        ul>li{
            margin-bottom: 20px;
            list-style-type: lower-roman;
        }
    }
    &__image{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>