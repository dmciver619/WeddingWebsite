<script setup lang="ts">
import StoryItem from './StoryItem.vue';
</script>

<template>
    <h1>Our Story</h1>

    <div class="story-timeline-vertical">
        <StoryItem description="Nicole sent Dylan the first message on Facebook" side="left" title="First Message" date="May 2015">
            <img src="/src/assets/our-story/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
        </StoryItem>
        <StoryItem description="Behind Pickie Park on a hill overlooking Pickie and the docks, Dylan asked Nicole out" side="right" title="Boyfriend/Girlfriend" date="July 2015">
            <img src="/src/assets/our-story/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
        </StoryItem>
        <StoryItem side="left" title="First Kiss" date="July 2015">
            <img src="/src/assets/our-story/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
        </StoryItem>
        <StoryItem description="First romantic holiday to Fuerteventura" side="right" title="First Holiday Alone" date="January 2019">
            <img src="/src/assets/our-story/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
        </StoryItem>
        <StoryItem description="Dylan got down on one knee in Singapore Botanic Gardens" side="left" title="Engagement" date="July 2025">
            <img src="/src/assets/our-story/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
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