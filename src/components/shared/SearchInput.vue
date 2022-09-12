<template>
  <div class="bg-souk-light-purple flex p-5 items-center rounded-xl">
    <img src="@/assets/search.svg" alt="" />
    <input
      class="ml-4 font-normal"
      id="input-search"
      type="search"
      placeholder="Search market"
    />
    <button class="ml-8"><img src="@/assets/filter.svg" alt="" /></button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};

console.log("Bode");
</script>

<style>
#input-search {
  background: none;
}

#input-search:focus {
  outline: none;
}
</style>
