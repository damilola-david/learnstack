<template>
  <theNavigation v-if="!$route.meta.hideComponents"></theNavigation>
  <theAnnouncement v-if="!$route.meta.hideComponents"></theAnnouncement>
  <router-view></router-view>
  <the-cta v-if="!$route.meta.hideComponents"></the-cta>
  <theFooter v-if="!$route.meta.hideComponents"></theFooter>
</template>

<script>
import theNavigation from './components/theNavigation.vue';
import theCta from './components/theCta.vue';
import theFooter from './components/theFooter.vue';
import theAnnouncement from './components/theAnnouncement.vue';

export default {
  components: {
    theNavigation,
    theCta,
    theFooter,
    theAnnouncement
  }
}
</script>
<style lang="scss" scoped>
@import url("./SCSS/resets/resets.scss");
</style>

