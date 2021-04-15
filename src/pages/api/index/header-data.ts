
import { NextApiRequest, NextApiResponse } from 'next';
import { link } from '../../../utils/keys';
import { IndexHeaderData } from '../../../utils/types';


export default function headerData(_: NextApiRequest, res: NextApiResponse<IndexHeaderData>) 
{
  res.status(200).json
  (
    [
      {
        id: 'index-main-header-one',
        heading: 'EPILOGUE',
        btn: {
          text: 'SHOP NOW',
          link: link.WHATS_NEW
        },
        video: '/videos/women/WomenWithGun01.mp4'
      },
      {
        id: 'index-main-header-two',
        heading: 'SPRING 2021',
        btn: {
          text: 'WHAT\'S NEW',
          link: link.WHATS_NEW
        },
        video: '/videos/general/GolfModels01.mp4'
      },
      {
        id: 'index-main-header-three',
        heading: 'ASTORIA',
        textAbove: 'PROJECT',
        btn: {
          text: 'FIND OUT MORE',
          link: link.WHATS_NEW
        }
      } 
    ]
  )
};
