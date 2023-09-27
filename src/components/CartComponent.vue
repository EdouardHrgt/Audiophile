<template>
  <div>
    <section class="container" v-show="cartStatus" @wheel.prevent @touchmove.prevent @scroll.prevent>
      <div class="cart-wrapper large">
        <div class="cart flex" ref="cart">
          <div class="cart-title flex">
            <h6>cart ({{ CartSize }})</h6>
            <p class="remove" @click="removeAll()">Remove all</p>
          </div>
          <ul>
            <li class="flex-align" v-for="it in cartItems" :key="it.name">
              <div class="product-img">
                <img :src="require('../assets/' + it.thumbnail)" :alt="'Picture of the ' + it.name" />
              </div>
              <div class="product-infos">
                <p>
                  <strong>{{ it.name }}</strong>
                </p>
                <p class="price">$ {{ it.totalPrice }}</p>
              </div>
              <div class="quantity flex-center">
                <button class="quantity-setters" @click="removeItem(it)">-</button>
                <p id="qt">{{ it.quantity }}</p>
                <button class="quantity-setters" @click="addItem(it)">+</button>
              </div>
            </li>
          </ul>
          <div>
            <div class="cart-total flex">
              <h6 class="total">total</h6>
              <p>
                <strong>$ {{ CalcTotal }}</strong>
              </p>
            </div>
            <button class="btn-1 checkout" @click="checkOut()"><p class="btn-1-p">checkout</p></button>
          </div>
        </div>
      </div>
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
    cartItems() {
      return this.$store.state.cart.items;
    },
    CalcTotal() {
      return this.$store.getters.getTotalPrice;
    },
    CartSize() {
      return this.$store.state.cart.items.length;
    },
  },
  methods: {
    ToggleCart() {
      this.cart = !this.cart;
      this.$store.commit('ChangeCartStatus', this.cart);
    },
    checkOut() {
      if (this.CartSize) {
        const id = Math.floor(Math.random() * 1000);
        this.$store.commit('ChangeCartStatus', false);
        this.$router.push(`/checkout/${id}`);
      }
    },
    addItem(item) {
      this.$store.commit('addQuantity', item.name);
    },
    removeItem(item) {
      if (item.quantity <= 1) {
        this.$store.commit('deleteItem', item.name);
      }
      this.$store.commit('removeQuantity', item.name);
    },
    removeAll() {
      this.$store.commit('resetCart');
      this.$store.state.cart.isActive = false;
    },
    // handleGlobalClick(event) {
    //   const cart = this.$refs.cart;
    //   if (cart && !cart.contains(event.target)) {
    //     this.ToggleCart();
    //   }
    // },
  },
  // mounted() {
  //   document.addEventListener('click', this.handleGlobalClick);
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.handleGlobalClick);
  // },
};
</script>

<style scoped>
.container {
  background-color: rgba(00, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  inset: 3.5rem 0 0 0;
}
.cart {
  width: auto;
  max-width: 32rem;
  min-height: 30rem;
  border-radius: 10px;
  background-color: var(--clr-white);
  padding: 2rem;
  position: relative;
  top: 3rem;
  margin-left: auto;
  transform: translateY(-200rem);
  animation: slideIn 0.4s forwards;
  flex-direction: column;
  justify-content: space-between;
}
@keyframes slideIn {
  from {
    transform: translateY(-200rem);
  }
  to {
    transform: translateY(0);
  }
}
h6 {
  font-weight: bolder;
}
strong {
  font-weight: 800;
  text-transform: uppercase;
}
.price {
  font-size: var(--overline-size);
  color: var(--clr-border);
}
.remove {
  color: var(--clr-border);
  cursor: pointer;
  transition: 0.4s;
  align-items: flex-end;
  text-decoration: underline;
}
.remove:hover {
  color: var(--clr-black);
}
.cart-title,
.cart-total {
  justify-content: space-between;
}
ul {
  margin: 2rem auto;
  width: 100%;
}

li {
  gap: 1rem;
  margin: 0.7rem auto;
  width: inherit;
}
.product-img {
  width: 4rem;
  height: 4rem;
  overflow: hidden;
}
.product-img img {
  border-radius: 10px;
  width: inherit;
  height: inherit;
  object-fit: cover;
}
.quantity {
  margin-left: auto;
}
.total {
  color: var(--clr-border);
}
.checkout {
  width: 100%;
  margin: 1rem auto 0;
}
@media screen and (max-width: 1440px) {
  .cart {
    margin-right: var(--page-padding);
  }
}

@media screen and (max-width: 768px) {
  .cart {
    max-width: unset;
    width: calc(100% - 3rem);
    margin-left: unset;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
  }
}
</style>
