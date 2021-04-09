
import { css } from '../../utils/keys';
import { useScrollPosition } from './useScrollPosition';


export function useNavScrollConfig(): void {
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_NAVBAR, -1, 'navNotAtTop' ); // controls navbar fade on scroll
  useScrollPosition(css.TOP_PAGE_PIXEL_ANCHOR, css.DESKTOP_LOGO, -1, 'none');           // hides nav logo on scroll
};