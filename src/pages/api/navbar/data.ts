
import { NextApiRequest, NextApiResponse } from 'next'
import { NavbarData } from '../../../utils/types/types';
import { link } from '../../../utils/keys/keys';


export default function navbarData(req: NextApiRequest, res: NextApiResponse<NavbarData>) 
{
  res.status(200).json
  (
    {
      desktop: 
      {
        info: 
        [
          {  name: 'United States', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/location.svg', alt: 'location', width: 10, height: 10 },
          {  name: 'English', link: link.UNDER_CONSTRUCTION, src: '/icon', alt: '', width: 10, height: 10 },
          {  name: '+1.877.546.9043', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/phone.svg', alt: 'location', width: 10, height: 10 },
        ],
        menu: 
        {
          logo: { text: 'ASTORIA', link: '/' },
          tabs: 
          [
            { name: 'what\'s new', link: '/new', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
            { name: 'men', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
            { name: 'women', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
            { name: 'mx', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
            { name: 'handbags', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
            { name: 'gifts', link: '/under-construction', src: '/icons/svg/small/triangle.svg', alt: 'icon', width: 10, height: 10 },
          ]
        },
        profile:
        [
          {  name: 'Cart', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/small/shopping-bag.svg', alt: 'shopping car', width: 10, height: 10 },
          { name: 'Sign In', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/user.svg', alt: 'shopping car', width: 10, height: 10 },
          { name: 'Blog', link: link.UNDER_CONSTRUCTION, src: '/icons/svg/blog.svg', alt: 'shopping car', width: 10, height: 10 },
        ]
      },
      mobile: 
      {
        icons:
        [
          { link: '/under-construction', src: '/icons/svg/small/briefcase.svg', alt: 'test', width: 22.5, height: 22.5 },
          { link: '/under-construction', src: '/icons/svg/small/profile.svg', alt: 'test', width: 22.5, height: 22.5  },
          { link: '/under-construction', src: '/icons/svg/small/search-glass.svg', alt: 'test', width: 22.5, height: 22.5 }
        ],
        menu:
        {
          tabs: 
          [
            { name: 'what\'s new', link: '/new'},
            { name: 'handbags', link: '/under-construction'},
            { name: 'women', link: '/under-construction'},
            { name: 'men', link: '/under-construction'},
            { name: 'mx', link: '/under-construction'},
            { name: 'children', link: '/under-construction'},
            { name: 'jewelry & watches', link: '/under-construction'},
            { name: 'beauty', link: '/under-construction'},
            { name: 'gifts', link: '/under-construction'},
          ],
          scrollText: ['Save your favorite items', 'Browse a personailized list created just for you', 'View your recent orders, track shipping and manage returns']
        }
      }
    }
  )
};
