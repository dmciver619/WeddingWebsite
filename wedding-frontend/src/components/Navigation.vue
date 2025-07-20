<template>
    <nav :class="menuExpanded ? 'top-nav expanded' : 'top-nav'">
        <button class="mobile-nav-toggle" v-on:click="toggleMobileNav">Menu</button>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/engagement-party">Engagement Party</RouterLink>
        <!-- <RouterLink to="/wedding">Wedding</RouterLink> -->
        <RouterLink to="/gifts">Gift Ideas</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
    </nav>

    <nav :class="menuExpanded ? 'left-nav expanded' : 'left-nav'">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/engagement-party">Engagement Party</RouterLink>
        <!-- <RouterLink to="/wedding">Wedding</RouterLink> -->
        <RouterLink to="/gifts">Gift Ideas</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            menuExpanded: false
        }
    },
    methods: {
        toggleMobileNav() {
            this.menuExpanded = !this.menuExpanded;
        }
    }
}

</script>

<style>

    nav {
        display: flex;
        
        a {
            border-radius: 15%;
            color: whitesmoke;
            padding: 10px 15px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .top-nav {
        background: rgba(0,0,0,0.5);
        gap: 10px;
        padding: 10px 20px;

    }

    .left-nav {
        background: rgba(0,0,0,0.5);
        flex-direction: column;
        height: calc(100vh - 62px);
        width: 0;
        overflow: hidden;
        position: absolute;
        transition: 0.25s width;
        white-space: pre;

        &.expanded {
            width: 50vw;
        }
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