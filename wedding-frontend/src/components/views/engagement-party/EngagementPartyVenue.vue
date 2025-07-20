<template>
    <section>
        <h2>Location</h2>
        <div class="location-container">
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
        </div>
    </section>
</template>

<script>
import apiKey from '../../../../../../api-key.json';

export default {
    data() {
        return {
            apiKey: apiKey.key
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
    max-width: 650px;
    max-height: 450px;
    min-width: 450px;
    min-height: 250px;
}
</style>