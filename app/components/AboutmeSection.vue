<template>
    <div class="about-section" id="about">
        <div class="upper-container">
            <LoadedLazyImage :imgPath="aboutMeImgSrcPath" alt="Rinat M." />
            <div class="short-description">
                <h1>About me</h1>
                <p>"I'm a goal oriented developer who loves to create web applications with proven web technologies and
                    well made user experiences!"</p>
            </div>
        </div>

        <div class="journey-section">
            <div class="journey-sub-section" v-for="item in journeyItems" :key="item.imgPath">
                <LoadedLazyImage :imgPath="item.imgPath" :alt="item.alt" />
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoadedLazyImage from './LoadedLazyImage.vue';

const aboutMeImgSrcPath = '/img/about/profile4.webp';


const journeyItems = [
    {
        imgPath: '/img/about/1.png',
        alt: '',
        title: 'MY JOURNEY BEGAN',
        description: 'as a shift supervisor in a high pressure service driven environment and then as a shipping director for a multi channeled operation.'
    },
    {
        imgPath: '/img/about/2.png',
        alt: '',
        title: 'MY FOUNDATION',
        description: 'was built while studying technical computer science, where my passion for creating solutions through coding was born. I deepened my front-end knowledge at a project-based coding academy, where my codes and projects were reviewed by experienced programmers, allowing me to fine-tune my skills from the ground up.'
    },
    {
        imgPath: '/img/about/3.png',
        alt: '',
        title: 'MY EXPERIENCE',
        description: 'In search of real-world application, I joined a digital agency with over 100 employees. For three years, I\'ve worked collaboratively on agile teams, building and delivering large-scale projects for a diverse range of clients, from concept to launch.'
    },
    {
        imgPath: '/img/about/4.png',
        alt: '',
        title: 'MY GOAL',
        description: 'is to continue delivering valuable solutions on complex projects and to lead with innovation. I am always ready for a new challenge and to make a significant impact as an experienced front-end developer.'
    }
];
</script>


<style lang="scss" scoped>
.about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 14vw;
    margin-left: 14vw;
    background-color: #131111;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    margin-top: 100px;
    padding-top: 100px;

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        margin-right: 10vw;
        margin-left: 10vw;
    }

    @media(max-width: 1286px) {
        margin-top: 100px;
        padding-top: 0;
    }

    @media(max-width: 720px) {
        margin-right: 8vw;
        margin-left: 8vw;
        background-color: #000000;
    }
}

.upper-container {

    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #FA2759;
    padding-bottom: 50px;
    width: calc(100vw - 40vw);

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        width: calc(100vw - 30vw);
    }

    @media(max-width: 1286px) {
        justify-content: space-between;
        margin-top: 50px;
    }

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        object-position: 70%;

        @media(min-width: 721px) and (max-width: 1024px) {
            margin-right: 16px;
        }

        @media(min-width: 1025px) {
            margin-right: 32px;
        }

        @media(max-width: 720px) {
            margin-right: 0;
        }

        @media(min-width: 1920px) and (min-height: 1080px) {
            width: 23vh;
            height: 23vh;
        }
    }
}

.short-description {
    display: flex;
    flex-direction: column;
}

.journey-section {
    display: flex;
    flex-direction: row;
    position: relative;

    @media(max-width: 1286px) {
        flex-direction: column;
        align-items: center;
    }
}

.journey-sub-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 48px;
    width: 25%;

    @media (max-width: 1286px) {
        width: 80%;
    }


    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #2DFCD8;
        padding: 20px;
        object-fit: fill;

        @media(min-width: 1920px) and (min-height: 1080px) {
            height: 2vh;
            width: 2vh;
        }
    }

    h4 {
        @media(min-width: 1920px) and (min-height: 1080px) {
            font-size: 2.5vh;
            margin-bottom: 2vh;
            line-height: 2.7vh;
        }
    }
}

p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 2vh;
        line-height: 2.5vh;
        margin: 5vh 0;
    }
}

h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;

    @media(max-width: 720px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 5vh;
        margin-bottom: 2vh;
    }
}
</style>