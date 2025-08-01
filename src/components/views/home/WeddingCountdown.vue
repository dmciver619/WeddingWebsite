<template>
    <div class="wedding-countdown">
        <div class="countdown-item">
            <span class="countdown-value">{{ timeUntilWedding.days }}</span>
            <span class="countdown-unit">Days</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">{{ timeUntilWedding.hours }}</span>
            <span class="countdown-unit">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">{{ timeUntilWedding.minutes }}</span>
            <span class="countdown-unit">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">{{ timeUntilWedding.seconds }}</span>
            <span class="countdown-unit">Seconds</span>
        </div>
    </div>

</template>

<style>
    .wedding-countdown {
        border: 1px grey solid;
        color: rgb(80, 80, 80);
        display: flex;
        background: rgba(255, 255, 255, 0.75);
        border-radius: 10px;
        font-size: large;
        font-weight: 600;
        width: 50%;
        margin-bottom: 20px;
        justify-content: space-around;
        

        @media screen and (max-width: 881px) {
            width: 90%;

            .countdown-item {
                font-size: 30px;
                min-width: 75px;
            }

            .countdown-unit {
                font-size: 18px;
            }
        }
        

        @media screen and (max-width: 380px) {
            width: 90%;

            .countdown-item {
                font-size: 25px;
                min-width: 50px;
            }

            .countdown-unit {
                font-size: 15px;
            }
        }

        @media screen and (max-width: 270px) {
            width: 90%;

            .countdown-item {
                font-size: 20px;
                min-width: 20px;
            }

            .countdown-unit {
                font-size: 10px;
            }
        }

        @media screen and (max-height: 325px) {
            display: none;
        }
    }

    .countdown-item {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        font-size: 40px;
        min-width: 100px;

        &:not(:last-of-type) {
            border-right: 1px solid black;
        }
    }

    .countdown-unit {
        font-size: 22px;
        font-style: italic;
    }

</style>

<script>
export default {
    data() {
        const weddingDate = new Date(2027, 1, 1, 9, 0, 0);
        return {
            weddingDate,
            timeUntilWedding: this.getTimeUntilWedding(weddingDate)
        }
    },
    mounted() {
        setInterval(() => {
            this.timeUntilWedding = this.getTimeUntilWedding(this.weddingDate);
        }, 1000);
    },
    methods: {
        getTimeUntilWedding(deadline) {
            const now = new Date();
            const offset = deadline.getTime() - now.getTime();
            return {
                days: this.epochToDays(offset),
                hours: this.epochToHours(offset),
                minutes: this.epochToMinutes(offset),
                seconds: this.epochToSeconds(offset)
            }
        },
        epochToSeconds(epoch) {
            return Math.floor((epoch % (1000 * 60)) / 1000);
        },
        epochToMinutes(epoch) {
            return Math.floor((epoch % (1000 * 60 * 60)) / (1000 * 60));
        },
        epochToHours(epoch) {
            return Math.floor((epoch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        },
        epochToDays(epoch) {
            return Math.floor(epoch / (1000 * 60 * 60 * 24));
        }
    }
}
</script>