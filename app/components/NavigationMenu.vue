<template>
    <div class="nav-container" id="top">
        <a href="#top" @click.stop="menuOpen = false"><img src="/img/logo.webp" alt="Logo showing R & M on a screen"></a>

        <!-- Desktop Navigation -->
        <div class="link-container hide-mobile">
            <a href="#myWork">PORTFOLIO</a>
            <a @click="scrollTwice('about')">ABOUT</a>
            <a @click="scrollTwice('footer')">CONTACT</a>
        </div>

        <!-- Mobile Navigation -->
        <MobileMenu v-model="menuOpen" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollTwice } from '~/composables/useScrollTwice.js'
import MobileMenu from '~/components/MobileMenu.vue'

const { scrollTwice } = useScrollTwice(490)
const menuOpen = ref(false)
</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
    margin-right: 12vw;
    margin-left: 12vw;
    padding-top: 40px;
    font-size: 16px;
    height: 12vh;

    @media (max-width: 720px) {
        margin-right: 8vw;
        margin-left: 8vw;
    }

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        margin-right: 10vw;
        margin-left: 10vw;
        flex-direction: row;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 3vh;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        margin-top: 1.5vh;
    }

    a {
        -webkit-tap-highlight-color: transparent;
    }
}

img {
    width: 80px;
    height: 80px;

    @media(min-width: 1920px) and (min-height: 1080px) {
        width: 8vh;
        height: 8vh;
    }
}

.link-container {

    a {
        text-decoration: none;
        color: white;
        margin-right: 40px;

        &:hover {
            color: #FA2759;
            cursor: pointer;
        }
    }
}

.hide-mobile {

    @media (max-width: 720px) {
        display: none;
    }
}
</style>