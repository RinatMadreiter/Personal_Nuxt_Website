<template>
  <div>
    <main class="welcome-navigaion">
      <NavigationMenu />
      <WelcomeSection />
    </main>
    <SkillsSection />
    <MyworkSection />
    <AboutmeSection />
    <ContactSection />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<style lang="css">
body {
    background-color: black;
    color: white;
    margin: 0;
    overflow-x: hidden;
}

body, button, input, textarea {
  font-family: 'Inter', sans-serif;
}

html {
    scroll-behavior: smooth;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #1A1A1A;
}

::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #888;

}

::-webkit-scrollbar-thumb:hover {
    background-color: #FA2759;
    transform: scale(2);
}

.welcome-navigaion {
  height: 100vh;
}
</style>