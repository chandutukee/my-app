import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './Head';
import './Header.css';
import Product from './Product';
import './Product.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <div className='ding'>
    <Product name="Iphone" price="50000" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205642"/>
    <Product name="Apple Watch" price="20000" url="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_IN?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VHdUV3VJeUQyYW5oUlVUN3ZHS1VsL3Z4OU1ucmxYekw5aGF6a2ZZcG9hazdPN2hFakIxbjdEcTdvSm41NlVxWjY4QUVCdUdBMlBPcFgrL3RBcVB1cmY5akxmSjBzTThIaWphQnAvU3pXTzA0dzRMakJ3bWVuT3FHVGtRWkFLUmlrRUc0MFhVU2VBNmpPWGFWVllWbmRZSk43K25VYm5JaE5XMFJ6MEt5SVUydE13ZlhvMEpDZW1JRkhPN0RCZ0xWV1A4WkJQQ3BvYXllL2FBdjdLS29NZz09"/>
    <Product name="MacBook" price="80000" url="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"/>
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
