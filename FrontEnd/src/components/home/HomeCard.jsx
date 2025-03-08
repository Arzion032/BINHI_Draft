import React from 'react'
import styles from "./HomeCard.module.css"
import {Link} from "react-router-dom"
import { BASE_URL } from '../../api';

const HomeCard = ({product}) => {
if (!product) return null; 
  return (
    <div className={`col-md-3 ${styles.col}`}>
        <Link to={`/products/${product.slug}`} className={styles.link}>
            <div className={styles.card}>
                <div className={styles.cardImgWrapper}>
                <img 
                    src={`${BASE_URL}${product.image}`}  // Use product image or a placeholder
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