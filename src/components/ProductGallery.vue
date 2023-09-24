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

          <div class="box-txt flex">
            <h4>{{ p.name }}</h4>
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
  margin: 4rem auto 7rem;
  justify-content: center;
  gap: 4%;
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
  object-fit: cover;
}

.box-txt {
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  margin: 0.2rem auto 0;
  min-height: 7.2rem;
}

.box-txt button {
  margin: 1rem auto 0;
}

h4 {
  font-size: var(--h6-size);
  line-height: 1.2rem;
}

@media screen and (max-width: 1270px) {
  .box {
    width: 18rem;
  }
  .boxes {
    gap: 1rem;
  }
  h4 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .box {
    width: auto;
    max-width: 15rem;
  }
}
@media screen and (max-width: 768px) {
  .boxes {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    margin: 2rem auto 7rem;
  }
  .box {
    width: 100%;
    max-width: unset;
    display: block;
  }
  .box-txt {
    min-height: unset;
    margin: 1.3rem auto 0.5rem;
  }
}
</style>
