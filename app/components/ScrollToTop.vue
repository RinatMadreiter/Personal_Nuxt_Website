<template>
    <button v-show="visible" @click="scrollToTop" class="scroll-to-top" aria-label="Scroll to top">
        ↑
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
    visible.value = window.scrollY > 200
}

function scrollToTop() {
    const topEl = document.getElementById('top')
    if (topEl) {
        topEl.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    background: linear-gradient(135deg, #2DFCD8 0%, #FA2759 100%);
    border: none;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(250, 39, 89, 0.4);
    transition: background 0.3s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    -webkit-tap-highlight-color: transparent;
}

@media (hover: hover) {
    .scroll-to-top:hover {
        background: linear-gradient(135deg, #FA2759 0%, #2DFCD8 100%);
        transform: scale(1.1);
        box-shadow: 0 6px 15px rgba(45, 252, 216, 0.7);
    }
}

.scroll-to-top:focus {
    outline: 3px solid #2DFCD8;
    outline-offset: 3px;
}
</style>
