<template>
    <main>
        <Hero/>
        <div class="container">
            <CurrentSeries/>
        </div>
    </main>
</template>

<script>
import Hero from '../sections/Hero.vue'
import CurrentSeries from '../sections/CurrentSeries.vue'
export default {
    name: "Main",
    components: {
        Hero,
        CurrentSeries
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/partials/variables.scss';
    main {
        background: rgb(28,28,28);
        padding-top: 100px;
        .container {
            padding: 40px 20px;
        }
    }
</style>