
import { NextApiRequest, NextApiResponse } from 'next';
import { NavbarDesktopData } from '../../../utils/types';
import { link } from '../../../utils/keys';

export default function desktopData(_: NextApiRequest, res: NextApiResponse<NavbarDesktopData>): void
{
  res.status(200).json
  (
    {
      info: 
      [
        // {  name: 'United States', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/location.svg', alt: 'location', width: 10, height: 10 },
        // {  name: 'English', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/empty.svg', alt: '', width: 10, height: 10 },
        {  name: '+1.877.546.9043', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/phone.svg', alt: 'location', width: 10, height: 10 },
      ],
      menu: 
      {
        logo: { text: 'ASTORIA', link: '/' },
        tabs: 
        [
          { name: 'what\'s new', link: link.WHATS_NEW, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          { name: 'men', link: link.MEN, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          { name: 'women', link: link.WOMEN, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          //{ name: 'mx', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          { name: 'handbags', link: link.HANDBAGS, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          { name: 'gifts', link: link.GIFTS, src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
        ]
      },
      profile:
      [
        {  name: 'Cart', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/shopping-bag.svg', alt: 'shopping car', width: 10, height: 10 },
        { name: 'Sign In', link: link.SIGN_IN, src: '/icons/svg/user.svg', alt: 'shopping car', width: 10, height: 10 },
        { name: 'Blog', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/blog.svg', alt: 'shopping car', width: 10, height: 10 },
      ]
    }
  );
};
