//** -------------------------  BANK  ------------------------- **//
export type DataBank = {
  navbarMenu: NavbarMenuTab[];
};

//** -----------------------  BACKDROP  ----------------------- **//
export type BackdropContext = {
  open: boolean;
}


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