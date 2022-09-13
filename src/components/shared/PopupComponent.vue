<template>
  <div class="relative">
    <button @click="toggleToolTip()">
      <img :src="imageSrc" alt="" />
    </button>
    <div class="absolute">
      <div
        class="tool-tip absolute -left-1/2"
        :style="tooltipStyle"
        v-show="tooltip"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {
    image: String,
  },
  data() {
    return {
      tooltip: false,
    };
  },
  methods: {
    toggleToolTip() {
      this.tooltip = this.tooltip ? false : true;
    },
  },
  computed: {
    imageSrc() {
      return require("@/assets/" + this.image + ".svg");
    },
    tooltipStyle() {
      if (this.tooltip) {
        return "height = auto";
      } else {
        return "height = 0";
      }
    },
  },
};
</script>

<style scoped>
.tool-tip {
  border-radius: 10px;
  border: solid 3px #f9f9f9;
  padding: 10px;
  transition: height 0.5s;
  background: #faf9fe;
}
</style>
