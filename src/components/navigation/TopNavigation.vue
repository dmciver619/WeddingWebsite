<script setup>

import NavigationList from './NavigationList.vue';

</script>

<template>
    <nav class="top-nav">
        <button class="mobile-nav-toggle" v-on:click="toggleMobileNav">Menu</button>
        <NavigationList />
    </nav>
</template>

<script>
export default {
    methods: {
        toggleMobileNav() {
            this.$emit('togglemobilenav');
        }
    }
}
</script>

<style>

.top-nav {
    background: rgba(0,0,0,0.5);
    gap: 10px;
    padding: 10px 20px;
}

.mobile-nav-toggle {
    display: none;
}

@media screen and (max-width:520px) {
    .top-nav a {
        display: none;
    }

    .mobile-nav-toggle {
        background: none;
        display: block;
    }
}

</style>