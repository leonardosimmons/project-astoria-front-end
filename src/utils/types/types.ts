import { ImageLoader } from "next/image";

//** -------------------------  BANK  ------------------------- **//
export type DataBank = {
  navbar: NavbarContext
};


//** -----------------------  BACKDROP  ----------------------- **//
export type BackdropContext = {
  open: boolean;
};


//** -----------------------  CAROUSEL  ------------------------ **//
export type CarouselContext = {
  width: number;
  height: number;
  translate: number;
  transition: number;
  activeIndex: number;
  slideCount: number;
  dotCount: number[];
};

export type CarouselContentContext = {
  width: string;
  height: string;
  transform: string;
  transition: string;
  readonly display: string;
};


//** ------------------------  GENERAL  ------------------------ **/
export type Icon = Image | Text;

export type Image = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined;
  loader?: ImageLoader;
  classes?: string;
  link?: string;
};

export type PageLink = {
  link: string;
};

export type Parent = {
  parent: string;
};

export type NamedLink = {
  name: string;
  link: string;
};

export type Text = {
  text: string;
  link?: string;
  classes?: string;
};


//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMobileMenu = {
  tabs: NamedLink[];
  scrollText: string[];
};

export type NavbarDesktopMenu = {
  tabs: NamedLink[];
};

export type NavbarIcon = Image & PageLink;

export type NavbarContext = {
  menu: NavbarDesktopMenu | NavbarMobileMenu 
};
