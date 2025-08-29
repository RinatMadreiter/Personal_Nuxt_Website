<template>
    <div>
        <h1 class="work-heading">My Work</h1>
        <div class="btn-container">
            <button @click="showAll">All</button>
            <button @click="showAngular">Angular</button>
            <button @click="showJS">Java Script</button>
        </div>
        <div class="work-collection">
            <div v-if="displayJS" class="single-work-container">
                <img class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/photogallery.png" data-lazy="/img/work/photogallery.png" ref="imgPhotoGallery" />
                <div class="middle">
                    <div class="work-description">
                        <h3>Photo-Gallery</h3>
                        <p>Java Script - based, impressive photo gallery</p>
                        <a href="https://rinatmadreiter.github.io/Photo-Gallery/" target="_blank"
                            rel="noopener noreferrer">
                            <button>Visit now!</button>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="displayJS" class="single-work-container">
                <img class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/quizapp.png" data-lazy="/img/work/quizapp.png" ref="imgQuizApp" />
                <div class="middle">
                    <div class="work-description">
                        <h3>Bootstrap Quizapp</h3>
                        <p>Boardgame Quizapp build with javascript and bootstrap</p>
                        <a href="https://rinatmadreiter.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">
                            <button>Visit now!</button>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="displayJS" class="single-work-container">
                <img id="elpolloloco" class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/elpolloloco.png" data-lazy="/img/work/elpolloloco.png" ref="imgElPolloLoco" />
                <div class="middle">
                    <div class="work-description">
                        <h3>El Pollo Loco</h3>
                        <p>Java Script - based jump and run desktop game.</p>
                        <a href="https://rinatmadreiter.github.io/El_Pollo_Loco/" target="_blank"
                            rel="noopener noreferrer">
                            <button>Visit now!</button>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="displayJS" class="single-work-container">
                <img class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/pokedex.png" data-lazy="/img/work/pokedex.png" ref="imgPokedex" />
                <div class="middle">
                    <div class="work-description">
                        <h3>Pokedex</h3>
                        <p>Using the RESTful Pokémon API to display pokemon via JavaScript.</p>
                        <a href="https://rinatmadreiter.github.io/pokedex/" target="_blank" rel="noopener noreferrer">
                            <button>Visit now!</button>
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="displayAngular" class="single-work-container">
                <img class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/portfolio.png" data-lazy="/img/work/portfolio.png" ref="imgPortfolio" />
                <div class="middle">
                    <div class="work-description">
                        <h3>Personal Website</h3>
                        <p>Angular - based personal portfolio website.</p>
                        <a href="#top"><button>Visit now!</button></a>
                    </div>
                </div>
            </div>

            <div v-if="displayAngular" class="single-work-container">
                <img class="opacity-0"
                    :class="{ 'opacity-0': !filterClicked, 'slide-from-right-animation': filterClicked }"
                    src="/img/work/cardgame.png" data-lazy="/img/work/cardgame.png" ref="imgCardGame" />
                <div class="middle">
                    <div class="work-description">
                        <h3>Language Card Game</h3>
                        <p>Angular - based card game.</p>
                        <a href="https://ring-of-fire-22675.web.app/" target="_blank" rel="noopener noreferrer">
                            <button>Visit now!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const displayJS = ref(true)
const displayAngular = ref(true)
const filterClicked = ref(false)

const imgPhotoGallery = ref(null)
const imgQuizApp = ref(null)
const imgElPolloLoco = ref(null)
const imgPokedex = ref(null)
const imgPortfolio = ref(null)
const imgCardGame = ref(null)

function lazyLoad(target) {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                const src = img.getAttribute('data-lazy')
                img.setAttribute('src', src)
                img.classList.add('fade')
                observer.disconnect()
            }
        })
    })
    io.observe(target)
}

async function observeVisibleImages() {
  await nextTick() // Wait for DOM updates
  // Only lazy load visible images according to filters
  if (displayJS.value) {
    [imgPhotoGallery, imgQuizApp, imgElPolloLoco, imgPokedex].forEach(ref => {
      if (ref.value) lazyLoad(ref.value)
    })
  }
  if (displayAngular.value) {
    [imgPortfolio, imgCardGame].forEach(ref => {
      if (ref.value) lazyLoad(ref.value)
    })
  }
}

onMounted(() => {
  observeVisibleImages()
})

async function showAll() {
  displayJS.value = true
  displayAngular.value = true
  filterClicked.value = false
  await nextTick()
  filterClicked.value = true
  observeVisibleImages()
}

async function showJS() {
  displayJS.value = true
  displayAngular.value = false
  filterClicked.value = false
  await nextTick()
  filterClicked.value = true
  observeVisibleImages()
}

async function showAngular() {
  displayJS.value = false
  displayAngular.value = true
  filterClicked.value = false
  await nextTick()
  filterClicked.value = true
  observeVisibleImages()
}
</script>


<style lang="scss" scoped>
// :host {
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: flex-start;
// background-color: black;
// }

.work-heading {
    font-weight: 500;
    font-size: 36px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 30px;
    margin-top: 80px;
    margin-right: 14vw;
    margin-left: 14vw;

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
        width: 18vh;
        height: fit-content;
    }
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

/* needed for lazyload animation */
.opacity-0 {
    transform: translateX(50%);
    opacity: 0;
    transition: all 1500ms;

    @media(max-width: 1200px) {
        transform: translateX(15%);
    }

    @media(max-width: 370px) {
        transform: translateX(5%);
    }
}

.fade {
    transform: translateX(0);
    opacity: 1;
    transition: all 1500ms;
}

.slide-from-right-animation {
    animation: slide-from-right ease-in-out 1000ms;
    transition: all 1500ms;
}

@keyframes slide-from-right {
    0% {
        transform: translateX(5%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
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
            height: 30px;
            width: 80px;
            margin-bottom: 0;
        }
    }
}

.btn-container {

    margin-right: 14vw;
    margin-left: 14vw;

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