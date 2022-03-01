import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setProducts } from '../../../redux/Actions/productActions'
import Loader from '../../Components/Loader'
import Product from '../Product'

const ProductList = () => {
    const [isLoading, setisLoading] = useState(false)

    const Products = useSelector((state) => state.allProducts.products)
    const dispacth = useDispatch()
    useEffect(() => {
        (Products.lenght <= 0) && fecthProducts()
    }, [])

    const fecthProducts = async () => {
        setisLoading(true)
        let url = 'https://fakestoreapi.com/products'
        await axios.get(url).then((res) => {
            dispacth(setProducts(res.data))
            setisLoading(false)

        }).catch((err) => {
            console.log("err", err);
            setisLoading(false)
        })
    }
    return (
        <>{isLoading && <Loader />}
            <div className="container 
             d-flex flex-row
             justify-content-between
             flex-wrap ">
                <Product />
            </div>
        </>
    )
}

export default ProductList