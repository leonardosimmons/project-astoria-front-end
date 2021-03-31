
import useSWR from 'swr';
import { BaseOptions, NavbarDesktopData } from '../../../utils/types';
import { cpnt, css } from '../../../utils/keys';

import navbarStyles from './styles/Navbar.module.scss';
import infoStyles from './styles/Information.module.scss';
import menuStyles from './styles/Menu.module.scss';
import profileStyles from './styles/Profile.module.scss';

import Logo from '../../logo';
import Container from '../../container';
import MenuTab from './components/DesktopMenuTab';
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
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { info, menu, profile } = data as NavbarDesktopData;

  return (
    <div id="desktop-navbar" className={`${ navbarStyles.wrapper } noselect`}>
      <Container main styles={ navbarStyles }>
        <div className={`${ infoStyles.wrapper }`}>
          <Container styles={ infoStyles }>
            <MenuTab 
              left
              styles={ infoStyles }
              tabs={ info } />
          </Container>
        </div>
        <div className={ menuStyles.wrapper }>
          <Container styles={ menuStyles }>
            <Logo 
              classes={'logoFont'}
              styles={ menuStyles } 
              text={ menu.logo.text }
              link={ menu.logo.link } />
            <MenuTab
              right
              column 
              uppercase
              styles={ menuStyles } 
              tabs={ menu.tabs } />
          </Container>
        </div>
        <div className={ profileStyles.wrapper }>
          <Container styles={ profileStyles }>
            <MenuTab
              left 
              styles={ profileStyles }
              tabs={ profile }/>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavBar;
