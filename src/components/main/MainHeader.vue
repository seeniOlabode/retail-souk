<template>
  <header class="w-full flex items-center">
    <search-input />
    <div class="ml-auto gap-10 flex items-center">
      <wishlist />
      <img src="@/assets/shopping-bag.svg" alt="" />
      <img src="@/assets/Avatar.svg" alt="" />
    </div>
  </header>
</template>

<script>
import SearchInput from "../shared/SearchInput.vue";
import Wishlist from "../shared/WishlistComponent.vue";

export default {
  name: "MainHeader",
  components: { SearchInput, Wishlist },
};
</script>

<style></style>
