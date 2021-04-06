import { NextApiRequest, NextApiResponse } from 'next'
import { IndexPageData } from '../../../utils/types/types';


export default function sectionData(_: NextApiRequest, res: NextApiResponse<IndexPageData>) 
{
  res.status(200).json
  (
    {
      section: {
        one: 
        {
          img: {
            src: '/images/products/handbags/Handbag01.jpg',
            alt: 'handbag',
            width: 750,
            height: 750, 
          },
          txt: {
            heading: 'epilogue',
            subHeading: 'Astoria OR 1958 Mediam Tote'
          },
          btn: {
            text: 'shop totes',
            link: '/under-construction',
          },
          tag: {
            img: {
              src: '/images/products/handbags/Handbag-decal01.jpg',
              alt: 'handbag',
              width: 100,
              height: 100
            },
            txt: {
              heading: 'Handbags',
              body: 'A cult fabric is imagined through the Astoria lens with the emblematic monogram motif.',
            },
            btn: {
              text: 'shop totes',
              link: '/under-construction'
            }
          }
        }
      }
    }
  )
};