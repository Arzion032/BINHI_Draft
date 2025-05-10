import React, { useState } from 'react'
import api, { BASE_URL } from '../../api'
import { toast } from 'react-toastify';

const CartItem = ({item, cartItems, setCartTotal, setCartItems, setNumberCartItems}) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const itemData = {quantity:quantity, item_id:item.id}
    const itemId = {item_id:item.id}
    const [loading, setLoading] = useState(false)

    function deleteCartItem(){
        const confirmDelete = window.confirm('Are you sure you want to delete this item?')
        if (confirmDelete) {
            api.post("delete_item/",itemId)
            .then(res => {
                console.log(res.data)
                toast.success("Cart Item Deleted Successfully!")
                setCartTotal(cartItems.filter(cartItem => cartItem.id != item.id)
                .reduce((acc, curr) => acc + curr.total, 0))

                setNumberCartItems(cartItems.filter(cartItem => cartItem.id != item.id)
                .reduce((acc, curr) => acc + curr.quantity, 0))

                setCartItems(cartItems.filter(cartItem => cartItem.id != item.id))
            })
            .catch(err => {
                console.error(err.message)
            })
    }}

    function updatecartItem(){
        setLoading(true)    
        api.patch('/update_quantity/',itemData)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            toast.success("Cart Item Updated Successfully!")
            setCartTotal(cartItems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem)
            .reduce((acc, curr ) => acc + curr.total,0))

            setNumberCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? res.data.data : cartItem)
            .reduce((acc, curr) => acc + curr.quantity, 0))
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
        })
    }

    return(
        <div className="col-md-12">
            <div 
                className="cart-item d-flex align-items-center mb-3 pg-3"
                style={{ backgroundColor: '#f8f9fa', borderRadius: '8px'}}
            >
                <img 
                    src={`${BASE_URL}${item.product.image}`}
                    alt={item.product.name || "Product Image"}
                    className="img-fluid"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}
                />
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.product.name}</h5>
                    <p className="mb-0 text-muted">{`₱${item.product.price}`}</p>
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        min="1"
                        className="form-control me-3"
                        defaultValue={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value)}} 
                        style={{ width: '70px' }}/>
                </div>
                <button 
                className="btn btn-sm mx-2" 
                style = {{backgroundColor: "#4b3bcb", color:"white"}}
                onClick={updatecartItem}
                disabled={loading} >
                {loading ? "Updating" : "Update"}</button>
                <button 
                className="btn btn-danger btn-sm"
                onClick={deleteCartItem} 
                >Remove</button>
            </div>
            {/* Add more cart items*/}
        </div>
    )
}

export default CartItem