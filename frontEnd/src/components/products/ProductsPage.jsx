import RelatedProducts from './RelatedProducts'
import ProductPagePlaceHolder from './ProductPagePlaceHolder';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api';
import { BASE_URL } from '../../api';

const ProductsPage = () => {
    const { slug } = useParams()
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)

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
            <div className="container px-4 px-lg my-5">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed vel justo ac lectus scelerisque posuere. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Curabitur et libero vel risus ornare consectetur.
                        </p>
                        <div className="d-flex">
                            <input
                                className="form-control text-center me-3"
                                id="inputQuantity"
                                type="num"
                                value="1"
                                style={{ maxWidth: "3rem"}}
                            />
                            <button
                                className="btn btn-outline-dark flex-shrink-0"
                                type="button"
                            >
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
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