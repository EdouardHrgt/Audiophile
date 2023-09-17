<template>
  <div>
    <header>
      <!-- @wheel.prevent @touchmove.prevent @scroll.prevent -->
      <img src="../assets/logo.png" alt="">
      <nav>
        <ul class="flex-center">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/headphones">Headphones</router-link></li>
          <li><router-link to="/speakers">Speakers</router-link></li>
          <li><router-link to="/earphones">Earphones</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
header {
  border: 3px solid red;
}

@media screen and (max-width: 1440px) {
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
</style>
