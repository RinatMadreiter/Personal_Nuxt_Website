<script setup>
import profileImage from '/img/components/welcomeSection/profile.jpg'
import LazyImage from './LazyImage.vue';

</script>

<template>
    <div class="main" id="top">
        <div class="greeting-contact-container">
            <div class="dynamic-typing">
                <div class="typing-demo">
                    Hi, I`m <span class="secondary">Rinat Madreiter</span>
                </div>
                <br>
                <div class="typing-demo2">
                    Front End Develop<span class="primary">e</span>r!
                </div>
            </div>

            <a href="#contact"><button>Contact Me</button></a>

        </div>

        <LazyImage :imgPath="profileImage" />
    </div>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    font-size: 64px;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 80px;
    margin-right: 14vw;
    margin-left: 14vw;

    p {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    @media(max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 10px;
    }

    @media only screen and (orientation: landscape) and (max-width: 1000px) and (max-height: 720px) {
        margin-right: 10vw;
        margin-left: 10vw;
        flex-direction: row;
    }

    @media(max-width: 720px) {
        margin-right: 8vw;
        margin-left: 8vw;
    }


    img {
        width: 400px;
        border-radius: 50%;
        object-fit: cover;

        @media(max-width: 720px) {
            width: 200px;
            height: fit-content;
        }

        @media(max-width: 1000px) and (min-width: 721px) and (min-height: 600px) {
            width: 250px;
            height: fit-content;
        }

        @media only screen and (orientation: landscape) and (max-width: 950px) and (min-height:400px) and (max-height: 550px) {
            width: 260px;
            height: fit-content;
        }

        @media only screen and (orientation: landscape) and (max-width: 950px) and (max-height: 399px) {
            width: 180px;
            height: fit-content;
        }

        @media(max-width: 1286px) and (min-height: 750px) {
            width: 295px;
            height: fit-content;
        }

        @media(min-width: 721px) and (max-width: 1600px) and (min-height: 701px) and (max-height: 900px) {
            width: 270px;
            height: fit-content;
        }

        @media(max-width: 1920px) and (max-height: 1080px) and (min-width: 1441px) {
            width: 350px;
            height: fit-content;
        }

        @media(max-width: 2600px) and (max-height: 1080px) and (min-width: 1921px) {
            width: 600px;
            height: fit-content;
        }

        @media(min-width: 2601px) and (min-height: 1081px) {
            width: 45vh;
            height: fit-content;
        }
    }
}


.dynamic-typing {

    @media(min-width: 1287px) {
        width: 696px;
    }
}

// /* needed for lazyload animation */
.main :deep(.opacity-0) {
    transition: transform 3s, opacity 3s;
}

.primary {
    color: #FA2759;
}

.secondary {
    color: #2DFCD8;
}

button {
    font-size: 18px;
    width: 300px;
    height: 78px;
    background-color: black;
    color: #FA2759;
    border-color: #FA2759;
    cursor: pointer;
    animation: 225ms ease-in-out;

    @media (hover: hover) {
        &:hover {
            background-color: #FA2759;
            color: black;
        }
    }

    @media(max-width: 300px) {
        width: 200px;
    }

    @media(max-width: 1920px) and (max-height: 1080px) and (min-width: 1441px) and (min-height: 901px) {
        font-size: 50px;
        width: 400px;
        height: auto;
    }

    @media(max-width: 2000px) and (min-width: 1800px) {
        font-size: 50px;
        width: 400px;
        height: auto;
        margin-top: 20vh;
        height: fit-content;

    }

    @media(max-width: 2600px) and (min-width: 2000px) {
        font-size: 70px;
        width: 700px;
        height: auto;
    }

    @media(min-width: 2601px) and (min-height: 2000px) {
        margin-top: 25vh;
        width: 42vh;
        height: auto;
        font-size: 5vh;
    }

}

.greeting-contact-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 1000px) {
        margin-top: 64px;
    }

    @media only screen and (orientation: landscape) and (max-width: 1000px) and (min-width:950px) {
        min-width: 30vw;
    }

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        margin-top: 8px;
        min-width: 45vw;
    }

    @media(max-width: 1000px) and (orientation: portrait) and (min-width: 720px) {
        min-width: 30vw;
    }

    @media(max-width: 720px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 1000px) and (max-width: 1200px) {
        min-width: 520px;
    }


    a {
        @media(max-width: 360px) {
            margin-top: 64px;
        }

        @media(min-width:361px) and (max-width: 720px) {
            margin-top: 48px;
        }

        @media(min-width: 721px) and (max-width: 1000px) {
            text-decoration: none;
            margin-top: 164px;
            display: flex;
            justify-content: center;
        }

        @media only screen and (orientation: landscape) and (max-width: 850px) and (max-height: 500px) {
            margin-top: 32px;
        }

        @media only screen and (orientation: landscape) and (min-width: 851px) and (max-width: 1000px) and (max-height: 500px) {
            margin-top: 64px;
        }
    }
}


@media(max-width: 1286px) {

    @keyframes move-down {
        0% {
            margin-top: 110px;
        }

        100% {
            margin-top: 80px;
        }
    }
}

@media(max-width: 1440px) and (max-height: 900px) and (min-width:1287px) {

    @keyframes move-down {
        0% {
            margin-top: 29vh;
        }

        100% {
            margin-top: 26vh;
        }
    }
}

@media(max-width: 1920px) and (max-height: 1080px) and (min-width: 1441px) {
    @keyframes move-down {
        0% {
            margin-top: 14.5vh
        }

        100% {
            margin-top: 11.5vh
        }
    }
}

@media(max-width: 2600px) and (max-height: 1080px) and (min-width: 1921px) {
    @keyframes move-down {
        0% {
            margin-top: 12vh;
        }

        100% {
            margin-top: 9vh;
        }
    }
}

@media(min-width: 2601px) and (min-height: 1081px) {
    @keyframes move-down {
        0% {
            margin-top: 28vh;
        }

        100% {
            margin-top: 24vh;
        }
    }
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes border {
    50% {
        border-color: transparent
    }
}

@keyframes border-none-end {
    0% {
        border-right: none;
    }

    100% {
        border-right: none;
    }
}

@keyframes border-none-start {
    0% {
        border-right: none;
        visibility: hidden;
    }

    100% {
        border-right: none;
        visibility: hidden;
    }
}

.typing-demo {
    width: 23ch;
    animation: typing 1.5s steps(23), border .5s step-end infinite alternate, border-none-end 1s 1.5s infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 55px;

    @media(max-width: 320px) {
        font-size: 18px;
    }

    @media(max-width: 360px) and (min-width: 321px) {
        font-size: 20px;
    }


    @media(max-width: 460px)and (min-width: 361px) {
        font-size: 25px;
    }

    @media(max-width: 720px) and (min-width: 461px) {
        font-size: 32px;
    }

    @media only screen and (orientation: landscape) and (max-width: 850px) and (max-height: 500px) {
        font-size: 22px;
        margin-top: 32px;
    }

    @media(max-width: 1000px) and (min-width: 721px) {
        font-size: 27px;
    }

    @media(min-width: 721px) and (max-width: 1600px) and (min-height: 701px) and (max-height: 900px) {
        font-size: 38px;
    }

    @media(min-width: 721px) and (max-width: 1286px) and (min-height: 700px) {
        font-size: 40px;
    }

    @media(max-width: 2600px)and (min-width: 1287px) and (min-width: 2000px) {
        font-size: 70px;
    }

    @media(min-width: 2601px) and (min-height: 2100px) {
        font-size: 5vh;
    }
}


.typing-demo2 {
    width: 19ch;
    animation: typing 1.5s steps(19) 2s, border .5s step-end infinite alternate, border-none-start 2s 1, border-none-end 1s 3.5s infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 55px;

    @media(max-width: 320px) {
        font-size: 18px;
    }

    @media(max-width: 360px) and (min-width: 321px) {
        font-size: 20px;
    }

    @media(max-width: 460px)and (min-width: 361px) {
        font-size: 25px;
    }

    @media(max-width: 720px) and (min-width: 461px) {
        font-size: 32px;
    }

    @media only screen and (orientation: landscape) and (max-width: 850px) and (max-height: 500px) {
        font-size: 22px;
        margin-top: 32px;
    }

    @media(max-width: 1000px) and (min-width: 720px) {
        font-size: 27px;
    }

    @media(min-width: 721px) and (max-width: 1600px) and (min-height: 701px) and (max-height: 900px) {
        font-size: 38px;
    }

    @media(min-width: 721px) and (max-width: 1286px) and (min-height: 700px) {
        font-size: 40px;
    }

    @media(max-width: 2600px)and (min-width: 1287px) and (min-width: 2000px) {
        font-size: 70px;
    }

    @media(min-width: 2601px) and (min-height: 2100px) {
        font-size: 5vh;
    }
}

br {
    @media(max-width: 1000px) {
        display: none;
    }
}
</style>