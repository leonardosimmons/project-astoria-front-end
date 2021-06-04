
import { NextApiRequest, NextApiResponse } from "next";


export default function productDetails(_: NextApiRequest, res: NextApiResponse): void
{
  res.status(200).json
  (
    [
      {
        id: '100',
        name: 'Prada Bottoms',
        price: '1,250', 
        style: ' ‎660285 XKBVB 4594', 
        desc: 'Part of the House’s codes first presented during the ‘30s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century. In a new interpretation, the GG is presented as a jacquard on this cotton V-neck sweater.',
        img: '/images/products/men/pants/DenimPants01.jpg',
        list: ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ]
      },
      {
        id: '101',
        name: 'Apple Bottoms',
        price: '1,250', 
        style: ' ‎660285 XKBVB 4594', 
        desc: 'Part of the House’s codes first presented during the ‘30s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century. In a new interpretation, the GG is presented as a jacquard on this cotton V-neck sweater.',
        img: '/images/products/men/pants/DenimPants01.jpg',
        list: ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ]
      },
      {
        id: '‎102',
        name: 'Dump Trunk Jeans',
        price: '1,250', 
        style: ' ‎660285 XKBVB 4594', 
        desc: 'Part of the House’s codes first presented during the ‘30s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century. In a new interpretation, the GG is presented as a jacquard on this cotton V-neck sweater.',
        img: '/images/products/men/pants/DenimPants01.jpg',
        list: ['Placeholder One', 'Placeholder Two', 'Placeholder Three', 'Placeholder Four', 'Placeholder Five', 'Placeholder Six', 'Placeholder Seven', 'Placeholder Eight', 'Placeholder Nine', ]
      },
    ]
  );
};