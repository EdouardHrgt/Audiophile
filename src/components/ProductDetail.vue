<template>
  <div>
    <section class="large">
      <router-link to="/" class="back-link">Go Back</router-link>
      <div class="product flex-align">
        <picture>
          <source media="(min-width: 768px)" :srcset="require('../assets/' + productInfos[0].image.desktop)" class="image" />
          <source media="(min-width: 1024px)" :srcset="require('../assets/' + productInfos[0].image.tablet)" class="image" />
          <img
            class="image"
            :src="require('../assets/' + productInfos[0].image.mobile)"
            :alt="'Picture of the ' + productInfos[0].name"
          />
        </picture>

        <div class="prod-txt">
          <p class="p-overline"><strong>new product</strong></p>
          <h2 class="prod-name">{{ productInfos[0].name }}</h2>
          <p class="prod-desc">{{ productInfos[0].description }}</p>
          <p class="price">
            <strong>$ {{ productInfos[0].price }}</strong>
          </p>
          <div class="cart flex-align">
            <div class="quantity flex-center">
              <button class="quantity-setters" v-on:click="decrement()">-</button>
              <p id="qt">{{ quantity }}</p>
              <button class="quantity-setters" v-on:click="increment()">+</button>
            </div>
            <button class="btn-1" v-on:click="addToCart()"><p class="btn-1-p">add to cart</p></button>
            <p class="error" v-show="errMsg">{{ errMsg }}</p>
          </div>
        </div>
      </div>
      <div class="description large flex">
        <div class="features">
          <h3>features</h3>
          <p>{{ productInfos[0].features }}</p>
        </div>
        <div class="in-the-box">
          <h3>in the box</h3>
          <ul>
            <li v-for="f in productInfos[0].includes" :key="f.item" class="flex-align">
              <p>
                <span>{{ f.quantity }}x</span>
              </p>
              <p>{{ f.item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery flex">
        <div class="gallery-left flex">
          <div class="gallery-small-img gallery-img-1">
            <picture>
              <source
                media="(min-width: 768px)"
                :srcset="require('../assets/' + productInfos[0].gallery.first.desktop)"
                class="image-preview"
              />
              <source
                media="(min-width: 1024px)"
                :srcset="require('../assets/' + productInfos[0].gallery.first.tablet)"
                class="image-preview"
              />
              <img
                class="image-preview"
                :src="require('../assets/' + productInfos[0].gallery.first.mobile)"
                alt="Illustration of use cases of the product"
              />
            </picture>
          </div>
          <div class="gallery-small-img gallery-img-2">
            <picture>
              <source
                media="(min-width: 768px)"
                :srcset="require('../assets/' + productInfos[0].gallery.second.desktop)"
                class="image-preview"
              />
              <source
                media="(min-width: 1024px)"
                :srcset="require('../assets/' + productInfos[0].gallery.second.tablet)"
                class="image-preview"
              />
              <img
                class="image-preview"
                :src="require('../assets/' + productInfos[0].gallery.second.mobile)"
                alt="Illustration of use cases of the product"
              />
            </picture>
          </div>
        </div>
        <div class="gallery-large-img gallery-img-3">
          <picture>
            <source
              media="(min-width: 768px)"
              :srcset="require('../assets/' + productInfos[0].gallery.third.desktop)"
              class="image-preview"
            />
            <source
              media="(min-width: 1024px)"
              :srcset="require('../assets/' + productInfos[0].gallery.third.tablet)"
              class="image-preview"
            />
            <img
              class="image-preview"
              :src="require('../assets/' + productInfos[0].gallery.third.mobile)"
              alt="Illustration of use cases of the product"
            />
          </picture>
        </div>
      </div>
      <ProductGallery :product="productInfos[0]" />
    </section>
  </div>
</template>

<script>
import ProductGallery from '@/components/ProductGallery.vue';
export default {
  name: 'ProductDetail',
  components: {
    ProductGallery,
  },
  props: ['productInfos'],
  data() {
    return {
      quantity: 1,
      cartProduct: { name: null, price: null, totalPrice: null, thumbnail: null, quantity: null },
      cartStatus: false,
      errMsg: '',
    };
  },
  methods: {
    addToCart() {
      this.cartProduct.name = this.productInfos[0].slug;
      this.cartProduct.price = this.productInfos[0].price;
      this.cartProduct.totalPrice = this.productInfos[0].price * this.quantity;
      this.cartProduct.thumbnail = this.productInfos[0].image.mobile;
      this.cartProduct.quantity = this.quantity;
      this.checkDuplicate(this.cartProduct);
    },
    increment() {
      if (this.quantity >= 10) {
        return;
      } else {
        this.quantity++;
      }
    },
    checkDuplicate(obj) {
      const duplicate = this.$store.state.cart.items.find((product) => product.name === obj.name);
      if (duplicate) {
        this.errMsg = 'This product is already in your cart...';
      } else {
        this.errMsg = '';
        this.$store.commit('addToCart', obj);
        this.ToggleCart();
      }
    },
    decrement() {
      if (this.quantity <= 1) {
        return;
      } else {
        this.quantity--;
      }
    },
    ToggleCart() {
      this.cartStatus = !this.cartStatus;
      this.$store.commit('ChangeCartStatus', this.cartStatus);
    },
  },
};
</script>
<style scoped>
section {
  padding: 3rem 0;
}
.back-link {
  color: var(--clr-border);
  font-size: var(--body-size);
  margin-bottom: 3rem;
  display: block;
  font-weight: 600;
  transition: color 0.4s;
}
.back-link:hover {
  color: var(--clr-black);
}
.product {
  gap: 6rem;
}
.p-overline {
  color: var(--clr-peach);
}
picture,
.prod-txt {
  width: 100%;
}
picture {
  height: 35rem;
}
.image {
  border-radius: 10px;
  object-fit: cover;
  width: inherit;
  height: inherit;
}
.prod-txt * {
  max-width: 27.813rem;
}
.price {
  margin-bottom: 1rem;
}
.price strong {
  font-size: var(--h6-size);
  letter-spacing: 1.3px;
  font-weight: 900;
}
.prod-name {
  text-transform: uppercase;
  margin: 1.5rem 0;
}
.prod-desc {
  margin-bottom: 1rem;
}
.cart {
  gap: 1rem;
  position: relative;
}
.error {
  color: var(--clr-red);
  position: absolute;
  bottom: -2rem;
  font-weight: bold;
}

/* FEATURES & IN THE BOX Sections */
.description {
  gap: 6rem;
  margin: 9rem 0;
}
.in-the-box,
.features {
  width: 100%;
}
.features p {
  max-width: 39.688rem;
  color: var(--clr-border);
}
.description h3 {
  margin-bottom: 2rem;
}
.in-the-box span {
  color: var(--clr-peach);
  font-weight: 900;
}
.in-the-box li {
  gap: 1rem;
  margin: 0.7rem 0;
}

/* GALLERY */
.gallery {
  min-height: 10dvh;
  gap: 3rem;
  justify-content: center;
  margin-bottom: 10rem;
}
.gallery-left {
  flex-direction: column;
  justify-content: space-between;
}
.gallery-small-img {
  width: 27.813rem;
  height: 17.5rem;
}
.gallery-large-img {
  width: 39.688rem;
  height: 37rem;
}

.image-preview {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1440px) {
  section {
    padding: 4rem var(--page-padding);
  }
}
@media screen and (max-width: 1290px) {
  .gallery {
    gap: 2%;
  }
}
@media screen and (max-width: 1024px) {
  .product {
    gap: 2rem;
  }
  h2 {
    font-size: var(--h4-size);
  }
  picture {
    height: 20.5rem;
  }
  .prod-txt * {
    max-width: auto;
  }
  .description {
    flex-direction: column;
    gap: 3rem;
    margin: 4rem 0;
  }
  .gallery-small-img {
    width: 17.313rem;
    height: 10.875rem;
  }
  .gallery-large-img {
    width: 24.688rem;
    height: 23rem;
  }
}
@media screen and (max-width: 768px) {
  section {
    padding: 2.5rem var(--page-padding) 4rem;
  }
  .back-link {
    margin-bottom: 2.5rem;
  }
  .product {
    flex-direction: column;
    gap: 1rem;
  }
  .prod-name {
    margin: 0.5rem 0;
  }
  .gallery {
    flex-direction: column;
    gap: 2rem;
  }
  .gallery-left {
    align-items: center;
    gap: 2rem;
  }
  .gallery-small-img,
  .gallery-large-img {
    width: 100%;
  }
  .gallery-small-img {
    height: 10.875rem;
  }
}
</style>
