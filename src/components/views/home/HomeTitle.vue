<template>
    <div class="home-title">
        <!-- <h1>We are getting married!</h1> -->
        <h2>2027</h2>
    </div>
</template>

<style>

.home-title {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    text-align: center;

    h1, h2 {
        margin: 0;
        color: var(--highlight-light);
    }

    h1 {
        font-weight: 500;

        @media screen and (max-width: 750px) {
            font-size: 40px;
        }
        
        @media screen and (max-width: 475px) {
            font-size: 25px;
        }
    }
}

</style>