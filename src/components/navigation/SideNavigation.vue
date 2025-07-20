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
    background: rgba(0, 0, 0, 0.95);
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

</style>