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
      Send a message
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

  @media(max-width: 720px) {
    width: 300px;
    font-size: 30px;
  }
  
  @media(max-width: 1000px) and (min-width: 721px) {
    width: 350px;
    font-size: 35px;
  }
 

  @media (hover: hover) {
    &:hover {
      background-color: #2DFCD8;
      color: black;
    }
  }
}
</style>