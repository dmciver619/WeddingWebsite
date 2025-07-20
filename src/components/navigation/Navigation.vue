<script setup>

import SideNavigation from './SideNavigation.vue';
import TopNavigation from './TopNavigation.vue';

</script>

<template>
    <TopNavigation @togglemobilenav="toggleMobileNav" />
    <SideNavigation :is-expanded="menuExpanded"/>
</template>

<script>

export default {
    data() {
        return {
            menuExpanded: false
        }
    },
    mounted() {
        // Gross, but works
        window.addEventListener('click', () => {
            if (!event.target.classList.contains('mobile-nav-toggle')) {
                this.closeMobileNav();
            }
        });
    },
    methods: {
        toggleMobileNav() {
            this.menuExpanded = !this.menuExpanded;
        },
        closeMobileNav() {
            this.menuExpanded = false;
        }
    }
}

</script>

<style>

    nav {
        display: flex;
    }

</style>