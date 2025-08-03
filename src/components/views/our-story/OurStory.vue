<script setup lang="ts">
import StoryItem from './StoryItem.vue';
</script>

<template>
    <h1 class="page-title">Our Story</h1>

    <div class="story-timeline-vertical">

        <div class="story-timeline-section">
            <div class="story-timeline-section-date-container">
                <h2 class="story-timeline-section-date">2015</h2>
                <div class="story-timeline-line-left"></div>
            </div>
            <div class="story-timeline-section-items">
                <StoryItem description="Nicole sent Dylan the first message on Facebook" side="left" title="First Message" date="May 2015">
                    <img src="/src/assets/our-story/FirstMessage.jpg" />
                </StoryItem>
                <StoryItem description="Between Skipperstone Beach and Pickie Play Park overlooking the pier, Dylan asked Nicole to be his girlfriend" side="right" title="Boyfriend / Girlfriend" date="July 2015">
                    <img src="/src/assets/our-story/BoyfriendGirlfriend.jpg" />
                </StoryItem>
                <StoryItem side="left" title="First Kiss" date="July 2015">
                    <img src="/src/assets/our-story/FirstKissButNotReally.png" />
                </StoryItem>
            </div>
        </div>
        
        <div class="story-timeline-section">
            <div class="story-timeline-section-date-container">
                <h2 class="story-timeline-section-date">2019</h2>
                <div class="story-timeline-line-left"></div>
            </div>
            <div class="story-timeline-section-items">
                <StoryItem description="First romantic holiday to Fuerteventura" side="right" title="First Holiday Alone" date="January 2019">
                    <img src="/src/assets/our-story/Fuerteventura.png" />
                </StoryItem>
            </div>
        </div>
        
        <div class="story-timeline-section">
            <div class="story-timeline-section-date-container">
                <h2 class="story-timeline-section-date">2025</h2>
                <div class="story-timeline-line-left"></div>
            </div>
            <div class="story-timeline-section-items">
                <StoryItem description="Dylan got down on one knee on the Rainforest Trail in Singapore Botanic Gardens and asked Nicole to marry him" side="left" title="Engagement" date="July 2025">
                    <img src="/src/assets/our-story/Proposal.jpg" />
                </StoryItem>
            </div>
        </div>
    </div>
</template>

<style>

.page-title {
    text-align: center;
}

.story-timeline-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 1320px) {
        .story-timeline-section {
            flex-direction: row;
            gap: 50px;
        }
    }

    @media screen and (max-width: 320px) {
        .story-timeline-section {
            gap: 20px;
        }
    }
    
    img {
        border-radius: 50%;
        width: 100%;
        max-width: 50vw;
    }
}

.story-timeline-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.story-timeline-section-date-container {
    display: none;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 1320px) {
        display: flex;
    }
}

.story-timeline-section-date {
    margin: 0;

}

.story-timeline-line-left {
    width: 2px;
    background: var(--main-text);
    height: 100%;
}

</style>