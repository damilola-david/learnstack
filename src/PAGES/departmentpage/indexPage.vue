<template>
  <theHero></theHero>
  <aboutDepartment></aboutDepartment>
  <theSubjectsVue></theSubjectsVue>
</template>
<script>
import theHero from "./theHero.vue";
import aboutDepartment from "./aboutDepartment.vue";
import theSubjectsVue from "./theSubjects.vue";
export default {
  data() {
    return {
      department: [
        {
          key: "1",
          name: "sciences",
          aboutDepartment:
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odioeligendi, deserunt, inventore voluptatem rerum, voluptatum nihillibero alias expedita possimus doloribus maxime exercitationemarchitecto officiis aliquid aut? Harum adipisci commodi culpalaborum itaque deleniti quia libero? Similique molestias, enim odiodistinctio maiores reprehenderit! Iste, inventore ipsam eius omnisfugit nostrum earum aliquid tempora atque asperiores repellendusquis. Obcaecati, eligendi.",
          images: [
            "../../../IMAGES/pexels-pixabay-39698.jpg",
            "../../../IMAGES/pexels-engin-akyurt-2672630.jpg",
            "../../../IMAGES/pexels-rfstudio-3825443.jpg",
          ],
          video: "../../../VIDEOS/VIDEO1.mp4",
          poster:"../../../IMAGES/pexels-shvets-production-7516387.jpg",
          headName:"motunde johnson",
          headImage:"../../../IMAGES/headsciences.jpg",
        },
        {
          key: "2",
          name: "arts",
          aboutDepartment: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odioeligendi, deserunt, inventore voluptatem rerum, voluptatum nihillibero alias expedita possimus doloribus maxime exercitationemarchitecto officiis aliquid aut? Harum adipisci commodi culpalaborum itaque deleniti quia libero? Similique molestias, enim odiodistinctio maiores reprehenderit! Iste, inventore ipsam eius",
          images: [
            "../../../IMAGES/eleven.jpg",
            "../../../IMAGES/chamber.webp",
            "../../../IMAGES/twelve.jpg",
          ],
          video: "../../../VIDEOS/VIDEO2.mp4",
          poster:"../../../IMAGES/posterarts.jpg",
          headName:"rebecca janet",
          headImage:"../../../IMAGES/vini.jpg",
        },
        {
          key: "3",
          name: "commercials",
          aboutDepartment: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odioeligendi, deserunt, inventore voluptatem rerum, voluptatum nihillibero alias expedita possimus doloribus maxime exercitationemarchitecto officiis aliquid aut? Harum adipisci commodi culpalaborum itaque deleniti quia l",
          images: [
            "../../../IMAGES/naira.jpg",
            "../../../IMAGES/stock.jpg",
            "../../../IMAGES/thirteen.jpg",
          ],
          video: "../../../VIDEOs/VIDEO3.mp4",
          poster:"../../../IMAGES/postercommercial.jpg",
          headName:"thomas ikechukwu",
          headImage:"../../../IMAGES/headcommercial.jpg",
        },
      ],
      subjects:[
        {     class:"sciences",
              name: "physics",
              image: "../../../IMAGES/fourteen.jpg",
            },
            {
              class:"sciences",
              name: "chemistry",
              image: "../../../IMAGES/nine.jpg",
            },
            {
              class:"sciences",
              name: "biology",
              image: "../../../IMAGES/fifteen.jpg",
            },
            {
              class:"sciences",
              name: "mathematics",
              image: "../../../IMAGES/seventeen.jpg",
            },
            {
              class:"arts",
              name: "government",
              image: "../../../IMAGES/senate.png",
            },
            {
              class:"arts",
              name: "history",
              image: "../../../IMAGES/twenty.jpg",
            },
            {
              class:"arts",
              name: "crk",
              image: "../../../IMAGES/crs.jpg",
            },
            {
              class:"arts",
              name: "literature",
              image: "../../../IMAGES/nineteen.jpg",
            },
             {
              class:"commercials",
              name: "accounting",
              image: "../../../IMAGES/twentytwo.jpg",
            },
            {
              class:"commercials",
              name: "bookkeeping",
              image: "../../../IMAGES/twentyone.jpg",
            },
            {
              class:"commercials",
              name: "economics",
              image: "../../../IMAGES/exchange.jpg",
            },
      ]
    };
  },
  provide() {
    return {
      department: this.department,
      subjects:this.subjects,
    };
  },
  components: {
    theHero,
    aboutDepartment,
    theSubjectsVue,
  },
  mounted() {
  },
};
</script>
