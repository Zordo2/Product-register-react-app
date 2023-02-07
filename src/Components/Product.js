import React from 'react'

function Product({data}) {
    // console.log(data);
  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={data.thumbnail} alt="Card image cap"/>
    <div className="card-body">
        <p className='card-title'>{data.title}</p>
        <p className='card-title'>{data.price}</p>
      <p className="card-text">{data.description}</p>
    </div>
  </div>
    
     
           
  
  )
}

export default Product