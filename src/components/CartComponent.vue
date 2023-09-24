<template>
  <div>
    <section class="container" v-if="cartStatus" @wheel.prevent @touchmove.prevent @scroll.prevent @click="ToggleCart()">
      <div class="cart-wrapper large">
        <div class="cart flex">
          <div class="cart-title flex">
            <h6>cart (0)</h6>
            <p class="remove">Remove all</p>
          </div>
          <ul v-if="items.length">
            <li class="flex-align">
              <div class="product-img"></div>
              <div class="product-infos">
                <p><strong>XX99 MK II</strong></p>
                <p class="price">$ 2,999</p>
              </div>
              <div class="quantity flex-center">
                <button class="quantity-setters" @click="removeItem()">-</button>
                <p id="qt">1</p>
                <button class="quantity-setters" @click="addItem()">+</button>
              </div>
            </li>
          </ul>
          <div>
            <div class="cart-total flex">
              <h6 class="total">total</h6>
              <p><strong>$ 0</strong></p>
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
  data() {
    return {
      items: [],
    };
  },
  computed: {
    cartStatus() {
      return this.$store.state.cart.isOpen;
    },
  },
  methods: {
    ToggleCart() {
      this.cart = !this.cart;
      this.$store.commit('ChangeCartStatus', this.cart);
    },
    checkOut() {
      alert('command checked...');
    },
    addItem(item) {
      console.log(item);
    },
    removeItem(item) {
      console.log(item);
    },
  },
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
  width: 23.563rem;
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
}

li {
  gap: 1rem;
  margin: 0.7rem auto;
}
.product-img {
  width: 4rem;
  height: 4rem;
  background-color: lightsalmon;
  border-radius: 10px;
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
</style>
