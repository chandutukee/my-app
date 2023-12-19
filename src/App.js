// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[name,setname] = useState();

  let data = [
    {name:"Chandu",age:21},
    {name:"Shivling",age:20},
    {name:"Amruth",age:20}
  ]

  let product = [
    {name:"Iphone", price:50000, url:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205642"},
    {name:"Apple Watch", price:20000, url:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_IN?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VHdUV3VJeUQyYW5oUlVUN3ZHS1VsL3Z4OU1ucmxYekw5aGF6a2ZZcG9hazdPN2hFakIxbjdEcTdvSm41NlVxWjY4QUVCdUdBMlBPcFgrL3RBcVB1cmY5akxmSjBzTThIaWphQnAvU3pXTzA0dzRMakJ3bWVuT3FHVGtRWkFLUmlrRUc0MFhVU2VBNmpPWGFWVllWbmRZSk43K25VYm5JaE5XMFJ6MEt5SVUydE13ZlhvMEpDZW1JRkhPN0RCZ0xWV1A4WkJQQ3BvYXllL2FBdjdLS29NZz09"},
    {name:"MacBook", price:80000, url:"https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"}
  ]


  return (
    <div>
      <h2>Name</h2>
      <input type='text' placeholder='Enter name' onChange={(event)=>{
        setname(event.target.value)
      }}
      ></input>
      <p>{name}</p>
      <br></br><br></br>


      {
        data.map((data,index)=>{
          return (
            <div className='data' key={index}>
              <h3>{data.name}</h3>
              <h4>{data.age}</h4>
            </div>
          )
        })
      }
      <br></br><br></br><br></br>

      {
        product.map((product,index)=>{
          return (
            <div className='pro' key={index}>
              <img className="imm" alt="" src={product.url}></img>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            </div>
          )
        })
      }

      </div>
  )
    }

export default App;
