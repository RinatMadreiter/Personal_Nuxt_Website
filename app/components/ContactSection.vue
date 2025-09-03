<script setup>
useHead({
  script: [
    { src: '/js/formbricks-init.js' }
  ]
})
</script>

<template>
  <section>
    <button id="contact-me">
      Contact Me
    </button>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}

button {
  margin: 150px 0;
  padding: 32px 16px;
  width: 400px;
  height: auto;
  font-weight: 400;
  font-size: 40px;
  line-height: 14px;
  text-align: center;
  color: #2DFCD8;
  border: 2px solid #2DFCD8;
  box-sizing: border-box;
  background-color: black;
  cursor: pointer;
  animation: 225ms ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: #2DFCD8;
      color: black;
    }
  }

  @media (min-width: 720px) and (max-width: 1286px) {
    margin-bottom: 200px;
  }

  @media(min-width: 1920px) and (min-height: 1080px) {
    font-size: 2vh;
    line-height: 2.5vh;
    width: 17vh;
    height: 6vh;
    border: 0.5vh solid #2DFCD8;
  }
}
</style>