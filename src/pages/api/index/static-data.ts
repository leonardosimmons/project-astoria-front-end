
import { NextApiRequest, NextApiResponse } from 'next';
import { IndexStaticSectionData } from '../../../utils/types';
import { link } from '../../../utils/keys';


export default function sectionData(_: NextApiRequest, res: NextApiResponse<IndexStaticSectionData>) 
{
  res.status(200).json
  (
    {
      two: {
          headingOne: 'Men\'s Collection',
          subHeadOne: 'Epilogue',
        btn: {
          text: 'SHOP MEN\'S FASHION',
          link: link.MEN
        }
      },
      four: {
        heading: 'The Epilogue Campaign',
        textOne: 'Shot during a twelve hour live stream from the backstage, the Epilogue campaign.',
        btn: {
          text: 'DISCOVER MORE',
          link: link.WHATS_NEW,
          classes: 'btn-activeFocus'
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
          text: 'Our current line up',
          link: '/new'
        }
      }
    }
  )
};
