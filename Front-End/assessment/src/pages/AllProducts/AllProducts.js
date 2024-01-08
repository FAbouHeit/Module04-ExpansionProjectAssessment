import React, { useEffect, useState } from 'react'
import Styles from './AllProducts.module.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard';

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
    
  },[])
  return (
    <div>
      <div>AllProducts</div>
      <div>
      { allProducts.map((element)=>{
        return <ProductCard element={element}/> 
      })}
      </div>
    </div>
  )
}
