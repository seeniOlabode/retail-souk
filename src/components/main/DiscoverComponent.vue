<template>
  <div id="discover" class="discover mt-16 w-full">
    <div
      id="skincare"
      class="discover-item flex items-center rounded-3xl relative"
    >
      <div class="ml-7">
        <h3 class="text-3xl font-extrabold">GET UP TO 50%</h3>
        <p>on all skincare products</p>
      </div>
      <img
        class="absolute bottom-0 right-7"
        src="@/assets/skincare.png"
        alt=""
      />
    </div>
    <div
      id="tshirt"
      class="discover-item flex items-center justify-center rounded-3xl relative"
    >
      <div class="text-center">
        <h3 class="text-2xl font-extrabold text-center w-64">
          GET UP TO 50% ON ALL T-SHIRTS.
        </h3>
      </div>
      <img
        class="absolute left-7 -bottom-0"
        src="@/assets/thunder-left.svg"
        alt=""
      />
      <img
        class="absolute right-0 -top-6"
        src="@/assets/thunder-right.svg"
        alt=""
      />
    </div>
    <div
      id="asos"
      class="discover-item flex justify-center rounded-3xl relative"
    >
      <div class="text-center">
        <h3 class="text-2xl font-extrabold text-center w-64 mt-11">
          Shop ASOS Retailers.
        </h3>

        <img
          class="absolute bottom-0 ml-4"
          src="@/assets/asos-discover.png"
          alt=""
        />
      </div>
    </div>
    <div
      id="thrift"
      class="discover-item flex justify-center rounded-3xl relative"
    >
      <div class="text-center">
        <h3 class="text-2xl font-extrabold text-center w-64 mt-11">
          Shop Thrift Retailers
        </h3>

        <img
          class="absolute bottom-0 ml-4"
          src="@/assets/thrift-discover.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverComponent",
};
</script>

<style scoped>
#discover {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 30px;
}

#skincare {
  background: #eceadb;
  grid-column: span 2;
}

#tshirt {
  background: #bce7f0;
  grid-column: span 2;
  grid-row: 2;
}

#asos {
  grid-column: 3;
  grid-row: span 2;
  background: #faf9fe;
}

#thrift {
  background: #f0dbf1;
  grid-row: span 2;
  grid-column: 4;
}
</style>
