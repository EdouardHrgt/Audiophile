<template>
  <div>
    <section>
      <div class="prod large flex-align">
        <div class="prod-img">
          <picture>
            <source media="(min-width: 1024px)" srcset="../assets/shared/desktop/image-xx99-mark-two-headphones.jpg" />
            <source media="(min-width: 768px)" srcset="../assets/shared/mobile/image-xx99-mark-two-headphones.jpg" />
            <img src="../assets/shared/tablet/image-xx99-mark-two-headphones.jpg" />
          </picture>
        </div>
        <div class="prod-txt">
          <p class="p-overline"><strong>new product</strong></p>
          <h2 class="prod-name">xx99 mark ii headphones</h2>
          <p class="prod-desc">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by
            reproducing the balanced depth and precision of studio-quality sound.
          </p>
          <button class="btn-1"><p class="btn-1-p">see product</p></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import datas from '/data.json';
export default {
  name: 'ProductBox',
  data() {
    return {
      datas: datas, // Need to import json here or app crash even if not needed...
      products: [],
    };
  },
  methods: {
    filter(arr) {
      console.log(arr.filter((n) => n.category === 'headphones'));
    },
  },
  mounted() {
    this.products = this.datas.filter((n) => n.category === 'headphones');
  },
};
</script>

<style scoped>
.prod {
  gap: 7rem;
  margin: 6rem auto;
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
