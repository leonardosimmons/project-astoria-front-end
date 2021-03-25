
import useSWR from 'swr';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../../redux-store/action-types';
import { NavbarDesktopData } from '../../../utils/types';
import { toggleBackdrop } from '../../backdrop/state/actions';
import { cpnt } from '../../../utils/keys';

import Logo from '../../logo';
import Container from '../../container';
import MenuTab from '../components/DesktopMenuTab';
import axios from 'axios';


async function fetcher(url: string): Promise<NavbarDesktopData>
{
  try
  {
    const res = await axios.get(url);
    return res.data;
  }
  catch (err) {
    console.log(err);
    throw new Error(`Error: ${ err.message }`);
  }
};
const url = 'http://localhost:3000/api/navbar/desktop';


const DesktopNavBar: React.FunctionComponent = (): JSX.Element => {
  const dispatch: Dispatch<AppActions> = useDispatch();

  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { info, menu, profile } = data as NavbarDesktopData;

  return (
    <div className={`${ cpnt.DESKTOP_NAVIGATION } noselect`}>
      <Container main parent={ cpnt.DESKTOP_NAVIGATION }>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}>
            <MenuTab 
              left
              parent={`${ cpnt.DESKTOP_NAVIGATION }__information`}
              tabs={ info } />
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__menu`} onClick={ () => { dispatch(toggleBackdrop()) }} >
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`}>
            <Logo 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              text={ menu.logo.text }
              link={ menu.logo.link } />
            <MenuTab
              right
              column 
              uppercase
              parent={`${ cpnt.DESKTOP_NAVIGATION }__menu`} 
              tabs={ menu.tabs } />
          </Container>
        </div>
        <div className={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
          <Container parent={`${ cpnt.DESKTOP_NAVIGATION }__profile`}>
            <MenuTab
              left 
              parent={`${ cpnt.DESKTOP_NAVIGATION }__profile`}
              tabs={ profile }/>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavBar;
