<template>
  <div class="mt-8">
    <ul class="flex flex-wrap gap-6">
      <li v-for="product in productsArray" :key="product.id" class="w-1/5 grow">
        <div>
          <img class="rounded-3xl" :src="product.image" alt="" />
        </div>

        <div class="mt-3">
          <h4 class="text-sm opacity-80">{{ product.productName }}</h4>
          <p class="mt-3 font-bold text-lg">{{ product.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  computed: {
    productsArray() {
      let formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "NGN",
      });
      let products = [];
      for (let i = 0; i < 100; i++) {
        let product = {
          id: i,
          productName: "River Island regular fit shirt in black",
          image: require("@/assets/202030975-1-black.webp"),
          price: formatter.format(20000),
        };
        products.push(product);
      }
      return products;
    },
  },
};
</script>
