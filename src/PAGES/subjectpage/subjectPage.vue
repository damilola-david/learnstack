<template>
  <heroSection></heroSection>
  <courseOutline></courseOutline>
</template>
<script>
import heroSection from "./heroSection.vue";
import courseOutline from "./courseOutline.vue";
export default {
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
        },
        //physics data
        {
          subjectName:"physics",
          subjectDescription: "some random text",
          subjectGoals: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis mollitia repudiandae reiciendis quaerat, hic maiores atque accusamus laudantium tempore.",
          ],
          subjectImage: "../../../IMAGES/ferris.webp",
        },
        //chemistry data
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
        },
      ],
    };
  },
  components: {
    heroSection,
    courseOutline,
  },
  provide() {
    return {
      subjects: this.subjects,
    };
  },
};
</script>
