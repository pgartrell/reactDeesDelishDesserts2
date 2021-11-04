import React from 'react'
import { Button } from 'reactstrap'
import { productData } from '../../Data/data'
import "../../Styles/popularProduct.css"

const PopularProducts = () => {
    return (
        <div className="productsContainer">
            <h1 className="heading"> Popular Products </h1>
            <div className="productsWrapper">
                {productData.map((product, index) => {
                    return (
                        <div className="productsCard" key={index}>
                            <img className= "productsImg"src={product.img} alt={product.alt} />
                            <div className="productsInfo">
                                <h2 className="productsTitle">{product.name}</h2>
                                <p className="productsDesc">{product.desc}</p>
                                <p className="prodcutsPrice">{product.price}</p>
                                <Button className="popularProductsButton" color="warning">{product.button}</Button>
                            </div>
                        </div>
                    )
                }
                
                )}

            </div>
            
        </div>
    )
}

export default PopularProducts
