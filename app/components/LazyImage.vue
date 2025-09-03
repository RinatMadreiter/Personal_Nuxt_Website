<template>
    <img class="opacity-0" :data-lazy="imgPath" ref="lazyImg" src="" />
</template>

<script setup>
import { ref } from 'vue';
import { useLazyFadeImg } from '@/composables/useLazyFadeImg';

const props = defineProps({
    imgPath: { type: String, required: true },
});

const lazyImg = ref(null);
useLazyFadeImg(lazyImg);

</script>

<style lang="css" scoped>
.opacity-0 {
    transform: translateX(50%);
    opacity: 0;
    transition: all 1500ms;

    @media(max-width: 1200px) {
        transform: translateX(15%);
    }

}

.fade {
    transform: translateX(0);
    opacity: 1;
    transition: all 1500ms;
}
</style>
