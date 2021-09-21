import Link from 'next/link'

import { getImage } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function ProductList({products, filteredProducts}) {
    return (
        <ul className="product-list">
            { filteredProducts.length > 0 ? filteredProducts.map((product, key) => {
                return (
                    <Link product={product} key={key} href={`/products/${product.slug}`}>
                        <a>
                            <li key={key} className="product-container">
                                <h2 className="heading-02">{product.brand}</h2>
                                <p>{product.name}</p>
                                <img src={getImage(product.image)} />
                                {product.new && (<span>{product.new}</span>) }
                                <div className="bottom-info">
                                    <div className="meta-info">
                                        <p className="designer-label">Designer</p>
                                        <p className="designer-name">{product.designer}</p>
                                    </div>
                                    <div className="price-info">
                                        <p className="price">€{twoDecimals(product.price)}</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </Link> )
                    }
                ) : products.map((product, key) => {
                return (
                    <Link product={product} key={key} href={`/products/${product.slug}`}>
                        <a>
                            <li key={key} className="product-container">
                                <h2 className="heading-02">{product.brand}</h2>
                                <p>{product.name}</p>
                                <img src={getImage(product.image)} />
                                {product.new && (<span>{product.new}</span>) }
                                <div className="bottom-info">
                                    <div className="meta-info">
                                        <p className="designer-label">Designer</p>
                                        <p className="designer-name">{product.designer}</p>
                                    </div>
                                    <div className="price-info">
                                        <p className="price">€{twoDecimals(product.price)}</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </Link>
                )
              })}
        </ul>
    )
}