
export function storeScrollPosition() {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};