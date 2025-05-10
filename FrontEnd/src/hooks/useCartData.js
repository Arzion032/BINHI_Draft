import { useEffect, useState } from "react"
import api from "../api"

function useCartData() {
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    const cartCode = localStorage.getItem("cart_code")
    const [tax, setTax] = useState(5.00)
    const [loading, setLoading] = useState(false)

    useEffect(function() {
        setLoading(true)
            api.get(`get_cart?cart_code=${cartCode}`)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            setCartItems(res.data.items)
            setCartTotal(res.data.sum_total)
        })
        .catch(error =>{

            console.error(error.message)
            setLoading(false)
        })
    },[cartCode])


    return  {cartItems, setCartItems, cartTotal, setCartTotal, loading, tax}
}

export default useCartData