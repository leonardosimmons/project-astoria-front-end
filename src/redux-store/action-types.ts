import { BackdropActions } from "../components/backdrop/state/action-types";
import { NavBarActions } from "../components/navbar/state/action-types";

import { CarouselActions } from '../features/carousel/action-types';


export type AppActions = BackdropActions | CarouselActions | NavBarActions;