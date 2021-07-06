
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
      promoBanner: 
      [
        {
          bgImage: '/images/other/Background01.jpg',
          heading: 'GIFTS FOR HIM AND HER',
          btn: {
            text: 'SHOP NOW',
            link: link.GIFTS
          }
        },
        {
          video: '/videos/women/WomenModel01.mp4',
          heading: 'WOMEN\'S FASHION',
          btn: {
            text: 'SHOP NOW',
            link: link.WOMEN
          }
        },
        {
          bgImage: '/images/other/ShirtAndShoes01.jpg',
          heading: 'MEN\'S FASHSION',
          btn: {
            text: 'SHOP NOW',
            link: link.MEN
          }
        },
        {
          bgImage: '/images/women/FemaleModels02.jpg',
          heading: 'CLASSIC HANDBAGS',
          btn: {
            text: 'SHOP NOW',
            link: link.HANDBAGS
          }
        },
        {
          bgImage: '/images/women/WomanModel03.jpg',
          heading: 'WOMEN\'S SUMMER',
          btn: {
            text: 'SHOP NOW',
            link: link.WOMEN
          }
        },
      ]
    }
  )
};
