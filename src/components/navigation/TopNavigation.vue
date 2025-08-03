<script setup>

import NavigationList from './NavigationList.vue';

</script>

<template>
    <nav class="top-nav">
        <h1>Dylan & Nicole</h1>
        <button class="mobile-nav-toggle" v-on:click="toggleMobileNav">Menu</button>
        <div>
            <NavigationList />
        </div>
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
    background: var(--main);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    height: 150px;
    box-sizing: border-box;
    align-items: center;
    color: var(--highlight);

    h1, a {
        font-weight: 400;
    }

    h1 {
        font-family: 'SelfDeceptionRegular';
        margin: 10px;
        white-space: pre;

        @media screen and (max-width: 430px) {
            font-size: 12vw;
        }
    }

    a {
        color: var(--highlight-light);
    }
}

.mobile-nav-toggle {
    color: var(--highlight);
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