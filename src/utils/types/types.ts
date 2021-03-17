//** -------------------------  BANK  ------------------------- **//
export type DataBank = {
  navbarMenu: NavbarMenuToken[];
};

//** -----------------------  BACKDROP  ----------------------- **//
export type BackdropContext = {
  open: boolean;
}


//** --------------------  NAVIGATION BAR  -------------------- **//
export type NavbarMenuToken = {
  title: string;
  link: string;
};

export type NavbarMenu = NavbarMenuToken[];

export type NavbarContext = {
  menu: NavbarMenu
};