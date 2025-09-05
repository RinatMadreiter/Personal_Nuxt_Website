<template>
    <div class="mobile-menu-container hide-desktop">
        <div class="animated-burger burger burger-rotate hide-desktop" :class="{ 'open': menuOpen  }"
            @click="toggleMenu">
            <div class="burger-lines"></div>
        </div>

        <div id="mobileMenu" class="mobile-menu-links" :class="{
            'animate-open-menu': menuOpen ,
            'd-flex': menuOpen ,
            'd-none': !menuOpen 
        }">
            <a href="#myWork" @click="toggleMenu">PORTFOLIO</a>
            <a @click="handleMobileNavClick('about')">ABOUT</a>
            <a @click="handleMobileNavClick('contact-me')">CONTACT</a>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useScrollTwice } from '~/composables/useScrollTwice.js'

const props = defineProps({
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const { scrollTwice } = useScrollTwice(490)

const menuOpen = ref(props.modelValue)

// Sync local state when prop changes
watch(() => props.modelValue, (newVal) => {
    menuOpen.value = newVal
})

// Toggle function updates both local state and emits event to parent
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
    emit('update:modelValue', menuOpen.value)
}

function handleMobileNavClick(targetId) {
    toggleMenu()
    scrollTwice(targetId)
}
</script>


<style lang="scss" scoped>
.hide-desktop {
    @media (min-width: 721px) {
        display: none;
    }
}

.d-flex {
    display: flex;
}

.d-none {
    display: none;
}

.animated-burger {
    margin-bottom: 32px;
}

.burger.burger-rotate {
    .burger-lines {

        &:after,
        &:before {
            width: 2em;
        }

        &,
        &:after,
        &:before {
            transition: all .2s;
        }
    }

    &.open {
        transform: rotate(180deg);

        .burger-lines {
            & {
                background-color: rgb(0, 0, 0);
            }

            &:before,
            &:after {
                left: 0.5em;
                top: 0px;
            }

            &:before {
                transform: rotate(135deg);
            }

            &:after {
                transform: rotate(-135deg);
            }
        }
    }
}


.mobile-menu-links {
    flex-direction: column;
    background-color: rgba(250, 39, 89, 0.5);
    background-color: #888;
    z-index: 10;
    border-radius: 8px;
    padding: 16px;
    width: 120px;
    transform: translateX(14vw);


    @media (max-width: 300px) {
        transform: translateX(8vw);
        padding-left: 0;
        padding-right: 0;
        align-items: center;
    }

    @media (max-width: 720px) {
        transform: translateX(8vw);
    }

    @media (min-width: 721px) {
        display: none;
    }


    a {
        text-align: right;
        color: white;
        text-decoration: none;
        font-size: 22px;
        font-family: monospace;
        font-weight: 900;

        &:nth-child(2) {
            margin-top: 22px;
            margin-bottom: 22px;
        }

        &:hover {
            color: #FA2759;
            cursor: pointer;
        }

        @media (max-width: 300px) {
            text-align: left;
        }

        @media (max-width: 720px) {
            text-align: right;
        }

    }
}

.mobile-menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: fit-content;

    @media (min-width: 721px) {
        display: none;
    }
}

.animate-open-menu {
    animation: fly-from-right 1s;
}


@keyframes fly-from-right {
    0% {
        opacity: 0;
        transform: translate(100%, -100%);
    }

    100% {
        opacity: 1;
        transform: translateX(14vw);
    }
}

@media (max-width: 720px) {

    @keyframes fly-from-right {
        0% {
            opacity: 0;
            transform: translate(100%, -100%);
        }

        100% {
            opacity: 1;
            transform: translateX(8vw);
        }
    }
}

.burger {
    height: 3em;
    width: 3em;
    position: relative;
    font-size: 12px;
    cursor: pointer;
    -webkit-transition: .2s all;
    -o-transition: .2s all;
    transition: .2s all;
    -webkit-tap-highlight-color: transparent;

    /* added color on hover */
    @media (hover: hover) {
        &:hover {
            .burger-lines {
                background-color: #FA2759;

                &:after {
                    background-color: #FA2759;
                }

                &:before {
                    background-color: #FA2759;
                }
            }
        }
    }
}

.burger .burger-lines:after {
    left: 0;
    top: -1em;
}

.burger .burger-lines:before {
    left: 1em;
    top: 1em;
}

.burger:after {
    content: '';
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
}

.burger .burger-lines {
    top: 50%;
    margin-top: -0.125em;
}

.burger .burger-lines,
.burger .burger-lines:after,
.burger .burger-lines:before {
    pointer-events: none;
    display: block;
    content: '';
    width: 100%;
    border-radius: 0.25em;
    background-color: white;
    height: 0.25em;
    position: absolute;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
}

.burger .burger-lines:after {
    left: 0;
    top: -1em;
}

.burger .burger-lines:before {
    left: 1em;
    top: 1em;
}

.burger.burger-rotate .burger-lines:after,
.burger.burger-rotate .burger-lines:before {
    width: 2em;

    &:hover {
        background-color: #FA2759;
    }
}

.burger.burger-rotate .burger-lines,
.burger.burger-rotate .burger-lines:after,
.burger.burger-rotate .burger-lines:before {
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}

.burger.burger-rotate.open {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}

.burger.burger-rotate.open .burger-lines {
    background-color: transparent;
}

.burger.burger-rotate.open .burger-lines:before,
.burger.burger-rotate.open .burger-lines:after {
    left: 0.5em;
    top: 0px;
}

.burger.burger-rotate.open .burger-lines:before {
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
}

.burger.burger-rotate.open .burger-lines:after {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
</style>
