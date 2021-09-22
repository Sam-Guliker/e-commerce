import { useState, useEffect, useRef  } from 'react';
import {gsap, Power2 } from "gsap";

import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";
import Header from "../components/Header";
import NavigationOverlay from "../components/NavigationOverlay";

export default function Home({ products }) {
  let introAnimation = useRef(null);
  const [search, setSearch] = useState('')
  const [bag, setBag] = useState([])
  const [isActiveNavigation ,setIsActiveNavigation] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    gsap.to(introAnimation, {opacity: 0, duration: 0.6, autoAlpha: 0, ease: Power2})
  });

  return (
      <section>        
        <Meta />
        <Header isActiveNavigation={isActiveNavigation} setIsActiveNavigation={setIsActiveNavigation}/>
        <div ref={node => (introAnimation = node)} className="introduction-animation"></div>
        <NavigationOverlay isActiveNavigation={isActiveNavigation} setIsActiveNavigation={setIsActiveNavigation}/>
        <SearchInput search={search} setSearch={setSearch}/>
        <main className='main'>
          <Aside />
          <ProductList 
            search={search}
            setSearch={setSearch}
            products={products} 
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