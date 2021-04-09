
import { NextApiRequest, NextApiResponse } from 'next';

export default function underConstructionData(_: NextApiRequest, res: NextApiResponse) 
{
  res.status(200).json
  (
    {
      pageTitle: 'Astoria | Coming Soon',
      text: {
        heading: 'This Page Is Under Construction...',
        lineOne: 'We are currently working on a host of new features',
        lineTwo: 'This page along with many others will be available soon',
      },
      btn: {
        text: 'Back',
        link: '/'
      }
    }
  )
};