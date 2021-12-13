<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <nav>
                    <ul>
                        <li v-for="(link, index) in topLinks" :key="index">
                            <a :href="link.url">
                                <img :src="require('../assets/img/' + link.img)" :alt="link.text + ' icon'">
                                {{link.text}}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer-main container">

        </div>
        <div class="footer-bottom container">

        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            topLinks: [
                {
                    img: "buy-comics-digital-comics.png",
                    text: "digital comics",
                    url: "#",
                },
                {
                    img: "buy-comics-merchandise.png",
                    text: "dc merchandise",
                    url: "#",
                },
                {
                    img: "buy-comics-subscriptions.png",
                    text: "subscription",
                    url: "#",
                },
                {
                    img: "buy-comics-shop-locator.png",
                    text: "comic shop locator",
                    url: "#",
                },
                {
                    img: "buy-dc-power-visa.svg",
                    text: "dc power visa",
                    url: "#",
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/partials/variables.scss';
    footer {
        .footer-top {
            background: $brandColor;
            padding: 50px 0;
            ul {
                display: flex;
                justify-content: space-around;
                align-items: center;
                li {
                    a {
                        color: $white;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: 500;
                        font-size: .8rem;
                        display: flex;
                        align-items: center;
                        img {
                            height: 50px;
                            margin: 0 15px;
                        }
                    }
                    &:last-child a img {
                        height: 40px;
                    }
                }
            }
        }
    }
</style>