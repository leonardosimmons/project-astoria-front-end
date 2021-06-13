
import { BackdropActions } from '../components/backdrop/state/action-types';
import { NavBarActions } from '../containers/navbar/state/action-types';
import { CarouselActions } from '../features/carousel/action-types';
import { IndexPageActions } from '../containers/pages/index/state/action-types';
import { RegistrationFormActions } from '../containers/pages/register/state/action-types';
import { ThunkAction } from '../utils/types';
import { UserActions } from './user/action-types';
import { CartActions } from './cart/action-types';
import { AppState } from './reducers';


export type AppActions = BackdropActions | CarouselActions | CartActions | NavBarActions | IndexPageActions | RegistrationFormActions | UserActions;

export type AppThunk = ThunkAction<Promise<void>, AppState, unknown, AppActions>;
