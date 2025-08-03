<template>
    <section aria-label="Venue">
        <h2>Where</h2>
        <a href="https://maps.app.goo.gl/K1nAK1FV2t6VJcSUA" class="venue" target="_blank" rel="noopener noreferrer">
            <img class="venue-icon" src="/src/assets/engagement-party/9055521_bxs_map_icon.png" />
            <span>Bangor CD Club</span>
        </a>

        <div class="location-map-container">
            <iframe
                class="location-map"
                style="border:0"
                loading="lazy"
                allowfullscreen
                :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVevuNheeYUgRL5nilhcPuAY&key=' + apiKey">
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

.venue {
    background-color: green;
    border-radius: 5px;
    padding: 5px;
    margin: 15px;

    .venue-icon {
        width: 20px;
        position: relative;
        top: 3px;
    }
}

.location-map-container {
    max-width: 500px;
    margin: 15px 0 0 15px;
}

.location-map {
    width: 90%;
    aspect-ratio: 2 / 1;
}
</style>