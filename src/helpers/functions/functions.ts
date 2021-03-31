
// watches and stores current user's scroll position
export function storeScrollPosition() {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};