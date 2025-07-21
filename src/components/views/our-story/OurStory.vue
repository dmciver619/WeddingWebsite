<template>
    <h1>Our Story</h1>

    <div class="story-timeline-vertical">
        <div class="story-item-container left">
            <div class="story-item">
                <div class="story-item-description">
                    <h2>May 2015</h2>
                    <p>Nicole sent Dylan the first message</p>
                </div>
                <div class="story-item-image-container">
                    <img src="/src/assets/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
                </div>
            </div>
            <div class="story-item-branch"></div>
        </div>
        <div class="story-item-container right">
            <div class="story-item">
                <div class="story-item-description">
                    <h2>May 2015</h2>
                    <p>Nicole sent Dylan the first message</p>
                </div>
                <div class="story-item-image-container">
                    <img src="/src/assets/4d228af3-332b-4847-9aff-5b0adfef3e33.jpg" />
                </div>
            </div>
            <div class="story-item-branch"></div>
        </div>
    </div>

    <!-- <ol>
        <li>First Message</li>
        <li>First Date?</li>
        <li>First Kiss - 21st July 2015?</li>
        <li>Started Dating - When & Where</li>
        <li>First Holiday Alone - Fuerteventura</li>
        <li>Engagement - When & Where</li>
    </ol> -->
</template>

<style>

.story-timeline-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;

    .left {
        align-self: start;
        border-right: 2px solid white;

        .story-item-branch {
            &::after {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                background-color: whitesmoke;
                border-radius: 50%;
                place-self: end;
                top: -10px;
                position: relative;
                right: -11px;
            }
        }
    }

    .right {
        flex-direction: row-reverse;
        align-self: end;
        border-left: 2px solid white;
        
        .story-item-branch {
            
            &::before {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                background-color: whitesmoke;
                border-radius: 50%;
                place-self: start;
                top: -10px;
                position: relative;
                right: 11px;
            }
        }
    }
    
    .story-item-container {
        display: flex;
        align-items: center;
        width: calc(50% - 1px);
        justify-content: space-between
    }

    .story-item-branch {
        height: 2px;
        width: 100%;
        background: white;
    }

    .story-item, img {
        max-width: 500px;
    }

    .story-item {
        .story-item-description {
            h2 {
                margin: 0;
            }
        }
    }
}

</style>