<script setup>

import Background from './Background.vue';
import HomeTitle from './HomeTitle.vue';
import WeddingCountdown from './WeddingCountdown.vue';

</script>

<template>
    <Background />
    <div class="home-container">
        <HomeTitle />
        <WeddingCountdown />
    </div>
</template>

<style>
    .home-container {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow: hidden;
    }
</style>