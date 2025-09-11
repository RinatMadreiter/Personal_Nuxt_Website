export function useFrameBuster() {
  if (import.meta.client) {
    if (window.top !== window.self) {
      window.top.location.href = window.self.location.href;
    }
  }
}