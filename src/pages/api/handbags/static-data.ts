
import { NextApiRequest, NextApiResponse } from 'next';
import { MainProductPageStaticData } from '../../../utils/types';
import { link } from '../../../utils/keys';

export default function handbagPageData(_: NextApiRequest, res: NextApiResponse<MainProductPageStaticData>) 
{
  res.status(200).json
  (
    {
      header: {
        heading: 'HANDBAGS',
        bgImage: '/images/other/handbag-03.jpg'
      },
      promoCard: 
      [
        {
          src: '/images/other/Handbag01.jpg',
          alt: 'female model',
          objectFit: 'contain',
          heading: 'RUBY RED 1920',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/handbags/Handbag02.jpg',
          alt: 'female model',
          objectFit: 'contain',
          heading: 'FINE CHINA',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        },
        {
          src: '/images/products/handbags/Handbag03.jpg',
          alt: 'female model',
          objectFit: 'contain',
          heading: 'WEREWOLF OF LONDON',
          btn: {
            text: 'DISCOVER MORE',
            link: '/under-construction',
            classes: 'btn-activeFocus'
          }
        }
      ],
      promoBanner: {
        video: '/videos/women/WomenFashion02.mp4',
        heading: 'WOMEN\'S FASHION',
        btn: {
          text: 'SHOP NOW',
          link: link.WOMEN
        }
      }
    }
  );
};