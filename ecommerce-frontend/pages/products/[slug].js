import Head from 'next/head';

import { twoDecimals } from '../../utils/format'
import { getImage, API_URL } from '../../utils/urls'

import Carousel, { CarouselItem } from "../../components/Carousel";


const Product = ({ product, cart }) => {
    return (
        <main className="slug-container">
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }

                {product.meta_description && 
                    <meta name="description" content={product.meta_description} />
                }
            </Head>

            <div className="slider-container">
                <Carousel>
                    <CarouselItem>Item1</CarouselItem>
                    <CarouselItem>Item2</CarouselItem>
                    <CarouselItem>Item3</CarouselItem>
                </Carousel>
            </div>

            <div className="info-container">
                <h2 className="heading-02 product-title">{product.brand}</h2>
                <p>{product.name}</p>
                    <img src={getImage(product.image)} />
                    <div className="product-info">
                        <h3 className="heading-03">Description</h3>
                        <p>{product.style}</p>
                        <p>{product.content}</p>
                    </div>
                <div className="order-product">
                    <div className="brand-container">
                        <p>Brand:</p>
                        <p>{product.brand}</p>
                    </div>
                    <div className="designer-container">
                        <p>Designer</p>
                        <p>{product.designer}</p>
                    </div>
                    
                    <p className="price">€{twoDecimals(product.price)}</p>
                </div>
                <button className="btn cart-button"><span>+</span>add to shopping bag</button>
            </div>
              
        </main>
    ) 
}

export async function getStaticProps({params: { slug }}) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)

    const found = await product_res.json()
    // const dataFound = await data.json()

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