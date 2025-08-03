<script setup>

import HomeTitle from './HomeTitle.vue';
import WeddingCountdown from './WeddingCountdown.vue';

</script>

<template>
    <div class="home-container">
        <div class="home-image">
        </div>
        <HomeTitle />
        <WeddingCountdown />
    </div>
</template>

<style>
    .home-container {
        background-color: var(--main);
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow: hidden;

        .home-image {
            background-image: url(/src/assets/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100%;
        }
    }
</style>