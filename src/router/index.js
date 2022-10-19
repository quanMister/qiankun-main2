import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";

Vue.use(VueRouter);

const routes = [
    {
        name: 'root',
        path: '/',
        redirect: '/home',
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/about/index.vue"),
    },
    {
        path: "/app1",
        name: "app1",
        component: () => import("../views/app1/index.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
