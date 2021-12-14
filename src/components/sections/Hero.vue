<template>
    <div class="hero">
        <div class="text">
            <h2>Teen Titans Go!: Titans Together</h2>
            <p>A new full-size collection featuring TEEN TITANS GO #27-32!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/partials/variables.scss';
    @import '../../assets/style/mixin/mixins.scss';
    .hero {
        height: 80vh;
        background: linear-gradient(rgba(0,0,0,0) 60%, rgba(0,0,0,0.7)), url('../../assets/img/jumbotron.jpg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .text {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 10%;
            h2, p {
                font-family: Arial, Helvetica, sans-serif;
                color: $white;
            }
            h2 {
                text-transform: uppercase;
                font-size: 3rem;
                margin-bottom: 20px;
                font-weight: 300;
            }
            p {
                font-size: 1.2rem;
            }
        }
    }
</style>