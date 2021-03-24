import { watchScrollPosition, removeWatchScrollPosition } from './scroll-position';

export function events() {
  watchScrollPosition();
};

export function removeEvents() {
  removeWatchScrollPosition();
};