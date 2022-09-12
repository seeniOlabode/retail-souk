<template>
  <side-bar />
</template>

<script>
import SideBar from "./components/sidebar/SideBar.vue";
export default {
  name: "App",
  components: { SideBar },
  mounted() {
    this.$store.dispatch("signUp");
    setTimeout(() => {
      this.$store.dispatch("signIn");
    }, 500);
  },
};
</script>

<style>
#app {
  @apply w-screen h-screen overflow-scroll font-sans;
}
</style>
