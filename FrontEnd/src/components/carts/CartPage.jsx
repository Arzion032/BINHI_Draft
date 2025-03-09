import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import api from '../../api'
const CartPage = () => {

    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    const cartCode = localStorage.getItem("cart_code")
    const [tax, setTax] = useState(5.00)
    useEffect(function() {
        api.get(`get_cart?cart_code=${cartCode}`)
        .then(res => {
            console.log(res.data)
            setCartItems(res.data.items)
            setCartTotal(res.data.sum_total)
        })
        .catch(error =>{

            console.error(error.message)
        })
    },[])

    if(cartItems.length < 1){
        return(
            <div className="alert alert-primary my-5" role="alert"> 
                You haven't added any items in your cart.
            </div>
        )
    }

    return(
        <div className="container my-3 py-3" style={{ height: "80vh", overflow: ""}}>
            <h5 className="mb-4">Shopping Cart</h5>
            <div className="row">
               <div className="col-md-8">
                    {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                    
                </div>
           
    
            <CartSummary cartTotal={cartTotal} tax={tax}/>
            </div>
        </div>
    )
}

export default CartPage