<script setup>

</script>

<template>
    <footer id="footer">
        <ul>
            <li>

                <NuxtLink target="_blank" to="https://github.com/RinatMadreiter">
                    <img loading="lazy" class="invert-color" src="/img/footer/github-white.png" alt="Github Logo"> </img>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink target="_blank" to="https://www.linkedin.com/in/rinat-madreiter">
                    <img loading="lazy" src="/img/footer/linkedin.svg" alt="Linkedin Logo"> </img>
                </NuxtLink>
            </li>
            <li>
                <span>Built with
                    <NuxtLink target="_blank" to="https://nuxt.com/">
                        <img loading="lazy" src="/img/footer/SkillIconsNuxtjsDark.svg" alt="Nuxt Logo"></img>
                    </NuxtLink>
                </span>
            </li>
        </ul>
        <div>
            <NuxtLink target="_blank" to="https://icons8.com/icon/b5jYDydwYBxs/smartphone">Smartphone and </NuxtLink>
            <NuxtLink target="_blank" to="https://icons8.com/icon/yF8MMlVM1HOP/software">Software </NuxtLink>
            <NuxtLink target="_blank" to="https://icons8.com">icons by Icons8</NuxtLink>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131111;
    height: auto;
    padding: 12px 0;
}

li {
    list-style: none;
}

ul {
    display: flex;
    justify-content: space-evenly;
    padding-top: 16px;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    width: 100%;
}

div {

    a {
        margin-top: 10px;
        margin-left: 0;
        margin-right: 0;
        color: #515050;
        font-size: 8px;
        text-decoration: none;

        @media(max-width: 720px) {
            margin-top: 50px;
        }
    }
}

img {
    transition: transform 200ms ease-in-out;
    width: 34px;
    height: 34px;

    @media (hover: hover) {
        &:hover {
            transform: scale(1.5);
        }
    }


    @media(max-width: 720px) {
        width: 30px;
        height: 30px;
    }

    @media(min-width: 1920px) and (min-height: 1080px) {
        height: 5vh;
        width: 5vh;
    }
}

span {
    @media(max-width: 570px) {
        margin-right: 52px;
    }
}
</style>