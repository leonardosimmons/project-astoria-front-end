import { NextApiRequest, NextApiResponse } from 'next';
import { MainProductPageStaticData } from '../../../utils/types';

export default function mensPageData(_: NextApiRequest, res: NextApiResponse<MainProductPageStaticData>)
{
  res.status(200).json
  (
    {
      header: {
        heading: 'MEN\'S',
        video: '/videos/men/ManWalkingInCity01.mp4'
      },
      promoCard: 
      [
        {
          id: '543216789',
          src: '/images/men/MaleModel01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'COMPLETE READY-TO-WEAR',
          btn: {
            text: 'DISCOVER MORE',
            link: '/product/ready-to-wear',
            classes: 'btn-activeFocus'
          }
        },
        {
          id: '987654321',
          src: '/images/products/men/footwear/Shoes01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'AIR LIFT 97\'s',
          btn: {
            text: 'DISCOVER MORE',
            link: '/product/air-lift-97',
            classes: 'btn-activeFocus'
          }
        },
        {
          id: '123456789',
          src: '/images/products/men/pants/DenimPants01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'AMERICA DENIM',
          btn: {
            text: 'DISCOVER MORE',
            link: '/product/american-denim',
            classes: 'btn-activeFocus'
          }
        },
        {
          id: '678954321',
          src: '/images/products/mx/Shirt01.jpg',
          alt: 'male model',
          objectFit: 'contain',
          heading: 'KASHMIR EVERDAY TEE',
          btn: {
            text: 'DISCOVER MORE',
            link: '/product/kashmir-everyday-tee',
            classes: 'btn-activeFocus'
          }
        },
      ],
      promoBanner: {
        bgImage: '/images/other/ShirtAndShoes01.jpg',
        heading: 'WHAT\'S NEW',
        btn: {
          text: 'SHOP NOW',
          link: '/new'
        }
      }
    }
  )
};