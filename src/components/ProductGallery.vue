<template>
  <div>
    <div class="wrapper large">
      <h3>You may also like</h3>
      <div class="boxes flex">
        <div class="box" v-for="p in rngProducts(this.$store.state.products, product)" :key="p.slug">
          <picture class="box-img">
            <source media="(min-width: 1024px)" :srcset="require('../assets/shared/desktop/' + p.main.desktop)" />
            <source media="(min-width: 768px)" :srcset="require('../assets/shared/mobile/' + p.main.mobile)" />
            <img :src="require('../assets/shared/tablet/' + p.main.tablet)" />
          </picture>

          <div class="box-txt">
            <h4>{{ p.name }}</h4>
            {{ p.category }}
            <button class="btn-1" @click="toProduct(p.category)"><p class="btn-1-p">see product</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
  props: ['product'],
  methods: {
    rngProducts(array, excludeObject) {
      //Take 3 random products exept the current product page for no duplicates in the list to show in the "You may also like" gallery
      const n = 3;
      const productsSelected = [];
      const result = [];

      for (let i = 0; i < n; i++) {
        let randomIndex = null;
        do {
          randomIndex = Math.floor(Math.random() * array.length);
        } while (productsSelected.includes(randomIndex) || array[randomIndex] === excludeObject);

        productsSelected.push(randomIndex);
        result.push(array[randomIndex]);
      }

      return result;
    },
    toProduct(category) {
      this.$router.push('/' + category);
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.boxes {
  justify-content: space-between;
  margin: 4rem auto 7rem;
}
.box {
  width: 21.875rem;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
}
.box-img {
  display: block;
  width: inherit;
  height: 19.875rem;
  overflow: hidden;
  border-radius: 10px;
}
.box-img * {
  width: inherit;
  height: inherit;
}

.box-txt {
  text-align: center;
  margin: 1rem auto 0;
}

.box-txt button {
  margin: 1rem auto 0;
}

h4 {
  font-size: var(--h6-size);
}
</style>
