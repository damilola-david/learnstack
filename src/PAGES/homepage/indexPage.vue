<template>
    <heroSection></heroSection>
    <the-departments></the-departments>
    <ourVision></ourVision>
    <AccelerateSection></AccelerateSection>
</template>
<script>
import AccelerateSection from './accelerateSection.vue';
import heroSection from './heroSection.vue';
import TheDepartments from './TheDepartments.vue';
import ourVision from './ourVision.vue';
export default{
    components:{
    heroSection,
    TheDepartments,
    AccelerateSection,
    ourVision
}
}
</script>