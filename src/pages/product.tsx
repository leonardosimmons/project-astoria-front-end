import { NextRouter, useRouter } from "next/router";
import React from "react";


function Product() {
  const router: NextRouter = useRouter();

  React.useEffect(() => {
    router.push('/');
  });
};

export default Product;