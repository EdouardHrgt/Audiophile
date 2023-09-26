import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: () => import('../views/HeadphonesView.vue'),
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('../views/SpeakersView.vue'),
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: () => import('../views/EarphonesView.vue'),
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
  },
  {
    path: '/product/:product/:name',
    name: 'ProductView',
    component: () => import('../views/ProductView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
