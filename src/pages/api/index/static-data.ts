import { NextApiRequest, NextApiResponse } from 'next';
import { link } from '../../../utils/keys/keys';
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
          text: {
            heading: 'epilogue',
            subHeading: 'Astoria OR 1958 mediam tote'
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
        },
        two: {
          text: {
            headingOne: 'Men\'s Collection',
            subHeadOne: 'Epilogue'
          },
          btn: {
            text: 'SHOP MEN\'S FASHION',
            link: '/under-construction'
          }
        },
        three:
        {
          img: {
            src: '/images/products/women/footwear/Sandal01.jpg',
            alt: 'women\'s sandal',
            width: 675,
            height: 675, 
          },
          text: {
            heading: 'epilogue',
            subHeading: 'Women\'s leather platform espadrille'
          },
          btn: {
            text: 'Shop Women\'s Shoes',
            link: '/under-construction',
          },
          tag: {
            img: {
              src: '/images/products/women/footwear/Sandal-decal01.jpg',
              alt: 'handbag',
              width: 100,
              height: 100
            },
            txt: {
              heading: 'Espadrilles',
              body: 'Brought to life in black leather for the Epilogue collection is the espadrille sandal with a cord wedge-shaped heel.',
            },
            btn: {
              text: 'SHOP SHOES',
              link: '/under-construction'
            }
          }
        },
        appt: {
          text: {
            heading: 'book an appointment',
            lineOne: 'your private experience waits with',
            lineTwo: 'an indoor shopping appointment'
          },
          btnOne: {
            text: 'book your private appointment',
            link: '/under-construction'
          },
          btnTwo: {
            text: 'discover our exclusive services',
            link: '/under-construction'
          }
        }
      }
    }
  )
};
