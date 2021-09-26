import { useState, useEffect, useRef  } from 'react';
import {gsap, Power2 } from "gsap";

import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";
import Header from "../components/Header";
import NavigationOverlay from "../components/NavigationOverlay";

/*

  Add cart
https://dev.to/papasanto/build-a-react-hooks-shopping-cart-with-usestate-and-useeffect-39hk
  */

export default function Home({ products }) {
  let introAnimation = useRef(null);
  const [search, setSearch] = useState('')
  const [isActiveNavigation ,setIsActiveNavigation] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
        <Header
          isActiveNavigation={isActiveNavigation} 
          setIsActiveNavigation={setIsActiveNavigation}
          cart={cart}
        />
        <div ref={node => (introAnimation = node)} className="introduction-animation"></div>
        <NavigationOverlay isActiveNavigation={isActiveNavigation} setIsActiveNavigation={setIsActiveNavigation}/>
        <SearchInput search={search} setSearch={setSearch}/>
        <main className='main'>
          <Aside />
          <ProductList 
            search={search}
            setSearch={setSearch}
            products={products} 
            cart={cart} 
            setCart={setCart}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            addToCart={addToCart}
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