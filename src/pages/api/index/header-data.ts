
import { NextApiRequest, NextApiResponse } from 'next';
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
          link: '/under-construction'
        },
        video: '/videos/women/WomenWithGun01.mp4'
      },
      {
        id: 'index-main-header-two',
        heading: 'SPRING 2021',
        btn: {
          text: 'WHAT\'S NEW',
          link: '/under-construction'
        },
        video: '/videos/general/GolfModels01.mp4'
      },
      {
        id: 'index-main-header-three',
        heading: 'ASTORIA',
        textAbove: 'PROJECT',
        btn: {
          text: 'FIND OUT MORE',
          link: '/under-construction'
        }
      } 
    ]
  )
};

/* 
  one : {
    id: 'index-main-header-one',
    heading: 'EPILOGUE',
    btn: {
      text: 'SHOP NOW',
      link: '/under-construction'
    },
    video: '/videos/women/WomenWithGun01.mp4'
  },
  two: {
    id: 'index-main-header-two',
    heading: 'SPRING 2021',
    btn: {
      text: 'WHAT\'S NEW',
      link: '/under-construction'
    },
    video: '/videos/general/GolfModels01.mp4'
  },
  three : {
    id: 'index-main-header-three',
    heading: 'ASTORIA',
    textAbove: 'PROJECT',
    btn: {
      text: 'FIND OUT MORE',
      link: '/under-construction'
    }
  } 
*/