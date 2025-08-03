<script setup>

import NavigationList from './NavigationList.vue';

</script>

<template>
    <nav :class="isExpanded ? 'left-nav expanded' : 'left-nav'">
        <NavigationList />
    </nav>
</template>

<script>
export default {
    props: {
        isExpanded: Boolean
    }
}
</script>

<style>

.left-nav {
    background: var(--main);
    flex-direction: column;
    height: 100%;
    width: 0;
    overflow: hidden;
    position: absolute;
    transition: 0.25s width;
    white-space: pre;
    z-index: 1;

    &.expanded {
        width: 50%;
    }
}

</style>