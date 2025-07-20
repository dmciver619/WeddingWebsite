import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/views/home/Home.vue";
import GiftIdeas from './components/views/GiftIdeas.vue';
import OurStory from './components/views/OurStory.vue';
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
    {
        path: '/gifts',
        component: GiftIdeas
    },
    {
        path: '/our-story',
        component: OurStory
    },
    {
        path: '/engagement-party',
        component: EngagementParty
    }
];

export function setupRouter(app) {
    const router = createRouter({
        history: createWebHistory (),
        routes
    });
    app.use(router);
}