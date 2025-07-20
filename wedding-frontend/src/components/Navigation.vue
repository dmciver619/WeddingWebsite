<template>
    <nav class="top-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/engagement-party">Engagement Party</RouterLink>
        <!-- <RouterLink to="/wedding">Wedding</RouterLink> -->
        <RouterLink to="/gifts">Gift Ideas</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
    </nav>
</template>

<style>

    .top-nav {
        background: rgba(0,0,0,0.5);
        display: flex;
        gap: 10px;
        padding: 10px 20px;

        a {
            border-radius: 15%;
            color: whitesmoke;
            padding: 10px 15px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

</style>