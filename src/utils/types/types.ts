
import { ImageLoader } from "next/image";


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


//** -------------------------  CART  ------------------------- **//
export type CartContext = {
  user: Partial<UserContext>;
  products: Array<Product>;
  summary: {
    total: number;
  }
};


//** ------------------------  GENERAL  ------------------------ **/
export type Arrow = {
  container: {
    right: string;
    left: string;
  };
  arrow: {
    transform: string;
  };
};

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
  toggle?: boolean;
  type?: string;
  uppercase?: boolean;
  value?: any;
  video?: string;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clicked?: () => void;
};  

export type BackdropContext = {
  open: boolean;
};

export type Buffer<T> = T | Array<T> | undefined;

export type Button = {
  text:  string | number | JSX.Element | HTMLElement;
  link: string;
  classes?: string;
  type?: "button" | "submit" | "reset";
  clicked?: () => void;
};

export type Combinable = string | number;

export type Data<T> = {
  message: string;
  payload: T;
};

export type DataBank = {
  navbar: NavbarContext
};

export type Direction = {
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
};

export type Dot = {
  active: boolean;
  index: number;
};

export type Grid = {
  grid: any;
  even?: boolean;
  oneXtwo?: boolean;
  twoXone?: boolean;
  blockOne?: JSX.Element | HTMLElement;
  blockTwo?: JSX.Element | HTMLElement;
  blockThree?: JSX.Element | HTMLElement;
  styles?: any;
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
  msesage: string;
  data?: any;
  payload?: any;
  value?: any;
  type?: string;
};

export type Icon = Image & Direction & PageLink;

export type Image = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  loader?: ImageLoader;
};

export type Input = {
  value: any;
  col?: boolean;
  toggle?: boolean;
  placeholder?: string;
  autoComplete?: boolean;
  label?: string | JSX.Element | HTMLElement;
  labelFront?: string | JSX.Element | HTMLElement;
  labelBack?: string | JSX.Element | HTMLElement;
  clicked?: () => void;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
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
  name?: string;
  type?: string;
};

export type NamedLink = {
  name: string;
  link: string;
};

export type SignInForm = {
  email: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent) => void;
};

export type StaticPath = {
  params: {
    id?: string;
    slug?: string;
  };
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

export type IndexPageContext = {
  firstLoad: boolean;
  introModal: boolean;
};

export type IndexPage = {
  data: IndexPageData;
  context: IndexPageContext;
};

export type IndexPageSelectors = {
  page: IndexPageContext;
  user: UserContext;
};

//** ----------------  MAIN PRODUCT PAGE  ---------------- **//
export type MainProductPageStaticData = {
  header: Header | Header[];
  promoBanner: Header | Header[];
  promoCard?: PromoCard[];
};

export type MainProductPageData = {
  nav: NavbarData;
  page: MainProductPageStaticData;
  card: ProductCard[];
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

export type NavbarMenuTabToken = NavbarMenuTab & Partial<HttpResponse> & { id?: number, type?: string };

export type NavbarMenuTab = {
  name: string;
  id?: number;
  type?: string;
} & Icon;


//** ------------------------  PRODUCT  ------------------------ **/
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

export type Product = {
  meta: {
    id: string;
    slug: string;
  };
  details: {
    type: string;
    style: string;
    name: string;
    price: number;
    desc: string;
    list: Array<string>;
  };
  preview: {
    image: Image;
    link: string;
  };
};

export type ProductCard = {
  img: Image;
  text: string;
  btn: Button;
};

export type ProductTag = {
  img: Image;
  txt: {
    heading: string;
    body: string;
  };
  btn: Button;
};

export type ProductPageData = {
  nav: NavbarData;
  product: Product;
};

export type ProductCartToken = {
  user: Partial<UserContext>;
  product: Product;
  order: {
    size: string;
    amount: number;
  }
};

//** ------------------------  PROMO  ------------------------ *//
export type PromoCard = Heading & Omit<Image, "width"|"height"> & {
  id?: Combinable;
  width?: Combinable;
  height?: Combinable;
};


//** ------------------  REGISTRATION FORM ------------------- *//
export type RegistrationFormContext = {
  username: string;
  email: string;
  age: Combinable;
  password: string;
  pwCheck: string;
  errorFlag: boolean;
};

export type RegistrationForm = {
  username: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: (e: React.ChangeEvent<HTMLInputElement>) => void;
  age: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent) => void;
};


//** ------------------------  USER ------------------------- *//
export type User = {
  name: string;
  email: string;
  image?: string;
};

export type UserContext = {
  id: Combinable;
  info: User;
  status: {
    signedIn: boolean;
  };
};