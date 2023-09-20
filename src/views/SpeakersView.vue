<template>
  <div>
    <NavBar />
    <ProductPage class="prod-page" :product-name="title" />
    <ProductBox class="prod-box" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProductPage from '@/components/ProductPage.vue';
import ProductBox from '@/components/ProductBox.vue';
export default {
  name: 'SpeakersView',
  components: {
    ProductPage,
    ProductBox,
    NavBar,
  },
  data() {
    return {
      title: '',
    };
  },
  created() {
    this.title = this.$route.name;
  },
};
</script>

<style scoped></style>
