import RelatedProducts from './RelatedProducts'
import ProductPagePlaceHolder from './ProductPagePlaceHolder';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api';
import { BASE_URL } from '../../api';
import CardContainer from '../home/CardContainer';
import { toast } from 'react-toastify';

const ProductsPage = ({setNumberCartItems}) => {
    const { slug } = useParams()
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [inCart, setInCart] = useState(false)
    const cartCode = localStorage.getItem('cart_code')
    const newItem = {cart_code: cartCode, product_id:product.id}

    useEffect(function(){
        if (product.id) {
            api.get(`product_in_cart?cart_code=${cartCode}&product_id=${product.id}`)
        .then(res => {
            console.log(res.data)
            setInCart(res.data.product_in_cart)
        })
        .catch(err => {
            console.error(err.message);
        })  
        }
        
    },[cartCode, product.id])

    function add_item(){
        api.post("add_item/", newItem)
        .then(res => {
            console.log(res.data)
            toast.success("Product added to cart")
            setInCart(true)
            setNumberCartItems(curr => curr +1)
        })
        .catch(err => {
            console.error(err.message)
        })
    }

    useEffect(function(){
        setLoading(true)
        api.get(`/product_detail/${slug}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
            setSimilarProducts(res.data.similar_products)
            setLoading(false)
        })
        .catch(err => {
            console.error(err.message)
            setLoading(false)
        })
    }, [slug])

    if(loading){
        return <ProductPagePlaceHolder />
    }


  return (
    <div>
        <section className="py-3">
            <div className="container px-4 px-lg-4 my-5">
                <div className="row gx-4  gx-lg-5 align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img 
                        className="img-fluid max-height-500 object-fit-contain" 
                        src={`${BASE_URL}${product.image}`}
                        alt={product.name || "Product Image"} 
                        style={{
                            maxHeight: '500px', // Limit image height
                            maxWidth: '100%',   // Ensure it doesn't overflow container
                        }}
                    />
                </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>{`₱${product.price}`}</span>
                        </div>
                        <p className="lead">
                            {product.description}
                        </p>
                        <div className="d-flex">
                            
                            <button
                                className="btn btn-outline-dark flex-shrink-0"
                                type="button"
                                onClick={add_item}
                                disabled={inCart}
                            >
                                <i className="bi-cart-fill me-1"></i>
                                {inCart ? "Product added to cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <RelatedProducts products={similarProducts}/>
    </div>
  )
}

export default ProductsPage