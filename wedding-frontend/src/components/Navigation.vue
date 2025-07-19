<template>
    <nav class="top-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/engagement-party">Engagement Party</RouterLink>
        <!-- <RouterLink to="/wedding">Wedding</RouterLink> -->
        <RouterLink to="/gifts">Gift Ideas</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
        <RouterLink to="/questions">Q&A</RouterLink>
    </nav>
</template>

<style>

    .top-nav {
        margin: 0 20px;
        display: flex;
        gap: 10px;

        a {
            background: rgba(0,0,0,0.75);
            border-radius: 15%;
            color: whitesmoke;
            padding: 10px 15px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

</style>