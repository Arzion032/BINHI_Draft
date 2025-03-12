import React from 'react'
import OrderHistory from './OrderHistory'
import './OrderHistoryContainer.css' // Import custom CSS for scrollbar

const OrderHistoryContainer = () => {
  return (
    <div className="row custom-scrollbar" style={{height: "300px", overflow:"auto"}}>
        <div className="col-md-12">
            <div className="card">
                <div className="card-header" style={{ backgroundColor: '#014421', color: 'white'}}>
                    <h5>Order History</h5>
                </div>
                    <OrderHistory />
                    <OrderHistory />
                    <OrderHistory />
                    <OrderHistory />

            </div>
        </div>
    </div>
  )
}

export default OrderHistoryContainer