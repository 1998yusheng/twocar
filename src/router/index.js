import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Me from "../views/Me.vue";
import Car from "../views/Car.vue";
import Money from "../views/Money.vue";
import ShopCart from "../views/ShopCart.vue";
import More from "../views/More.vue";
import Price from "../views/Price.vue";
import My from "../views/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/my",
    component: My,
  },
  {
    path: "/price",
    component: Price,
  },
  {
    path: "/more",
    component: More,
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/car",
    component: Car,
  },
  {
    path: "/me",
    component: Me,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
