<template>
  <div class="px-14 py-16 w-full h-screen overflow-scroll">
    <main-header class="" />
    <main>
      <discover-component />
      <div>
        <h2 class="font-extrabold mt-16 text-3xl">New Arrivals</h2>
        <products-view />
      </div>
    </main>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import ProductsView from "./ProductsView.vue";
import DiscoverComponent from "./DiscoverComponent.vue";

export default {
  name: "ExplorePage",
  components: { MainHeader, ProductsView, DiscoverComponent },
};
</script>

<style></style>
