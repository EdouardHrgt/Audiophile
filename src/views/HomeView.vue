<template>
  <div>
    <section class="hero-sec">
      <div class="hero flex-align large">
        <div class="hero-txt">
          <p class="p-overline">{{ infos.intro }}</p>
          <h1>{{ infos.name }}</h1>
          <p class="infos-p">{{ infos.text }}</p>
          <button class="btn-1" @click="toProduct(infos.name, 'headphones')"><p class="btn-1-p">see product</p></button>
        </div>
      </div>
    </section>
    <HeroShop class="hero-shop" />
    <section class="main-prod-wrap">
      <div class="main-product large flex-align">
        <picture>
          <source media="(min-width: 1024px)" srcset="../assets/home/desktop/image-speaker-zx9.png" class="source-pc" />
          <source media="(min-width: 768px)" srcset="../assets/home/tablet/image-speaker-zx9.png" class="source-tablet" />
          <img src="../assets/home/mobile/image-speaker-zx9.png" alt="image of the speaker" class="source-mobile" />
        </picture>
        <div class="main-prod-txt">
          <h2 class="h2-big">zx9 speaker</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button class="btn-4" @click="toProduct('zx9 speaker', 'speakers')"><p class="btn-4-p">see product</p></button>
        </div>
      </div>
    </section>
    <section class="secondary-product-wrap">
      <div class="secondary-product large">
        <div class="secondary-product-txt">
          <h4>zx7 speaker</h4>
          <button class="btn-2" @click="toProduct('zx7 speaker', 'speakers')"><p class="btn-2-p">see product</p></button>
        </div>
      </div>
    </section>
    <section class="ternary-product-wrap flex-align large">
      <div class="ternary-product-1">
        <img src="../assets/home/desktop/image-earphones-yx1.jpg" alt="yx1-speaker" class="yx1" />
      </div>
      <div class="ternary-product-2">
        <div class="ternary-product-txt">
          <h4>yx1 earphones</h4>
          <button class="btn-2" @click="toProduct('yx1 earphones', 'earphones')"><p class="btn-2-p">see product</p></button>
        </div>
      </div>
    </section>
    <BestGear class="best-gear" />
    <FooterBar />
  </div>
</template>

<script>
import HeroShop from '@/components/HeroShop.vue';
import FooterBar from '@/components/FooterBar.vue';
import BestGear from '@/components/BestGear.vue';

export default {
  name: 'HomeView',
  components: {
    FooterBar,
    HeroShop,
    BestGear,
  },
  data() {
    return {
      infos: {
        intro: 'new product',
        name: 'xx99 mark II headphones',
        text: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
      },
    };
  },
  methods: {
    toProduct(str, category) {
      const arr = str.toLowerCase().split(' ');
      const join = arr.join('-');
      console.log(join);
      this.$router.push('/' + category);
    },
  },
};
</script>

<style scoped>
.hero-sec {
  background-color: var(--clr-black);
}
.hero {
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/home/desktop/image-hero-removebg.png);
  color: white;
  padding: 9rem 0;
}
.hero-txt {
  max-width: 25rem;
}
p {
  color: var(--clr-grey);
}
.infos-p {
  margin-bottom: 2.5rem;
}
h1 {
  color: var(--clr-white);
  margin: 1.5rem 0;
}
.hero-shop {
  margin: 12rem auto 9rem;
}
/* --- Main product  --- */
.main-product {
  background-color: var(--clr-peach);
  background-image: url('../assets/home/desktop/pattern-circles.svg');
  background-position-y: -2rem;
  background-position-x: -9rem;
  padding: 8rem 5rem 8rem 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 7rem;
  border-radius: 10px;
}
.main-product picture {
  position: absolute;
  width: 25.625rem;
  height: auto;
  bottom: -1rem;
  left: 7.8rem;
}
.h2-big {
  color: var(--clr-white);
  max-width: 16rem;
}
.main-prod-txt {
  margin-left: auto;
}
.main-prod-txt > p {
  max-width: 22rem;
  margin: 2rem 0;
}
/* --- Secondary product  --- */
.secondary-product {
  border-radius: 10px;
  background-image: url('../assets/home/desktop/image-speaker-zx7.jpg');
  background-size: cover;
  background-position: center;
  margin: 0 auto 7rem;
  padding: 6.1rem 0 6.1rem 5rem;
}
.btn-2-p {
  color: var(--clr-black);
}
h4 {
  margin: 0 0 2rem 0;
}

/* --- Ternary product  --- */
.ternary-product-wrap {
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 7rem;
}

.ternary-product-1,
.ternary-product-2 {
  border-radius: 10px;
  overflow: hidden;
}
.ternary-product-1 {
  width: 100%;
}
.ternary-product-1 img {
  object-fit: cover;
  width: inherit;
  height: 320px;
}
.ternary-product-2 {
  background-color: var(--clr-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  width: 100%;
}

/* --- RESPONSIVE --- */
@media screen and (max-width: 1440px) {
  .hero {
    padding: 7rem var(--page-padding);
  }
  .main-prod-wrap,
  .secondary-product-wrap,
  .ternary-product-wrap {
    padding: 0 var(--page-padding);
  }
}

@media screen and (max-width: 1150px) {
  .main-product {
    background-position-y: -8rem;
    background-position-x: center;
    background-size: contain;
    padding: 6rem 0 8rem;
    flex-direction: column;
  }
  .main-product picture {
    position: relative;
    left: 0rem;
    top: -2.7rem;
    width: 12.3rem;
    height: auto;
  }
  .main-prod-txt {
    margin-left: unset;
    text-align: center;
    margin: auto;
  }
  .main-prod-txt h2,
  .main-prod-txt .btn-4 {
    margin: auto;
  }
  .ternary-product-wrap {
    gap: 2rem;
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    background-image: url(../assets/home/tablet/image-header-removebg.png);
    justify-content: center;
    background-position: center;
  }
  .hero-txt {
    text-align: center;
  }
  .btn-1 {
    margin: auto;
  }
  .ternary-product-wrap {
    gap: 1rem;
  }
  .secondary-product {
    background-image: url('../assets/home/tablet/image-speaker-zx7.jpg');
  }
}
@media screen and (max-width: 768px) {
  .hero {
    background-image: url(../assets/home/mobile/image-header-removebg.png);
  }
  .hero-shop {
    margin: 8rem auto 3rem;
  }
  .main-product {
    background-position-y: -8rem;
    padding: 5rem 0 4rem;
  }
  .main-product,
  .secondary-product,
  .ternary-product-wrap {
    margin-bottom: 3rem;
  }
  .secondary-product {
    background-image: url('../assets/home/mobile/image-speaker-zx7.jpg');
  }
  .ternary-product-wrap {
    flex-direction: column;
    align-content: flex-start;
  }
  .ternary-product-1 img {
    height: 200px;
  }
}
</style>
