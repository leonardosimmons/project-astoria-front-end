import { NextApiRequest, NextApiResponse } from 'next';
import { WomensPageStaticData } from '../../../utils/types';
import { link } from '../../../utils/keys';

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
          src: '/images/women/FemaleModel01.jpg',
          alt: 'female model',
          objectFit: 'contain',
          heading: 'READY-TO-WEAR',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/handbags/Handbag03.jpg',
          alt: 'handbag',
          objectFit: 'contain',
          heading: 'WOLF BAG',
          btn: {
            text: 'DISCOVER MORE',
            link: link.HANDBAGS,
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/women/footwear/WomenRedHeels.jpg',
          alt: 'womens shoes',
          objectFit: 'contain',
          heading: 'CANDY APPLE RED',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/women/WomenJacketInWindow01.jpg',
          alt: 'women\'s jacket',
          objectFit: 'contain',
          heading: 'WOMEN\'S JACKETS',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/women/Scarf01.jpg',
          alt: 'women\'s jacket',
          objectFit: 'contain',
          heading: 'WOMEN\'S SCARF',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/women/Sweater01.jpg',
          alt: 'women\'s jacket',
          objectFit: 'contain',
          heading: 'CASHMIER SWEATER',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/mx/Shirt01.jpg',
          alt: 'women\'s jacket',
          objectFit: 'contain',
          heading: 'T-SHIRT',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/men/pants/DenimPants01.jpg',
          alt: 'women\'s jacket',
          objectFit: 'contain',
          heading: 'T-SHIRT',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
      ],
      promoBanner: {
        bgImage: '/images/other/Handbag02.jpg',
        heading: 'Test Promo Banner Box',
        btn: {
          text: 'SHOP NOW',
          link: link.HANDBAGS
        }
      }
    }
  )
};