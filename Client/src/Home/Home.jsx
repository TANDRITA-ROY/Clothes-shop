import React from 'react'
import ProductCard from '../CommonComponents/ProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const cardCount = 6;
    const cardIndices = ['shirt1','shirt2','shirt3','shirt4','shirt5','shirt6']
    const navigate = useNavigate()
    const handleLaunchProduc = (data)=>{
      navigate('/product',{
        state:data
      })
    }
  return (
    <div className="p-5 m-8 md:p-8 md:m-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {
        cardIndices.map((data,index)=>(
          <div className='' onClick={()=>handleLaunchProduc({index:index+1,data:data})} >
             <ProductCard index = {index+1}/>
            </div>
           
        ))
      }
    </div>
  </div>
  
  )
}

export default Home