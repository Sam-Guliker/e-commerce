import Layout from "../components/layout";
import Meta from "../components/Meta";
import {API_URL} from '../utils/urls'

import HighlightSection from "../components/HighlightSection";
import ProductList from "../components/ProductList";
import Aside from "../components/Aside";

export default function Home({ products }) {
  return (
      <section>
        <Meta />
        <HighlightSection />
        <main className='main'>
          <Aside />
          <ProductList products={products}/>
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