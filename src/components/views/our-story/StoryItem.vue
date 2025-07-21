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
        <div class="story-item-branch"></div>
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
            width: calc(50% - 1px);
            justify-content: space-between;

            &:not(:first-of-type) {
                margin-top: -250px;
            }

            &.left {
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

            &.right {
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
        }
        
        .story-item-branch {
            height: 2px;
            width: 100%;
            background: white;
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