<template>
  <div>
    <NavBar />
    <ProductDetail  :product-infos="product"/>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'ProductView',
  components: {
    NavBar,
    FooterBar,
    ProductDetail,
  },
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.product = this.$store.getters.getProduct(this.$route.params.name);
  },
};
</script>

<style scoped></style>
