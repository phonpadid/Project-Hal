import {createWebHistory, createRouter} from "vue-router";
import * as vueRouter from 'vue-router';
import {createApp} from 'vue';

createApp(vueRouter);
const routes = [
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "Home" */'@/views/HomeView.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Home Index" */ '@/views/HomeView.vue'),
                path: '',
                name: 'home.index',
                meta: {
                    layout: "default",
                }
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;




