import Link from 'next/link'

import { getImage } from '../utils/urls'
import { twoDecimals } from '../utils/format'

/* 
    
    1. Remove next page,
    2. Check the onclick function and make sure it adds the item to the bag.
    3. ??

*/
export default function ProductList({products, search, setSearch, cart, setCart, addToCart}) {
    
    const filteredProducts = products.filter((product) => {
        if(
            product.brand.toLowerCase().includes(search) || 
            product.name.toLowerCase().includes(search) ||
            product.designer.toLowerCase().includes(search)
        ) { return product }
      })

    const onClickDetailView = (e) => {
        e.preventDefault()
    }

    return (
        <ul className="product-list">
            { filteredProducts.length > 0 ? filteredProducts.map((product, key) => {
                return (
                    <li key={key} className="product-container">
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
                    </li>
                    )
                }
                ) : products.map((product, key) => {
                return (
                    <li key={key} className="product-container">
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
                    </li>
                )
              })}
        </ul>
    )
}