<template>
    <div>
        <h1 class="work-heading" id="myWork">My Work</h1>
        <div class="btn-container">
            <button @click="showAll">All</button>
            <button @click="showNuxt">Nuxt</button>
            <button @click="showJS">Java Script</button>
            <button @click="showAngular">Angular</button>
        </div>
        <div class="work-collection">
            <div v-for="work in worksToShow" :key="work.id" class="single-work-container">
                <LoadedLazyImage :imgPath="work.imgPath" :alt="work.alt" />
                <div class="middle">
                    <div class="work-description">
                        <h3>{{ work.title }}</h3>
                        <p>{{ work.description }}</p>
                        <a :href="work.url" :target="work.categories.includes('nuxt') ? '_self' : '_blank'"
                            rel="noopener noreferrer">
                            <button :class="work.categories.includes('angular') ? 'angular-button' : ''">
                                {{ getButtonText(work) }}
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, nextTick } from 'vue'
import LoadedLazyImage from './LoadedLazyImage.vue';

const works = [
    {
        id: 'photogallery',
        imgPath: '/img/work/photogallery.webp',
        title: 'Photo-Gallery',
        alt: 'Screenshot of the Photo Gallery app displaying beautiful pictures',
        description: 'Java Script - based, impressive photo gallery',
        url: 'https://rinatmadreiter.github.io/Photo-Gallery/',
        categories: ['js']
    },
    {
        id: 'quizapp',
        imgPath: '/img/work/quizapp.png',
        title: 'Bootstrap Quizapp',
        alt: 'Screenshot of the Bootstrap Quizapp displaying a modern web quiz',
        description: 'Boardgame Quizapp build with javascript and bootstrap',
        url: 'https://rinatmadreiter.github.io/Quiz-App/',
        categories: ['js']
    },
    {
        id: 'elpolloloco',
        imgPath: '/img/work/elpolloloco.png',
        title: 'El Pollo Loco',
        alt: 'Screenshot of the elpolloloco app displaying a 2D western jump and run game',
        description: 'Java Script - based jump and run desktop game.',
        url: 'https://rinatmadreiter.github.io/El_Pollo_Loco/',
        categories: ['js']
    },
    {
        id: 'pokedex',
        imgPath: '/img/work/pokedex.png',
        title: 'Pokedex',
        alt: 'Screenshot of the Pokedex app displaying different pokemons',
        description: 'Using the RESTful Pokémon API to display pokemon via JavaScript.',
        url: 'https://rinatmadreiter.github.io/pokedex/',
        categories: ['js']
    },
    {
        id: 'portfolio',
        imgPath: '/img/work/portfolio.webp',
        title: 'Personal Website',
        alt: 'Screenshot of the current modern portfolio website',
        description: 'Nuxt - based personal portfolio website.',
        url: '/#top',
        categories: ['nuxt']
    },
    {
        id: 'cardgame',
        imgPath: '/img/work/cardgame.webp',
        title: 'Language Card Game',
        alt: 'Screenshot of cardgame app displaying the start screen of the game with lots of poker cards',
        description: 'Angular - based card game.',
        url: 'https://github.com/RinatMadreiter/ringoffire',
        categories: ['angular'],
        buttonText: 'Visit Repository'
    }
];

const filterClicked = ref(false);
const selectedFilters = ref(new Set(['js', 'angular', 'nuxt'])); // all selected initially

const worksToShow = computed(() =>
    works.filter(work => work.categories.some(cat => selectedFilters.value.has(cat)))
);


async function showAll() {
    selectedFilters.value = new Set(['js', 'angular', 'nuxt']);
    await triggerFilter();
}

async function showJS() {
    selectedFilters.value = new Set(['js']);
    await triggerFilter();
}

async function showAngular() {
    selectedFilters.value = new Set(['angular']);
    await triggerFilter();
}

async function showNuxt() {
    selectedFilters.value = new Set(['nuxt']);
    await triggerFilter();
}

async function triggerFilter() {
    filterClicked.value = false;
    await nextTick();
    filterClicked.value = true;
    await nextTick();
}

function getButtonText(work) {
    return work.categories.includes('angular') && work.buttonText
        ? work.buttonText
        : 'Visit now!';
}
</script>


<style lang="scss" scoped>
.work-heading {
    font-weight: 500;
    font-size: 36px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 30px;
    margin-top: 80px;
    margin-right: 14vw;
    margin-left: 14vw;
    text-align: center;

    @media(max-width: 1286px) {
        margin-top: 50px;
    }

    @media(max-width: 720px) {
        font-size: 32px;
        line-height: 40px;
        margin-right: 8vw;
        margin-left: 8vw;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 5vh;
        margin-bottom: 2vh;
    }
}


button {
    width: 120px;
    height: 40px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 15px;
    margin-top: 10px;
    background-color: black;
    border-color: #FA2759;


    @media (hover: hover) {
        &:hover {
            background-color: #FA2759;
        }
    }

    @media(max-width: 720px) {
        font-size: 16px;
        width: 100px;
        text-align: center;
        height: 45px;
    }

    @media(max-width: 360px) {
        width: 80px;
    }

    @media(max-width: 300px) {
        width: 60px;
        font-size: 12px;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 3vh;
        width: 19vh;
        padding: 1vh;
        height: fit-content;
    }
}

.angular-button {
    height: fit-content;
}

img {
    width: 33vw;
    height: auto;
    object-fit: cover;
    cursor: pointer;
    opacity: 1;
    display: block;

    @media(max-width: 300px) {
        width: 225px;
        height: 175px;
    }

    @media(min-width: 301px) and (max-width: 1200px) {
        width: 100%;
        height: auto;
    }

}

.work-collection {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 14vw;
    margin-left: 14vw;


    @media(max-width: 720px) {
        margin-right: 8vw;
        margin-left: 8vw;
    }

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        margin-right: 6vw;
        margin-left: 6vw;
    }
}

.single-work-container {
    margin-top: 30px;
    margin-left: 16px;
    margin-right: 16px;
    position: relative;

    @media(max-width: 300px) {
        margin-left: 5px;
        margin-right: 5px;
    }
}

.single-work-container:hover .middle {
    background-color: rgba(245, 245, 245, 0.9);
    opacity: 1;
}

.middle {
    position: absolute;
    transition: 250ms ease;
    opacity: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
}

.work-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: black;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    h3 {
        color: #FA2759;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        text-align: center;

        @media(max-width: 420px) {
            font-size: 15px;
            margin-block-start: 0;
            margin-block-end: 0;
        }

        @media(min-width: 1920px) and (min-height: 1080px) {
            font-size: 3vh;
            height: fit-content;
        }
    }

    p {
        @media(max-width: 420px) {
            font-size: 12px;
            line-height: 13px;
        }

        @media(min-width: 1920px) and (min-height: 1080px) {
            font-size: 2vh;
            line-height: 2.5vh;
        }
    }

    button {
        @media(max-width: 420px) {
            font-size: 12px;
            width: 80px;
            margin-bottom: 0;
        }
    }
}

.btn-container {

    margin-right: 14vw;
    margin-left: 14vw;
    margin-top: 50px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;


    @media(max-width: 720px) {
        display: flex;
        margin-right: 8vw;
        margin-left: 8vw;
    }

    @media(max-width: 1286px) {
        margin-top: 50px;
    }

}

.d-none {
    display: none;
}

.d-flex {
    display: flex;
}
</style>