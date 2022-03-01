import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'
const Product = () => {
    const product = useSelector((state) => state.allProducts.products);
    // const { id, title, price, description, category, image, rating } = product

    const RenderList = product.map(({ id, title, price, description, category, image, rating }) => {
        return (
            <>
                <div className="card  " key={id}>
                    <img alt={title} src={image} />
                    <div className="card-body m-2">
                        <div className="row">
                            <div className="card-title">
                                <h5>{title}</h5>
                                <h4 className='font-weight-bold'>${price}</h4>
                            </div>
                            <div className="mt-3 view-btn">
                                <Link to={`product/${id}`} >View Details</Link>
                            </div>

                        </div>
                        <hr />
                        <p>
                            {category}
                        </p>
                        <div className="btn btn-success">
                            <a >Buy Now</a>
                        </div>
                    </div>
                </div>
            </>
        );
    })
    return (
        <>{RenderList}</>
    )
}

export default Product