import {gsap, Power2 } from "gsap";
import { useRef   } from 'react';

import { getImage } from '../utils/urls'
import { twoDecimals } from '../utils/format'

import {motion} from 'framer-motion'

import Link from 'next/link'

export default function ProductList({filteredProducts, product, addToCart}) {
    let viewFrame = useRef(new Array())

    const onClickDetailView = (key) => {
        // gsap.to(viewFrame.current[key], {display: 'none'})
        console.log('hi')
    }

    /* 
        If search input is used, render the searched items.
        Else render the normal list.
    */

    return (
        <ul className="product-list">
            { filteredProducts.length > 0 ? filteredProducts.map((product, key) => {
                return (
                    <motion.li 
                        whileHover={{scale: 1.1}}
                        ref={(element) => viewFrame.current.push(element)} key={key} className="product-container">
                        <Link product={product} key={key} href={`/products/${product.slug}`}>
                            <a href="#" onClick={ () => onClickDetailView(key)}>
                                <div className="btn-round" onClick={() => addToCart(product)}>
                                    <span className="btn-round-inside">&#43;</span>
                                </div>
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
                            </a>
                        </Link>
                    </motion.li>
                    )
                }
                ) : products.map((product, key) => {
                return (
                    <motion.li ref={(element) => viewFrame.current.push(element)} key={key}  className="product-container">
                        <Link product={product} key={key} href={`/products/${product.slug}`}>
                            <a href="#" onClick={onClickDetailView}>
                            <div className="btn-round" onClick={() => addToCart(product)}>
                                    <span className="btn-round-inside">&#43;</span>
                                </div>
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
                            </a>
                        </Link>
                    </motion.li>
                )
              })}
        </ul>
    )
}