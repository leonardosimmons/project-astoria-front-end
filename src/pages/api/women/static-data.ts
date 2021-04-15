import { NextApiRequest, NextApiResponse } from 'next';
import { WomensPageStaticData } from '../../../utils/types';

export default function womensPageData(_: NextApiRequest, res: NextApiResponse<WomensPageStaticData>)
{
  res.status(200).json
  (
    {
      header: {
        heading: 'WOMEN\'S',
        video: '/videos/women/WomenWalkingInCity02.mp4'
      },
      promoBlock: 
      [
        {
          src: '/images/men/MaleModel01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'READY-TO-WEAR',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/men/footwear/Shoes01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'AIR LIFT 97\'s',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/men/pants/DenimPants01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'AMERICA DENIM',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/mx/Shirt01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'T-SHIRTS',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
      ],
      promoBanner: {
        bgImage: '/images/other/ShirtAndShoes01.jpg',
        heading: 'Test Promo Banner Box',
        btn: {
          text: 'SHOP NOW',
          link: '/under-construction'
        }
      }
    }
  )
};