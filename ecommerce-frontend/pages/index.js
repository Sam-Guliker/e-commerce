import { useState } from 'react';

import Layout from "../components/layout";
import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";

export default function Home({ products }) {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) => {
    if(
        product.brand.toLowerCase().includes(search) || 
        product.name.toLowerCase().includes(search) ||
        product.designer.toLowerCase().includes(search)
    ) { return product }
  })

  return (
      <section>
        <Meta />
        <SearchInput search={search} setSearch={setSearch}/>
        <main className='main'>
          <Aside />
          <ProductList products={products} filteredProducts={filteredProducts} />
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