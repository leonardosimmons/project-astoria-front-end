import React, { useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = process.env.NODE_ENV === 'production' ? 
  '' : 'http://localhost:4000/'

const Index = () => {
  console.log(__dirname);

  useEffect(() => 
  {
    const token = {
      title: 'Test Test Test',
      content: 'First Test Token'
    }

    const source = axios.CancelToken.source();
    axios.post(`${ SERVER_URL }/feed/new-post`, token)
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