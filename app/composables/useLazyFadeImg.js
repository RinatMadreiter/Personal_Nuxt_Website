import { onMounted, ref } from 'vue';

export function useLazyFadeImg() {
  const lazyImg = ref(null);

  onMounted(() => {
    if (lazyImg.value) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');
            observer.disconnect();
          }
        });
      });

      if (lazyImg.value instanceof Element) {
        observer.observe(lazyImg.value)
      }
    }
  });

  return { lazyImg };
}
