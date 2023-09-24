<template>
  <div>
    <section>
      <div class="prod large flex-align" v-for="p in productList" :key="p.id">
        <div class="prod-img">
          <picture>
            <source media="(min-width: 1024px)" :srcset="require('../assets/shared/desktop/' + p.main.desktop)" />
            <source media="(min-width: 768px)" :srcset="require('../assets/shared/mobile/' + p.main.mobile)" />
            <img :src="require('../assets/shared/tablet/' + p.main.tablet)" />
          </picture>
        </div>
        <div class="prod-txt">
          <p class="p-overline"><strong>new product</strong></p>
          <h2 class="prod-name">{{ p.name }}</h2>
          <p class="prod-desc">
            {{ p.description }}
          </p>
          <button class="btn-1"><router-link class="product-link" :to="`/product/${p.category}/${p.slug}`">see product</router-link></button>
        </div>
      </div>
    </section>
    <BestGear class="best-gear" />
    <FooterBar />
  </div>
</template>

<script>
import BestGear from '@/components/BestGear.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'ProductBox',
  props: ['productList'],
  components: {
    BestGear,
    FooterBar,
  },
};
</script>

<style scoped>
.prod:nth-child(even) {
  flex-direction: row-reverse;
}
.prod {
  gap: 7rem;
  margin: 6rem auto;
}
.product-link {
  color: var(--clr-white);
  font-size: var(--body-size);
}
.p-overline {
  color: var(--clr-peach);
}
.prod-img,
.prod-txt {
  width: 100%;
}
.prod-img img {
  max-height: 35rem;
  width: inherit;
  object-fit: cover;
  border-radius: 10px;
}
.prod-txt * {
  max-width: 27.813rem;
}
.prod-name {
  text-transform: uppercase;
  margin: 1.5rem 0;
}
.prod-desc {
  margin-bottom: 2rem;
}
@media screen and (max-width: 1440px) {
  .prod {
    gap: 5rem;
    padding: 0 var(--page-padding);
  }
}
@media screen and (max-width: 1024px) {
  .prod {
    flex-direction: column;
    gap: 2rem;
  }
  .prod:nth-child(even) {
    flex-direction: column;
  }
  .prod-img img {
    max-height: 22rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .prod-txt {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .prod-txt * {
    max-width: 35.75rem;
  }
}
@media screen and (max-width: 768px) {
  .prod {
    gap: 1.25rem;
    margin: 4rem auto;
  }
  .prod-name {
    font-size: var(--h4-size);
    line-height: 1.75rem;
    margin: 1rem 0;
  }
  .prod-desc {
    margin-bottom: 1.25rem;
  }
}
</style>
