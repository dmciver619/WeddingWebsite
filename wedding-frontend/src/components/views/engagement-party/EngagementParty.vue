<script setup>
import Rsvp from '../Rsvp.vue';
import EngagementPartyQuestions from './EngagementPartyQuestions.vue';
import EngagementPartyTime from './EngagementPartyTime.vue';
import EngagementPartyVenue from './EngagementPartyVenue.vue';
</script>

<template>
    <div class="engagement-party-container">
        <h1>Engagement Party</h1>

        <EngagementPartyTime />

        <EngagementPartyVenue />

        <EngagementPartyQuestions />

        <Rsvp />
    </div>
</template>

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

.engagement-party-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    place-self: center;
}


</style>