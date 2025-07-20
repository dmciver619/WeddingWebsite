<template>
    <div class="footer">
        <span>{{ timeUntilWedding.days }} Days</span>
        <span>{{ timeUntilWedding.hours }} Hours</span>
        <span>{{ timeUntilWedding.minutes }} Minutes</span>
        <span>{{ timeUntilWedding.seconds }} Seconds</span>
    </div>

</template>

<style>
    .footer {
        background: rgba(0,0,0,0.5);
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        font-size: large;
        font-weight: 600;
        gap: 8px;
        justify-content: center;
        position: absolute;
        width: 100%;
        left: 0;
        padding: 10px 20px;
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