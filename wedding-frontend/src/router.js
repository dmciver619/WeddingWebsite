import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/views/home/Home.vue";
import EngagementParty from './components/views/EngagementParty.vue';
import GiftIdeas from './components/views/GiftIdeas.vue';
import OurStory from './components/views/OurStory.vue';
import Questions from './components/views/Questions.vue';


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
    },
    {
        path: '/questions',
        component: Questions
    },
];

export function setupRouter(app) {
    const router = createRouter({
        history: createWebHistory (),
        routes
    });
    app.use(router);
}