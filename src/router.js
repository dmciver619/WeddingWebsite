import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/views/home/Home.vue";
import OurStory from './components/views/our-story/OurStory.vue';
import EngagementParty from './components/views/engagement-party/EngagementParty.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/engagement-party',
        component: EngagementParty
    },
    // {
    //     path: '/wedding',
    //     component: Wedding
    // },
    // {
    //     path: '/gifts',
    //     component: GiftIdeas
    // },
    {
        path: '/our-story',
        component: OurStory
    }
];

export function setupRouter(app) {
    const router = createRouter({
        history: createWebHistory('/WeddingWebsite/'),
        routes
    });
    app.use(router);
}