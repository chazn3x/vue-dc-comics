<template>
    <section>
        <h2>Current series</h2>
        <div class="comics-list">
            <ComicCard v-for="(comic, index) in comics" :key="index" :comic="comic"/>
        </div>
        <div class="load-more">
            <a href="#">Load more</a>
        </div>
    </section>
</template>

<script>
import Comics from '../../data/dc-comics.js'
import ComicCard from '../commons/ComicCard.vue'
export default {
    name: "CurrentSeries",
    components: {
        ComicCard,
    },
    data() {
        return {
            comics: Comics,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/global.scss';
    @import '../../assets/style/partials/variables.scss';
    section {
        position: relative;
        padding-top: 20px;
        h2 {
            position: absolute;
            top: -70px;
            width: max-content;
            padding: 10px 25px;
            font-size: 2rem;
            background-color: $brandColor;
            text-transform: uppercase;
            color: $white;
        }
        .comics-list {
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, 180px);
            gap: 20px;
        }
        .load-more {
            text-transform: uppercase;
            margin-top: 40px;
            text-align: center;
            a {
                display: inline-block;
                width: max-content;
                background-color: $brandColor;
                padding: 10px 35px;
                color: $white;
                font-weight: 500;
            }
        }
    }
</style>