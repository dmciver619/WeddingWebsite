<script setup lang="ts">
import StoryItem from './StoryItem.vue';
</script>

<template>
    <h1>Our Story</h1>

    <div class="story-timeline-vertical">
        <StoryItem description="Nicole sent Dylan the first message on Facebook" side="left" title="First Message" date="May 2015">
            <img src="/src/assets/our-story/FirstMessage.jpg" />
        </StoryItem>
        <StoryItem description="Between Skipperstone Beach and Pickie Play Park overlooking the pier, Dylan asked Nicole to be his girlfriend" side="right" title="Boyfriend/Girlfriend" date="July 2015">
            <img src="/src/assets/our-story/BoyfriendGirlfriend.jpg" />
        </StoryItem>
        <StoryItem side="left" title="First Kiss" date="July 2015">
            <img src="/src/assets/our-story/FirstKissButNotReally.png" />
        </StoryItem>
        <StoryItem description="First romantic holiday to Fuerteventura" side="right" title="First Holiday Alone" date="January 2019">
            <img src="/src/assets/our-story/Fuerteventura.png" />
        </StoryItem>
        <StoryItem description="Dylan got down on one knee on the Rainforest Trail in Singapore Botanic Gardens and asked Nicole to marry him" side="left" title="Engagement" date="July 2025">
            <img src="/src/assets/our-story/Proposal.jpg" />
        </StoryItem>
    </div>
</template>

<style>

.story-timeline-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
    
    img {
        border-radius: 50%;
        max-width: 500px;
    }
}

</style>