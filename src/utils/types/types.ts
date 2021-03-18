//** -------------------------  BANK  ------------------------- **//
export type DataBank = {
  navbarMenu: NavbarMenuTab[];
};

//** -----------------------  BACKDROP  ----------------------- **//
export type BackdropContext = {
  open: boolean;
}


//** -----------------------  CAROUSEL  ------------------------ **//
export type CarouselContext = {
  width: number;
  height: number;
  translate: number;
  transition: number;
  activeIndex: number;
  slideCount: number;
  dotCount: number[];
}

export type CarouselContentContext = {
  width: string;
  height: string;
  transform: string;
  transition: string;
  readonly display: string;
};


//** ------------------------  GENERAL  ------------------------ **//
export type Image = {
  src: string;
  alt: string;
}

export type Parent = {
  parent: string;
}

export type PageLink = {
  link: string;
}

//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMenuTab = {
  title: string;
} & PageLink;

export type NavbarMenu = NavbarMenuTab[];

export type NavbarContext = {
  menu: NavbarMenu
};

export type NavbarIcon = Image & PageLink;