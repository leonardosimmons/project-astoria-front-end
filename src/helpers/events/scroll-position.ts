
import { storeScrollPosition } from '../functions';

const debounce = (fn: any) => {
  let frame: number;

  return (...params: any): void => {
    if(frame)
    {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      fn(...params);
    })
  };
};

export function watchScrollPosition(): void {
  document.addEventListener('scroll', debounce(storeScrollPosition), { passive: true });
};

export function removeWatchScrollPosition(): void {
  document.removeEventListener('scroll', debounce(storeScrollPosition));
};

