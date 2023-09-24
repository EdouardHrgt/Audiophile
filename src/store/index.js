import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: { isOpen: false, items: [] }, // chaque items = {id, slug, price, picture thumbnail}
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
  },
  mutations: {
    importList(state, list) {
      state.products = list;
    },
    ChangeCartStatus(state, bool) {
      state.cart.isOpen = bool;
    },
    addToCart(state, item) {
      state.cart.items.push(item);
    },
  },
  actions: {},
  modules: {},
});
