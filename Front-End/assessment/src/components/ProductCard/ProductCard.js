import React, { useEffect, useState } from 'react'

export default function ProductCard({element}) {
    const [product, setProduct] = useState("");

    useEffect(()=>{
        setProduct(element)
    },[])
  return (
    <div style={{margin: "30px", border: "1px solid black"}}>
        <div>ProductCard</div>
        <div>{product}</div>
    </div>
  )
}
