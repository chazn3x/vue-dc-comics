<template>
  <header>
        <div class="container">
            <!-- logo -->
            <a class="logo" href="#">
                <img src="../assets/img/dc-logo.png" alt="DC logo header">
            </a>
            <!-- menu -->
            <nav>
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        <a :class="{active: link.current}" :href="link.url">{{link.text}}</a>
                    </li>
                </ul>
            </nav>
        </div>
  </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            links: [
                {
                    text: "characters",
                    url: "#",
                    current: false,
                },
                {
                    text: "comics",
                    url: "#",
                    current: true,
                },
                {
                    text: "movies",
                    url: "#",
                    current: false,
                },
                {
                    text: "tv",
                    url: "#",
                    current: false,
                },
                {
                    text: "games",
                    url: "#",
                    current: false,
                },
                {
                    text: "collectibles",
                    url: "#",
                    current: false,
                },
                {
                    text: "videos",
                    url: "#",
                    current: false,
                },
                {
                    text: "fans",
                    url: "#",
                    current: false,
                },
                {
                    text: "news",
                    url: "#",
                    current: false,
                },
                {
                    text: "shop",
                    url: "#",
                    current: false,
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/partials/variables.scss';
    header {
        background-color: #fff;
        position: fixed;
        width: 100%;
        padding: 0 20px;
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
        }
        .logo img {
            max-height: 80px;
        }
        nav {
            ul {
                display: flex;
                li a {
                    padding: 40px 15px;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: .8rem;
                    &:hover, &.active {
                        color: $brandColor;
                        border-bottom: 4px solid $brandColor;
                        transition: .3s;
                    }
                }
            }
        }
    }
</style>