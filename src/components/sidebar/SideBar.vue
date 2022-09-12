<template>
  <div class="w-80 bg-red-50 h-screen side-bar">
    <div>
      <img class="" width="241" src="@/assets/retail-souk-logo.svg" alt="" />
    </div>
    <nav class="ml-8">
      <ul>
        <li
          v-for="link in links"
          :key="link.name"
          :class="['mb-3', 'p-4', 'w-52', 'nav-link', { active: link.active }]"
        >
          <span class="mr-4">{{ link.emoji }}</span
          ><span class="font-extrabold">{{ link.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      links: [
        { name: "Explore", to: "/", emoji: "🏠", active: true },
        { name: "Retail Stores", to: "/", emoji: "🛍" },
        { name: "Support", to: "/", emoji: "🎧" },
        { name: "Souk Coins", to: "/", emoji: "💰" },
      ],
    };
  },
};
</script>

<style scoped>
li.active {
  @apply bg-souk-deep-purple p-4 rounded-2xl text-white;
}

.nav-link {
  @apply cursor-pointer;
}

.nav-link:not(.active) {
  @apply hover:rounded-2xl;
}

.nav-link:not(.active):hover {
  background: rgba(56, 0, 60, 0.1);
}

.side-bar {
  background: #faf9fe;
  border-right: 3px #f9f9f9 solid;
}
</style>
