import React from 'react'
import ProductCard from '../CommonComponents/ProductCard';

const Home = () => {
    const cardCount = 9;
    const cardIndices = Array.from({ length: cardCount }, (_, index) => index);
  return (
    <div  className="p-10 m-10">

  <div className="grid grid-cols-3 gap-4">

{
    cardIndices.map((data)=>(
        <ProductCard/>
    ))
}
  </div>
    </div>
  
  )
}

export default Home