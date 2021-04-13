import { NextApiRequest, NextApiResponse } from 'next';
import { MensPageStaticData } from '../../../utils/types';

export default function mensPageData(_: NextApiRequest, res: NextApiResponse<MensPageStaticData>)
{
  res.status(200).json
  (
    {
      header: {
        heading: 'MEN\'S',
        video: '/videos/men/ManWalkingInCity01.mp4'
      }
    }
  )
};