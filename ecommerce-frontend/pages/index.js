import Layout from "../components/layout";
import products from "../products.json"

import { getImage } from '../utils/urls'

export default function Home() {
  return (
    <Layout>
      <main className='main'>
        <ul>
          {products.map((item, key) => {
            return (
              <li key={key}>
                <img src={getImage(item.image)} />
                <h2>{item.name}</h2>
                <p>{item.meta_description}</p>
              </li>
            )
          })}
        </ul>
      </main>
    </Layout>
  )
}