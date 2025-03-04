import React from 'react'
import styles from "./HomeCard.module.css"
import {Link} from "react-router-dom"

const HomeCard = ({product}) => {
if (!product) return null; 
  return (
    <div className={`col-md-3 ${styles.col}`}>
        <Link to="/detail" className={styles.link}>
            <div className={styles.card}>
                <div className={styles.cardImgWrapper}>
                <img 
                    src={product.image || "https://via.placeholder.com/150"} // Use product image or a placeholder
                    className={styles.cardImgTop}
                    alt={product.name || "Product Image"} 
                />
                </div>
                
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
                <h6 className={styles.cardText}>{`₱${product.price}`}</h6>
            </div>
            </div>
        </Link>
    </div>
  )
}

export default HomeCard