<script setup>

import LoadedLazyImage from './LoadedLazyImage.vue';

const skillsImgSrcPath = [
    { name: 'Nuxt', path: '/img/skills/nuxt.svg', alt: '' },
    { name: 'Vue', path: '/img/skills/vue.svg', alt: '' },
    { name: 'JavaScript', path: '/img/skills/js.svg', alt: '' },
    { name: 'HTML', path: '/img/skills/html.svg', alt: '' },
    { name: 'CSS', path: '/img/skills/css.svg', alt: '' },
    { name: 'Github', path: '/img/skills/github.svg', alt: '' },
    { name: 'Apps', path: '/img/skills/phone.png', alt: '' },
    { name: 'Scrum', path: '/img/skills/scrum.svg', alt: '' },
    { name: 'Business Software', path: '/img/skills/business.png', alt: '' }
];

</script>


<template>
    <section id="skills">
        <h1>My Skills</h1>
        <div class="skills-container">
            <div class="skill" v-for="(skill, index) in skillsImgSrcPath" :key="skill.name">
                {{ skill.name }}
                <LoadedLazyImage :img-path="skill.path" :alt="skill.alt" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
#skills {
    display: flex;
    flex-direction: column;
    background-color: #131111;
    justify-content: center;
    padding-right: 10vw;
    padding-left: 10vw;
    margin-right: 14vw;
    margin-left: 14vw;
    font-size: 18px;
    height: 100vh;

    @media only screen and (orientation: landscape) and (max-width: 1000px) {
        margin-right: 10vw;
        margin-left: 10vw;
    }

    @media(max-width: 1286px) {
        height: auto;
        padding-right: 0;
        padding-left: 0;
    }

    @media(max-width: 720px) {
        margin-right: 0;
        margin-left: 0;
        background-color: #000000;
        padding-right: 0;
        padding-left: 0;
    }
}


h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 90px;
    letter-spacing: 0em;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;

    @media(max-width: 1286px) {
        margin-top: 50px;
    }

    @media(max-width: 720px) {
        font-size: 36px;
        line-height: 40px;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        font-size: 5vh;
        margin-bottom: 2vh;
    }
}

.skills-container {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;


    img {
        position: absolute;
        top: -31px;
        width: 30px;
        height: 30px;
        border-radius: 32%;
        background-color: white;
        padding: 15px;
        object-fit: contain;
        border: 1px solid white;
        box-shadow: 0px 4px 4px rgba(197, 197, 197, 0.25);

        @media (max-width: 500px) {
            padding: 10px;
            top: -20px;
            width: 20px;
            height: 20px;
        }

        @media(min-width: 1920px) and (min-height: 1080px) {
            padding: 2.5vh;
            top: -5vh;
            width: 5vh;
            height: 5vh;
        }
    }


    .skill {
        position: relative;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #000000;
        background-color: #FFFFFF;
        width: 183px;
        height: 120px;
        border-radius: 8px;
        margin: 30px 19px 30px 19px;
        box-shadow: 0px 0px 3px 0px rgb(255, 255, 255);

        @media(max-width: 1286px) {
            width: 126px;
            height: 112px;
            border-radius: 8px;
            margin: 28px 18px 23px 18px;
        }

        @media(max-width: 600px) {
            width: 107.66px;
            height: 70.57px;
            margin: 30px 4px 30px 4px;
            font-size: 16px;
        }

        @media(min-width: 1920px) and (min-height: 1080px) {
            width: 23vh;
            height: 18vh;
            font-size: 3vh;
            margin: 6vh 2vh
        }
    }

    /* needed for lazyload animation */
    .skill :deep(.opacity-0) {
        transform: translateX(200%);

          @media(max-width: 720px) {
            transform: translateX(100%);
        }
    }

    .skill :deep(.fade) {
        transform: translateX(0);
    }


    .mt-16 {

        @media(max-width: 600px) {
            margin-top: 16px;
        }
    }
}
</style>