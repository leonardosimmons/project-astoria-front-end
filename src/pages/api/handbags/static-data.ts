
import { NextApiRequest, NextApiResponse } from 'next';
import { HandbagPageStaticData } from '../../../utils/types';
import { link } from '../../../utils/keys';

export default function handbagPageData(_: NextApiRequest, res: NextApiResponse<HandbagPageStaticData>) 
{
  res.status(200).json
  (
    {
      header: {
        heading: 'HANDBAGS'
      }
    }
  );
};