import { onMounted, onBeforeUnmount, unref } from 'vue';

export function useLazyFadeImg(targetRef) {
  let observer = null;

  onMounted(() => {
    const el = unref(targetRef);
    if (el instanceof Element) {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
            if (src) {
              img.setAttribute('src', src);
              img.classList.add('fade'); // fade-in class
              obs.unobserve(img);
            }
          }
        });
      });

      observer.observe(el);
    }
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
