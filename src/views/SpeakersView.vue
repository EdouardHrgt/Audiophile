<template>
  <div>
    <ProductPage class="prod-page" :product-name="title" />
    <ProductBox class="prod-box" :product-list="productList" />
  </div>
</template>

<script>
import ProductPage from '@/components/ProductPage.vue';
import ProductBox from '@/components/ProductBox.vue';
export default {
  name: 'SpeakersView',
  components: {
    ProductBox,
    ProductPage,
  },
  data() {
    return {
      title: '',
      productList: [],
    };
  },
  created() {
    this.title = this.$route.name;
  },
  mounted() {
    this.productList = this.$store.getters.getSpeakers;
  },
};
</script>

<style scoped></style>
