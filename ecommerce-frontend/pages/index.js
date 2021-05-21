import Layout from "../components/layout";
import ProductList from "../components/ProductList";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <Layout>
      <Meta />
      <main className='main'>
        <ProductList />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  //fetch products
  

  //return products as props
}