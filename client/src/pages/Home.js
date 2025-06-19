import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Home(){
    const [products,setProducts]=useState([]);
    const[searchParams,setSearchParams]=useSearchParams()

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URI+'/products?'+searchParams)
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])
    return<Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product =><ProductCard product={product}/>)}
      </div>
    </section>
    </Fragment>
}