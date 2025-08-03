<script setup>

import Rsvp from './Rsvp.vue';
import EngagementPartyQuestions from './EngagementPartyQuestions.vue';
import EngagementPartyVenue from './EngagementPartyVenue.vue';

</script>

<template>
    <div class="engagement-party-container">
        <h1>Engagement Party</h1>
        <div class="engagement-party-content">
            <img id="engagementPartyPhoto" src="/src/assets/engagement-party/ff7543b0-e953-40e5-9377-a4b7c2ba8296.jpg" />

            <div class="engagement-party-details-container">
                <h2>When</h2>
                <div class="engagement-party-details-entry">
                    <p>Saturday 15th October 2025</p>
                    <p>7:30pm until late</p>
                </div>
                
                <EngagementPartyVenue />

                <EngagementPartyQuestions />

                <Rsvp />
            </div>
        </div>
    </div>
</template>

<style>

h1 {
    @media screen and (max-width: 400px) {
        font-size: 30px;
    }
}

h1, h2 {
    margin: 0 0 10px 0;
}

@media screen and (max-width: 1000px) {
    .engagement-party-container h1 {
        text-align: center;
    }

    #engagementPartyPhoto {
        display: none;
    }
}

#engagementPartyPhoto {
    max-width: 600px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
}

.engagement-party-content {
    display: flex;
    gap: 20px;
}

.engagement-party-details-entry {
    margin-left: 20px;
}

.engagement-party-container {
    align-items: center;
    padding: 15px;
    place-self: center;
}


</style>