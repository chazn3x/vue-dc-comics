<template>
    <footer>
        <!-- footer top -->
        <div class="footer-top">
            <div class="container">
                <ul>
                    <li v-for="(link, index) in topLinks" :key="index">
                        <a :href="link.url">
                            <img :src="require('../assets/img/' + link.img)" :alt="link.text + ' icon'">
                            <span>{{link.text}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- footer middle -->
        <div class="footer-main">
            <div class="container">
                <!-- links -->
                <div class="col">
                    <h3>{{mainCategories[0].title}}</h3>
                    <ul>
                        <li v-for="(link, index) in mainCategories[0].links" :key="index">
                            <a :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                    <h3>{{mainCategories[1].title}}</h3>
                    <ul>
                        <li v-for="(link, index) in mainCategories[1].links" :key="index">
                            <a :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>{{mainCategories[2].title}}</h3>
                    <ul>
                        <li v-for="(link, index) in mainCategories[2].links" :key="index">
                            <a :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>{{mainCategories[3].title}}</h3>
                    <ul>
                        <li v-for="(link, index) in mainCategories[3].links" :key="index">
                            <a :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- footer bottom -->
        <div class="footer-bottom">
            <div class="container">
                <!-- sign up button -->
                <a class="sign" href="#">sign-up now!</a>
                <!-- socials -->
                <div class="socials">
                    <span>follow us</span>
                    <div class="icons">
                        <div class="icon">
                            <a href="#">
                                <img src="../assets/img/footer-facebook.png" alt="Facebook icon">
                            </a>
                        </div>
                        <div class="icon">
                            <a href="#">
                                <img src="../assets/img/footer-twitter.png" alt="Twitter icon">
                            </a>
                        </div>
                        <div class="icon">
                            <a href="#">
                                <img src="../assets/img/footer-youtube.png" alt="YouTube icon">
                            </a>
                        </div>
                        <div class="icon">
                            <a href="#">
                                <img src="../assets/img/footer-pinterest.png" alt="Pinterest icon">
                            </a>
                        </div>
                        <div class="icon">
                            <a href="#">
                                <img src="../assets/img/footer-periscope.png" alt="Periscope icon">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
            mainCategories: [
                {
                    title: "dc comics",
                    links: [
                        {
                            text: "Characters",
                            url: "#",
                        },
                        {
                            text: "Comics",
                            url: "#",
                        },
                        {
                            text: "Movies",
                            url: "#",
                        },
                        {
                            text: "TV",
                            url: "#",
                        },
                        {
                            text: "Games",
                            url: "#",
                        },
                        {
                            text: "Videos",
                            url: "#",
                        },
                        {
                            text: "News",
                            url: "#",
                        },
                    ],
                },
                {
                    title: "shop",
                    links: [
                        {
                            text: "Shop DC",
                            url: "#",
                        },
                        {
                            text: "Shop DC Collectibles",
                            url: "#",
                        },
                    ],
                },
                {
                    title: "dc",
                    links: [
                        {
                            text: "Terms Of Use",
                            url: "#",
                        },
                        {
                            text: "Privacy policy (New)",
                            url: "#",
                        },
                        {
                            text: "Ad Choices",
                            url: "#",
                        },
                        {
                            text: "Advertising",
                            url: "#",
                        },
                        {
                            text: "Jobs",
                            url: "#",
                        },
                        {
                            text: "Subscriptions",
                            url: "#",
                        },
                        {
                            text: "Talent Workshops",
                            url: "#",
                        },
                        {
                            text: "CPSC Certificates",
                            url: "#",
                        },
                        {
                            text: "Ratings",
                            url: "#",
                        },
                        {
                            text: "Shop Help",
                            url: "#",
                        },
                        {
                            text: "Contact Us",
                            url: "#",
                        },
                    ],
                },
                {
                    title: "sites",
                    links: [
                        {
                            text: "DC",
                            url: "#",
                        },
                        {
                            text: "MAD Magazine",
                            url: "#",
                        },
                        {
                            text: "DC Kids",
                            url: "#",
                        },
                        {
                            text: "DC Universe",
                            url: "#",
                        },
                        {
                            text: "DC Power Visa",
                            url: "#",
                        },
                    ],
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/partials/variables.scss';
    @import '../assets/style/mixin/mixins.scss';
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
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: Arial, Helvetica, sans-serif;
                        font-weight: 500;
                        font-size: .8rem;
                        display: flex;
                        align-items: center;
                        span {
                            color: $white;
                        }
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
        .footer-main {
            background-image: url('../assets/img/footer-bg.jpg');
            @include backgroundImage();
            .container {
                padding: 40px 0;
                background-image: url('../assets/img/dc-logo-bg.png');
                background-repeat: no-repeat;
                background-position-y: center;
                background-position-x: right;
                display: flex;
            }
            .col {
                margin-right: 25px;
                h3 {
                    color: $white;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                li a {
                    color: rgba(255,255,255,0.5);
                    font-size: .7rem;
                    font-family: Arial, Helvetica, sans-serif;
                    &:hover {
                        color: $brandColor;
                    }
                }
            }
            .col:first-of-type {
                h3:last-of-type {
                    margin-top: 20px;
                }
            }
        }
        .footer-bottom {
            background-color: rgb(48,48,48);
            padding: 20px 0;
            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .sign {
                border: 2px solid $brandColor;
                padding: 10px;
                text-transform: uppercase;
                color: $white;
                transition: .3s;
                &:hover {
                    background-color: $brandColor;
                }
            }
            .socials {
                display: flex;
                align-items: center;
                span {
                    color: $brandColor;
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: 1.3rem;
                    margin-right: 20px;
                }
                .icons {
                    display: flex;
                    .icon {
                        margin: 0 7px;
                        transition: .3s;
                        img {
                            height: 30px;
                        }
                        &:hover {
                            opacity: .8;
                        }
                    }
                }
            }
        }
    }
</style>