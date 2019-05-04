import Vue from 'vue'
import Router from 'vue-router';

import LandingPage from './core/landing/LandingPage.vue';
import PricingPage from './core/pricing/PricingPage.vue';

Vue.use(Router);

const routes = [
    { path: "/", component: LandingPage },
    { path: "/home", component: LandingPage },
    { path: "/pricing", component: PricingPage }
];

export default new Router({ routes, mode: 'history' });