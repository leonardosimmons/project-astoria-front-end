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
