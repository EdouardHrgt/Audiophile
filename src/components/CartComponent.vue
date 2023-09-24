<template>
  <div>
    <section class="cart flex-center" v-if="cartStatus" @wheel.prevent @touchmove.prevent @scroll.prevent>
      <h1>Cart</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  computed: {
    cartStatus() {
      return this.$store.state.cart.isOpen;
    },
  },
};
</script>

<style scoped>
.cart {
  background-color: rgb(0, 61, 123);
  position: fixed;
  z-index: 100;
  inset: 3.6rem 5% 0 5%;
}
</style>
