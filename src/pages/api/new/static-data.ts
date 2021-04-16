import { NextApiRequest, NextApiResponse } from 'next';
import { MainProductPageStaticData } from '../../../utils/types';
import { link } from '../../../utils/keys';


export default function whatNewPageData(_: NextApiRequest, res: NextApiResponse<MainProductPageStaticData>) 
{
  res.status(200).json
  (
    {
      header: {
        spanOne: 'WHAT\'S NEW',
        spanTwo: 'A lineup of ready-to-wear and accessories from the latest collection.',
        bgImage: '/images/other/ClothesOnRack01.jpg',
      },
      promoCard:
      [
        {
          src: '/images/women/FemaleModels01.jpg',
          alt: 'woman model',
          width: 480,
          height: 400,
          heading: 'WOMEN',
          btn: {
            text: 'SHOP ALL',
            link: link.WOMEN,
            classes: 'relative btn-activeFocus'
          },
        },
        {
          src: '/images/men/MaleModel02.jpg',
          alt: 'male model',
          width: 480,
          height: 400,
          heading: 'MEN',
          btn: {
            text: 'SHOP ALL',
            link: link.MEN,
            classes: 'relative btn-activeFocus'
          }
        }
      ],
      promoBanner: 
      [
        {
          bgImage: '/images/other/Background01.jpg',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.WHATS_NEW
          }
        },
        {
          bgImage: '/images/women/FemaleModels02.jpg',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.WOMEN
          }
        },
        {
          video: '/videos/women/WomenModel01.mp4',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.WOMEN
          }
        },
        {
          bgImage: '/images/women/WomanModel03.jpg',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.WOMEN
          }
        },
        {
          bgImage: '/images/other/ShirtAndShoes01.jpg',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.MEN
          }
        },
        {
          bgImage: '/images/kids/KidManiquen.jpg',
          heading: 'Test Promo Banner Box',
          btn: {
            text: 'SHOP NOW',
            link: link.WHATS_NEW
          }
        }
      ]
    }
  )
};
