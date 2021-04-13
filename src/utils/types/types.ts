
import { ImageLoader } from "next/image";


//** ------------------------  ARROW  ------------------------- **//
export type Arrow = {
  container: {
    right: string;
    left: string;
  };
  arrow: {
    transform: string;
  };
};


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


//** --------------------------  DOT  -------------------------- **/
export type Dot = {
  active: boolean;
  index: number;
};


//** ------------------------  GENERAL  ------------------------ **/
export type BaseOptions = {
  bgImage?: string;
  classes?: string;
  column?: boolean;
  id?: string | number;
  index?: string | number;
  link?: string;
  main?: boolean;
  parent?: string;
  sub?: string;
  styles?: any;
  type?: string;
  uppercase?: boolean;
  value?: any;
  video?: string;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clicked?: () => void;
};  

export type Button = {
  text: string;
  link: string;
  classes?: string;
};

export type Direction = {
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
};

export type FeaturedProduct = {
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: {
    heading: string;
    subHeading: string;
  };
  btn: {
    text: string;
    link: string;
  },
  tag: ProductTag;
};

export type Heading = Text & {
  btn?: Button;
  textAbove?: string;
  textBelow?: string;
};

export type Header = Heading & {
  id?: string;
  video?: string;
  bgImage?: string;
  priority?: string;
};

export type HttpRequest = {
  url: string;
  type: 'GET' | 'POST' | 'DELETE' | 'PUT';
  post?: any;
  query?: string;
};

export type HttpResponse = {
  type?: string;
  value?: any;
};

export type Icon = Image & Direction & PageLink;

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
};

export type Logo = Omit<Image, "src"|"alt"|"width"|"height"> & {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  index?: number;
} & Omit<Text, "text"> & { text?: string };

export type PageLink = {
  link: string;
  text?: string;
};

export type ProductTag = {
  img: Image;
  txt: {
    heading: string;
    body: string;
  };
  btn: Button;
};

export type PromoCard = Heading & Image;

export type NamedLink = {
  name: string;
  link: string;
};

export type Text = {
  name?: string;
  title?: string;
  text?: string;
  heading?: string | JSX.Element | HTMLElement;
  mainHeading?: string | JSX.Element | HTMLElement;
  headingOne?: string | JSX.Element | HTMLElement;
  headingTwo?: string | JSX.Element | HTMLElement;
  subHeadOne?:string | JSX.Element | HTMLElement;
  subHeadTwo?: string | JSX.Element | HTMLElement;
  textOne?: string | JSX.Element | HTMLElement;
  textTwo?: string | JSX.Element | HTMLElement;
  textThree?: string | JSX.Element | HTMLElement;
  textFour?: string | JSX.Element | HTMLElement;
  textFive?: string | JSX.Element | HTMLElement;
  spanOne?: string | JSX.Element | HTMLElement;
  spanTwo?: string | JSX.Element | HTMLElement;
  spanThree?: string | JSX.Element | HTMLElement;
  spanFour?: string | JSX.Element | HTMLElement;
  spanFive?: string | JSX.Element | HTMLElement;
  mainHeadingClasses?: string;
  headingOneClasses?: string;
  headingTwoClasses?: string;
  subHeadOneClasses?: string;
  subHeadTwoClasses?: string;
  textClasses?: string;
  textOneClasses?: string;
  textTwoClasses?: string;
  textThreeClasses?: string;
  textFourClasses?: string;
  textFiveClasses?: string;
  spanOneClasses?: string;
  spanTwoClasses?: string;
  spanThreeClasses?: string;
  spanFourClasses?: string;
  spanFiveClasses?: string;
};


//** --------------------  INDEX PAGE  -------------------- **//

export type IndexSectionData = {
  one: FeaturedProduct;
  two: Header;
  three: FeaturedProduct;
  four: Header;
  appt: {
    text: {
      heading: string;
      lineOne: string;
      lineTwo: string;
    };
    btnOne: Button;
    btnTwo: Button;
  };
};

export type IndexHeaderData = Header[];

export type IndexPageData = {
  nav: NavbarData;
  section: IndexSectionData;
  header: IndexHeaderData;
};


//** --------------------  NAVIGATION BAR  -------------------- **//

export type NavbarDesktopData = {
  info: NavbarMenuTabToken[];
  menu: {
    logo: PageLink;
    tabs: NavbarMenuTabToken[];
  },
  profile: NavbarMenuTab[];
};

export type NavbarMobileData = {
  icons: Icon[];
  menu: {
    tabs: NamedLink[];
    scrollText: string[];
  }
};

export type NavbarData = {
  desktop: NavbarDesktopData;
  mobile: NavbarMobileData;
};

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

export type NavbarMenuTabToken = NavbarMenuTab & HttpResponse;

export type NavbarMenuTab = {
  name: string;
} & Icon;


//** -----------------  WHATS NEW PAGE  ----------------- **//

export type WhatsNewPageData = {
  header: Header;
  promoCards: PromoCard[];
  promoBanners: Header[];
};
