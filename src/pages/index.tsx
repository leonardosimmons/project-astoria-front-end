import React, { useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = process.env.NODE_ENV === 'production' ? 
  '' : 'http://localhost:4000/'

const Index = () => {

  useEffect(() => 
  {

    const source = axios.CancelToken.source();
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch(e => console.log(e));

    return () => {
      source.cancel();
    }
  }, []);

  return (
    <div className="text-yellow-700">Hello World</div>
  )
};

export default Index;