<template>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/engagement-party">Engagement Party</RouterLink>
    <!-- <RouterLink to="/wedding">Wedding</RouterLink> -->
    <!-- <RouterLink to="/gifts">Gift Ideas</RouterLink> -->
    <RouterLink to="/our-story">Our Story</RouterLink>
</template>


<style scoped>
    a {
        border-radius: 15%;
        color: var(--highlight);
        padding: 10px 15px;

        &:hover {
            text-decoration: underline;
        }
    }
</style>