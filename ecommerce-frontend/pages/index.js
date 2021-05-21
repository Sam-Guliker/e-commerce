import Layout from "../components/layout";
import ProductList from "../components/ProductList";
import Meta from "../components/Meta";

import {API_URL} from '../utils/urls'

export default function Home({ products }) {
  return (
    <Layout>
      <Meta />
      <main className='main'>
        <ProductList products={products}/>
      </main>
    </Layout>
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