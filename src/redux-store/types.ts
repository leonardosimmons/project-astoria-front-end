//** -------------------------  BANK  ------------------------- **//
export type DataBank = {
  navbarMenu: NavbarMenuToken[];
};


//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMenuToken = {
  title: string;
  link?: string;
};

export type NavbarMenu = NavbarMenuToken[];

export type NavbarContext = {
  menu: NavbarMenu
};