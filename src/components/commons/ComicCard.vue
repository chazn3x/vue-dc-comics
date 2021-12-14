<template>
    <div class="card">
        <div class="img">
            <img :src="comic.thumb" :alt="comic.series">
            <div class="info">
                <p>Price: {{comic.price}}</p>
                <p>Type: {{comic.type}}</p>
            </div>
        </div>
        <h4>{{comic.series}}</h4>
    </div>
</template>

<script>
export default {
    name: "ComicCard",
    props: {
        comic: Object,
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global.scss';
@import '../../assets/style/partials/variables.scss';
.card {
    h4 {
        color: $white;
        margin-top: 10px;
    }
    .img {
        position: relative;
        background-color: #000;
        img {
            width: 100%;
            transition: .2s;
            display: block;
        }
        .info {
            position: absolute;
            bottom: 15px;
            left: 10px;
            display: none;
            p {
                color: $white;
            }
        }
        &:hover {
            img {
                opacity: .6;
            }
            .info {
                display: block;
            }
        }
    }
}
</style>