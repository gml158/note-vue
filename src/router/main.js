import VueRouter from 'vue-router';
import Vue from 'vue';
import Main from '../views/main';

Vue.use(VueRouter);
export const router = new VueRouter({
    routes: [
        {
            path:'/canvas',
            component:Main
        },
        {
            path:'/cropper',
            component: () => import('../views/cropper')
        },
        {
            path:'/image',
            component: () => import('../views/image/main')
        },
        {
            path:'/svg',
            component: () => import('../views/svg/main')
        }
    ]
});