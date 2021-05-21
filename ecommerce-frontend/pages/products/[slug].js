import products from "../../products.json"
import Head from 'next/head';

import Layout from '../../components/layout'

import {twoDecimals} from '../../utils/format'
import { getImage } from '../../utils/urls'


const product = products[0]

const Product = () => {
    return (
        <Layout>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }

                {product.meta_description&& 
                    <meta name="description" content={product.meta_description} />
                }
            </Head>
            <div className="detail-container">
                <h2 className="heading-02">{product.name}</h2>
                <img src={getImage(product.image)} />
                <h3 className="heading-02">{product.name}</h3>
                <p>{product.content}</p>
                <p>{twoDecimals(product.price)}</p>
            </div>
        </Layout>
    )
}

export default Product