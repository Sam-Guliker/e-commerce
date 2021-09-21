import { useState, useEffect, useRef  } from 'react';
import {gsap, Power2 } from "gsap";

import Layout from "../components/layout";
import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";

export default function Home({ products }) {
  let introAnimation = useRef(null);
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0);
  const [bag, setBag] = useState([])

  const filteredProducts = products.filter((product) => {
    if(
        product.brand.toLowerCase().includes(search) || 
        product.name.toLowerCase().includes(search) ||
        product.designer.toLowerCase().includes(search)
    ) { return product }
  })

  useEffect(() => {
    // Update the document title using the browser API
    gsap.to(introAnimation, {opacity: 0, duration: 0.6, autoAlpha: 0, ease: Power2})
  });

  return (
      <section>
        <div ref={node => (introAnimation = node)} className="introduction-animation"></div>
        <Meta />
        {bag}
        <SearchInput search={search} setSearch={setSearch}/>
        <main className='main'>
          <Aside />
          <ProductList 
            products={products} 
            filteredProducts={filteredProducts} 
            bag={bag} 
            setBag={setBag}
          />
        </main>
      </section>
  )
}

export async function getStaticProps() {
  //fetch products
  const products_res = await fetch(`${API_URL}/products/`)
  const products = await products_res.json()

  //return products as props
  return {
    props: {
      products
    }
  }
}