<template>
  <div>
    <NavBar />
    <ProductPage class="prod-page" :product-name="title" />
    <ProductBox class="prod-box" :product-list="productList" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProductPage from '@/components/ProductPage.vue';
import ProductBox from '@/components/ProductBox.vue';
export default {
  name: 'HeadphonesView',
  components: {
    ProductBox,
    ProductPage,
    NavBar,
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
    this.productList = this.$store.getters.getHeadphones;
  },
};
</script>

<style scoped></style>
