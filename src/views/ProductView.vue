<template>
  <div>
    <NavBar />
    <ProductDetail :product-infos="product" />
    <HeroShop class="hero-shop" />
    <BestGear class="best-gear" />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import HeroShop from '@/components/HeroShop.vue';
import FooterBar from '@/components/FooterBar.vue';
import BestGear from '@/components/BestGear.vue';
export default {
  name: 'ProductView',
  components: {
    NavBar,
    FooterBar,
    ProductDetail,
    BestGear,
    HeroShop,
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

<style scoped>
.hero-shop {
  margin: 2rem auto 10rem;
}
@media screen and (max-width: 768px) {
  .hero-shop {
    margin: 2rem auto 3rem;
  }
}
</style>
