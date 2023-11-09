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
      subjects: [
      {
          subjectName: "biology",
          subjectDescription: "some random text",
          subjectGoals: ["four", "five", "six"],
          subjectImage: "../../../IMAGES/sixteen.jpg",
        },
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
          subjectImage: "../../../IMAGES/pexels-jan-van-der-wolf-7130692.jpg",
        },
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
          subjectImage: "../../../IMAGES/pexels-rfstudio-3825573.jpg",
        },
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
