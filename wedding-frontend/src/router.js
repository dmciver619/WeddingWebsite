import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";
import Test from './components/Test.vue';


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/test',
        component: Test
    }
];

export function setupRouter(app) {
    const router = createRouter({
        history: createWebHistory (),
        routes
    });
    app.use(router);
}