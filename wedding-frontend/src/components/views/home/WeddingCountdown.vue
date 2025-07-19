<template>
{{ timeUntilWedding.days }} Days {{ timeUntilWedding.hours }} Hours {{ timeUntilWedding.minutes }} Minutes {{ timeUntilWedding.seconds }} Seconds

</template>

<style>

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
            let days = Math.floor(offset / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (offset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor(
                (offset % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor(
                (offset % (1000 * 60)) / 1000);
            return {
                days,
                hours,
                minutes,
                seconds
            }
        }
    }
}
</script>