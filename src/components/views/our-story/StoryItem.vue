<template>
    <div :class="'story-item-container ' + side">
        <div class="story-item">
            <div class="story-item-description">
                <h2>{{date}}</h2>
                <h3>{{title}}</h3>
                <p>{{description}}</p>
            </div>
            <div class="story-item-image-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            description: String,
            side: String,
            title: String,
            date: String,
        }
    }

</script>

<style>

    @media screen and (min-width: 1320px) {
        .story-item-container {
            display: flex;
            align-items: center;

            &:not(:first-of-type) {
                margin-top: -250px;
            }

            &.right {
                flex-direction: row-reverse;
            }
        }
        

        .story-item {
            max-width: 500px;

            .story-item-description {
                h2 {
                    margin: 0;
                }
            }
        }
    }


</style>