<template>
    <section>
        <h2>Location</h2>
        <div class="location-info">
            <p>Bangor Football Club</p>
            <address>Clandeboye Rd, BT20 3JT</address>
        </div>
        <div class="location-map-container">
            <iframe
                class="location-map"
                style="border:0"
                loading="lazy"
                allowfullscreen
                :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGc5wt4d1YUgRP_BxgmdyC9A&key=' + apiKey">
            </iframe>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            apiKey: 'AIzaSyD0Z3fdx4QwKhSHy2V4-LdIxSwwZBiELQs'
        }
    }
}

</script>

<style>

.location-container {
    display: flex;
    gap: 20px;
    justify-content: space-around;
}

.location-map {
    width: 90%;
    aspect-ratio: 1;
}
</style>