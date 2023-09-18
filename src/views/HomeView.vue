<template>
  <div>
    <NavBar />
    <section>
      <div class="hero flex-align">
        <div class="hero-txt">
          <p class="p-overline">{{ infos.intro }}</p>
          <h1>{{ infos.name }}</h1>
          <p class="infos-p">{{ infos.text }}</p>
          <button class="btn-1"><p class="btn-1-p">see product</p></button>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterBar,
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
};
</script>

<style scoped>
section {
  background-color: var(--clr-black);
}
.hero {
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/home/desktop/image-hero.jpg);
  color: white;
  padding: 9rem 0;
  max-width: var(--max-width);
  margin: auto;
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
/* --- RESPONSIVE --- */
@media screen and (max-width: 1440px) {
  .hero {
    padding: 7rem var(--page-padding);
  }
}
@media screen and (max-width: 1024px) {
  .hero {
    background-image: url(../assets/home/tablet/image-header.jpg);
    justify-content: center;
    background-position: center;
  }
  .hero-txt {
    text-align: center;
  }
  .btn-1 {
    margin: auto;
  }
}
@media screen and (max-width: 768px) {
  .hero {
    background-image: url(../assets/home/mobile/image-header.jpg);
  }
}
</style>
