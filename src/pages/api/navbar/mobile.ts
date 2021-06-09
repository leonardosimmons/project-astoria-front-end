
import { NextApiRequest, NextApiResponse } from 'next';
import { NavbarMobileData } from '../../../utils/types'
import { link } from '../../../utils/keys';


export default function mobileData(_: NextApiRequest, res: NextApiResponse<NavbarMobileData>): void
{
  res.status(200).json
  (
    {
      icons:
      [
        { link: link.CART, src: '/icons/svg/small/briefcase.svg', alt: 'test', width: 22.5, height: 22.5 },
        { link: link.SIGN_IN, src: '/icons/svg/small/profile.svg', alt: 'test', width: 22.5, height: 22.5  },
        //{ link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/search-glass.svg', alt: 'test', width: 22.5, height: 22.5 }
      ],
      menu:
      {
        tabs: 
        [
          { name: 'what\'s new', link: link.WHATS_NEW },
          { name: 'men', link: link.MEN },
          { name: 'women', link: link.WOMEN },
          { name: 'handbags', link: link.HANDBAGS },
          { name: 'gifts', link: link.GIFTS },
        ],
        scrollText: ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns']
      }
    }
  );
};