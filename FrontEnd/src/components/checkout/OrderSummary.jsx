import OrderItem from './OrderItem'
import './OrderSummary.css'
import CartItem from '../carts/CartItem';
const OrderSummary = ({cartItems, cartTotal, tax}) => {

const total = (cartTotal + tax).toFixed(2);
  return (
    <div className="col-md-8">
        <div className="card mb-8">
            <div className="card-header" style={{ backgroundColor: "#014421", color:"white"}}>
                <h5>Cart Summary</h5>
            </div>
            <div className="card-body custom-scrollbar" style={{ height:"500px", overflow:"auto"}}>
                {cartItems.map(item => <OrderItem key={item.id} item={item} />)}
                
            </div>
            <hr/>
                <div className="total d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>{`₱${total}`}</h6>
                </div>
        </div>
    </div>
  )
}

export default OrderSummary