<template>
    <h1>Engagement Party</h1>

    <section>
        <h2>Time</h2>
        <p>TBC</p>
    </section>

    <section>
        <h2>Location</h2>
        <div class="location-container">
            <div class="location-info">
                <p>Bangor Football Club</p>
                <address>Clandeboye Rd, BT20 3JT</address>
            </div>
            <div class="location-map">
                <iframe
                    width="600"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGc5wt4d1YUgRP_BxgmdyC9A&key=' + apiKey">
                </iframe>
            </div>
        </div>
    </section>

    <section>
        <h2>Q & A</h2>
        <p><i>Dress Code?</i></p>
        <p>Dress Code</p>
        <p><i>Will there be food?</i></p>
        <p>No</p>
    </section>

    <section>
        <h2>RSVP</h2>
        <p>Please RSVP via 07555555555</p>
    </section>

</template>

<script>
import apiKey from '../../../../../api-key.json';

export default {
    data() {
        return {
            apiKey: apiKey.key
        }
    }
}
</script>

<style>

section {
    width: 100%;
    border-bottom: 2px white solid;
    border-top: 2px white solid;
}

dl {
    font-size: 22px;

    dt {
        font-weight: 600;
    }

    dd {
        font-weight: 300;
    }
}

.location-container {
    display: flex;
    justify-content: space-around;
}

</style>