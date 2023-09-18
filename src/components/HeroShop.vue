<template>
  <div>
    <section class="hero-shop flex-align">
      <div class="shop flex" v-for="(shop, i) in shops" :key="i">
        <img :src="shop.i" :alt="shop.product + ' Category'" class="shop-img" />
        <div class="shop-txt flex-center">
          <h6>{{ shop.product }}</h6>
          <router-link :to="shop.router" class="flex-align"
            >shop <img src="../assets/shared/desktop/icon-arrow-right.svg" alt=""
          /></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroShop',
  data() {
    return {
      shops: [
        {
          product: 'headphones',
          i: require('../assets/shared/desktop/image-category-thumbnail-headphones.png'),
          router: '/headphones',
        },
        {
          product: 'speakers',
          i: require('../assets/shared/desktop/image-category-thumbnail-speakers.png'),
          router: '/speakers',
        },
        {
          product: 'earphones',
          i: require('../assets/shared/desktop/image-category-thumbnail-earphones.png'),
          router: '/earphones',
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-shop {
  max-width: var(--max-width);
  justify-content: center;
  gap: 3rem;
}
.shop {
  width: 21.875rem;
  height: 12.75rem;
  background-color: var(--clr-grey);
  border-radius: 10px;
  position: relative;
  justify-content: center;
}
.shop-img {
  position: absolute;
  top: -6.3rem;
  height: auto;
  width: 18rem;
}
.shop-txt {
  justify-content: center;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 1.3rem;
}
.shop-txt a {
  gap: 0.7rem;
  color: var(--clr-dark-grey);
  text-align: center;
  margin-top: 0.5rem;
  font-size: var(--sub-size);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 100%;
  justify-content: center;
}
.shop-txt a:hover {
  color: var(--clr-peach);
}
@media screen and (max-width: 1440px) {
  .hero-shop {
    padding: 0 var(--page-padding);
    gap: 1.5rem;
  }
}
@media screen and (max-width: 1225px) {
  .hero-shop {
    gap: 2rem;
  }
  .shop {
    width: 14rem;
    height: 13.5rem;
  }
  .shop-img {
    top: -4rem;
  }
}
@media screen and (max-width: 915px) {
  .hero-shop {
    flex-direction: column;
    gap: 8rem;
  }
  .shop {
    width: 100%;
  }
  .shop-img {
    top: -6.2rem;
  }
}
</style>
