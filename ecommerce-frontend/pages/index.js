import { useState, useEffect, useRef  } from 'react';
import {gsap, Power2 } from "gsap";

import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";
import NavigationOverlay from "../components/NavigationOverlay";
 
export default function Home({ products, cart, setCart, isActiveNavigation, setIsActiveNavigation }) {
  let introAnimation = useRef(null);
  const [search, setSearch] = useState('')
  const [cartTotal, setCartTotal] = useState(0);

      // Filtering the list with the search option.

  const filteredProducts = products.filter((product) => {
    if(
        product.brand.toLowerCase().includes(search) || 
        product.name.toLowerCase().includes(search) ||
        product.designer.toLowerCase().includes(search)
    ) { return product }
  })
      

  const totalPrice = () => {
    let totalVal = 0;

    for (let i = 0; i< cart.length; i++) {
      totalVal += cart[i].price
    }
    setCartTotal(totalVal)
  }

  const addToCart = (product) => {
    if(!cart.includes(product)) {
      setCart([...cart, product])
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    gsap.to(introAnimation, {opacity: 0, duration: 0.6, autoAlpha: 0, ease: Power2})
    totalPrice()
  }, [cart]);

  return (
      <section>        
        <Meta />
        <div ref={node => (introAnimation = node)} className="introduction-animation"></div>
        
        <NavigationOverlay isActiveNavigation={isActiveNavigation} setIsActiveNavigation={setIsActiveNavigation}/>
        <SearchInput search={search} setSearch={setSearch}/>
        <main className='main'>
          <Aside filteredProducts={filteredProducts} />
          <ProductList 
            search={search}
            setSearch={setSearch}
            products={products} 
            cart={cart} 
            setCart={setCart}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            addToCart={addToCart}
            filteredProducts={filteredProducts}
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