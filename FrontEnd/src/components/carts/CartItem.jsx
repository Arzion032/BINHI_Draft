import React from 'react'

const CartItem = () => {
  return (
    <div className="col-md-12">
        <div 
            className="cart-item d-flex align-items-center mb-3 pg-3"
            style={{ backgroundColor: '#f8f9fa', borderRadius: '8px'}}
        >
            <img 
                src="https://imgs.search.brave.com/H7s7dtpL0b462zcIYljW3esslXRnXh9mH6gfCDvPyL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/Mjc4OTMyL3Bob3Rv/L2NhcnJvdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WUZa/ZUtDb1puVTI3RmZw/VHo0X1dPemYwSEtE/UGI2VC11bWFtSUhX/cUlXTT0"

                alt="Product Image"
                className="img-fluid"
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}
            />
            <div className="ms-3 flex-grow-1">
                <h5 className="mb-1">Carrot</h5>
                <p className="mb-0 text-muted">$20.00</p>
            </div>
            <div className="d-flex align-items-center">
                <input
                    type="number"
                    className="form-control me-3"
                    defaultValue="1"
                    style={{ width: '70px' }}/>
            </div>
            <button className="btn btn-danger btn-sm">Remove</button>
        </div>
        {/* Add more cart items*/}
    </div>
  )
}

export default CartItem