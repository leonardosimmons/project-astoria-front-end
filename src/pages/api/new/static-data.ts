import { NextApiRequest, NextApiResponse } from 'next';
import { WhatsNewPageData } from '../../../utils/types/types';


export default function whatNewPageData(_: NextApiRequest, res: NextApiResponse<Partial<WhatsNewPageData>>) 
{
  res.status(200).json
  (
    {
      header: {
        spanOne: 'WHAT\'S NEW',
        spanTwo: 'A lineup of ready-to-wear and accessories from the latest collection.',
        bgImage: '/images/other/ClothesOnRack01.jpg',
      },
      promoCards:
      [
        {
          src: '/images/women/FemaleModels01.jpg',
          alt: 'woman model',
          width: 480,
          height: 400,
          heading: 'WOMEN',
          btn: {
            text: 'SHOP ALL',
            link: '/under-construction',
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
            link: '/under-construction',
            classes: 'relative btn-activeFocus'
          }
        }
      ]
    }
  )
};
