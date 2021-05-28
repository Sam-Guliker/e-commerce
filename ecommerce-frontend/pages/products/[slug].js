import Head from 'next/head';

import { twoDecimals } from '../../utils/format'
import { getImage, API_URL } from '../../utils/urls'

const Product = ({ product }) => {
    return (
        <main className="container">
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }

                {product.meta_description && 
                    <meta name="description" content={product.meta_description} />
                }
            </Head>
            <div className="detail-container">
                <div className="image-displayer">
                    <img src={getImage(product.image)} />
                    <div className="product-info">
                        <h3 className="heading-03">Description</h3>
                        <p>{product.style}</p>
                        <p> { product.content } </p>
                    </div>
                </div>
                <div className="order-product">
                    <h2 className="heading-02 product-title">{product.name}</h2>
                    <p>€{twoDecimals(product.price)}</p>
                    <button className="btn call-to-action">In the cart</button>
                    <button className="btn" >Save to the collection</button>
                </div>
            </div>
        </main>
    ) 
}

export async function getStaticProps({params: { slug }}) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0]
        }
    }
}

export async function getStaticPaths() {
    // retrieve all possible paths
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()


    // return them to NEXTJS  context
    return {
        paths: products.map(product => ({
            params:{slug: String(product.slug)}
        })),
        fallback: false // Tells nextjs to show a 404 if params doesn't match.
    }
}

export default Product