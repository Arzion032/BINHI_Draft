import styles from './OrderHistory.module.css';
const OrderHistory = () => {
  return (
    <div className="card-body">
        <div className={`order-item mb-3 ${styles.orderItem}`}>
            <div className="row">
                <div className="col-md-2">
                    <img
                        src="assets/laptop1.jpg"
                        alt="Order Item"
                        className="img-fluid"
                        style={{ borderRadius: '15px'}}
                    />
                    </div>
                    <div className="col-md-6">
                        <h6>Product Name</h6>
                        <p>Order Date: June 5, 2024</p>
                        <p>Order ID: 032</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="text-muted">Quantity: 1</h6>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="text-muted">₱350.00</h6>
                    </div>
                </div>
            </div>
        {/* Order Item mapps */}
    </div>
  )
}

export default OrderHistory