import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: { isOpen: false, isActive: false, items: [] },
  },
  getters: {
    getHeadphones(state) {
      return state.products.filter((n) => n.category === 'headphones');
    },
    getEarphones(state) {
      return state.products.filter((n) => n.category === 'earphones');
    },
    getSpeakers(state) {
      return state.products.filter((n) => n.category === 'speakers');
    },
    getProduct: (state) => (prod) => {
      return state.products.filter((n) => n.slug == prod);
    },
    getTotalPrice(state) {
      return state.cart.items.reduce((total, item) => total + item.totalPrice, 0);
    },
  },
  mutations: {
    importList(state, list) {
      state.products = list;
    },
    ChangeCartStatus(state, bool) {
      state.cart.isOpen = bool;
    },
    resetCart(state) {
      state.cart.items = [];
    },
    addToCart(state, obj) {
      const product = state.cart.items.find((product) => product.name === obj.name);
      if (!product) {
        state.cart.items.push(obj);
      }
    },
    deleteItem(state, name) {
      const product = state.cart.items.find((product) => product.name === name);
      const productToDelete = state.cart.items.indexOf(product);
      if (productToDelete !== -1) {
        state.cart.items.splice(productToDelete, 1);
      }
    },
    addQuantity(state, name) {
      const product = state.cart.items.find((product) => product.name === name);
      product.quantity++;
      product.totalPrice = product.quantity * product.price;
    },
    removeQuantity(state, name) {
      const product = state.cart.items.find((product) => product.name === name);
      if (product.quantity > 0) {
        product.quantity--;
        product.totalPrice = product.quantity * product.price;
      }
    },
  },
  actions: {},
  modules: {},
});
