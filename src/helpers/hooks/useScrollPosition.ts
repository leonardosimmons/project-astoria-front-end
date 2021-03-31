
import React from 'react';

export const useScrollPosition = (anchor: string, selector: string, locationY: number, classes: string) => {
  React.useEffect(() => {
    if (
      "IntersectionObserver" in window && 
      "IntersectionObserverEntry" in window && 
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(entries => {
        if(entries[0].boundingClientRect.y < locationY)
        {
          if(document.querySelector(selector) !== null)
          {
            document.querySelector(selector)!.classList.add(classes);
          }
        } else {
            if(document.querySelector(selector) !== null)
            {
              document.querySelector(selector)!.classList.remove(classes);
            }
        }
      });
    
      observer.observe(document.querySelector(anchor) as Element);
    }
  }, []);
};
