<template>
  <div class="flex">
    <side-bar />
    <main-page />
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar.vue";
import MainPage from "./components/main/MainPage.vue";

export default {
  name: "App",
  components: { SideBar, MainPage },
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
