import { useState } from 'react';
function Product(props){

    let [IsAvailable,setIsAvailable] = useState("yes")

    function changeitagain(){
      setIsAvailable("No")
    }


    return(
        <div className="pro">
            <img className="imm" alt="" src={props.url}></img>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{IsAvailable}</p>
            <button className='btt' onClick={changeitagain} >Click</button>
        </div>
    )
}



export default Product;