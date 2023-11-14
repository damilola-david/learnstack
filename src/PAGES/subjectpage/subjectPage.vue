<template>
  <heroSection></heroSection>
  <courseOutline></courseOutline>
  <theExams></theExams>
  <courseOutcomeVue></courseOutcomeVue>
</template>
<script>
import heroSection from "./heroSection.vue";
import courseOutline from "./courseOutline.vue";
import theExams from "./theExams.vue";
import courseOutcomeVue from "./courseOutcome.vue";
export default {
  props: ["id"],
  data() {
    return {
      //subjects data for subject page
      //this data would be passed to the chilldrencomponent via provide and inject.
      subjects: [
        //biology data
        {
          subjectName: "biology",
          subjectDescription: "some random text",
          subjectGoals: ["four", "five", "six"],
          subjectImage: "../../../IMAGES/sixteen.jpg",
          activeExams: ["jamb", "waec", "cambridge", "sat"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-cottonbro-studio-8879117.jpg",
        },
        //physics data
        {
          subjectName: "physics",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/ferris.webp",
          activeExams: ["jamb", "waec", "cambridge", "sat","gmat"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-thisisengineering-3862635.jpg",
        },
        //chemistry data~~~
        {
          subjectName: "chemistry",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/atoms.jpeg",
          activeExams: ["jamb", "waec", "neco", "cambridge"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-kindel-media-8325957.jpg",
        },
        //mathematics data
        {
          subjectName: "mathematics",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/math.jpg",
          activeExams: ["neco", "waec", "cambridge", "jamb", "sat","gmat"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-world-sikh-organization-of-canada-18870190.jpg",
        },
        //government data
        {
          subjectName: "government",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/commons.webp",
          activeExams: ["jamb", "neco", "waec", "cambridge"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/lawmaker.webp",
        },

        //history data
        {
          subjectName: "history",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/Rome_GettyImages-841851056.webp",
          activeExams: ["neco", "waec", "jamb"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-иван-медведев-9430739.jpg",
        },
        //crk data
        {
          subjectName: "crk",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/crk.webp",
          activeExams: ["jamb"],
          courseOutcome: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem",
          ],
          courseOutcomeImage:"../../../IMAGES/pexels-thisisengineering-3862635.jpg",
        },
      ],
      exams: [
        {
          name: "neco",
          isLive: true,
          image: "../../../IMAGES/neco.jpg",
        },
        {
          name: "waec",
          isLive: false,
          image: "../../../IMAGES/waec.png",
        },
        {
          name: "jamb",
          isLive: true,
          image: "../../../IMAGES/jamb.jpg",
        },
        {
          name: "sat",
          isLive: true,
          image: "../../../IMAGES/sat.png",
        },
        {
          name: "cambridge",
          isLive: false,
          image: "../../../IMAGES/camb.png",
        },
        {
          name: "gmat",
          isLive: true,
          image: "../../../IMAGES/gmat.png",
        },
      ],
    };
  },
  components: {
    heroSection,
    courseOutline,
    theExams,
    courseOutcomeVue,
  },
  provide() {
    return {
      subjects: this.subjects,
      id: this.id,
      exams: this.exams,
    };
  },
};
</script>
