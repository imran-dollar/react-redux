import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../../../redux/Actions/productActions';
import Loader from '../../Components/Loader';
import './style.css'
const ProductDetail = () => {
    const [isLoading, setisLoading] = useState(false)
    const dispacth = useDispatch()
    const product = useSelector(state => state.selectedProduct)
    const { id, title, price, description, category, image, rating, rate, count } = product
    const { productId } = useParams();
    useEffect(() => {
        (productId !== product?.id) && FetchProduct_details()
    }, [])
    const FetchProduct_details = async () => {
        setisLoading(true)
        await axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => {
            dispacth(selectedProduct(res.data))
            setisLoading(false)
        }).catch(err => {
            console.log("err", err);
            setisLoading(false)
        })
    }

    // id: 2,
    //     title: 'Mens Casual Premium Slim Fit T-Shirts ',
    //         price: 22.3,
    //             description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    //                 category: 'men\'s clothing',
    //                     image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    //                         rating: {
    //     rate: 4.1,
    //         count: 259
    // }

    return (
        <>{isLoading && <Loader />}
            <div className="container">
                <section>
                    <div className="collection-wrapper" id={id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-sm-10 col-xs-12">
                                    <div className="product-right-slick">
                                        <div><img src={image} alt={title} className="img-fluid " /></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                        <h2>{title}</h2>
                                        <h4><del>$459.00</del><span>55% off</span></h4>
                                        <h3>${price}</h3>

                                        <div className="product-description border-product">


                                            <h6 className="product-title">quantity</h6>
                                            <div className="qty-box">
                                                <div className="input-group"><span className="input-group-prepend"><button type="button" className="btn quantity-left-minus" data-type="minus" data-field><i className="ti-angle-left" />-</button> </span>
                                                    <input type="text" name="quantity" className="form-control input-number" defaultValue={1} />
                                                    <span className="input-group-prepend"><button type="button" className="btn quantity-right-plus" data-type="plus" data-field><i className="ti-angle-right" />+</button></span></div>
                                            </div>
                                        </div>
                                        <div className="product-buttons"><a href="#" data-toggle="modal" data-target="#addtocart" className="btn btn-solid">add to cart</a> <a href="#" className="btn btn-solid">buy now</a>
                                        </div>
                                        <div className="border-product">
                                            <h6 className="product-title">product details</h6>
                                            <p>{description}</p>
                                        </div>
                                        <div className="border-product">

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ProductDetail