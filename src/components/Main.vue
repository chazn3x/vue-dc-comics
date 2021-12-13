<template>
    <main>
        <div class="container">
            <h1> --&gt; Content goes here &lt;-- </h1>
        </div>
    </main>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/partials/variables.scss';
    main {
        background: $black;
        padding: 140px 20px 40px;
        h1 {
            color: $white;
        }
    }
</style>