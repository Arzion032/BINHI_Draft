import {useState, useEffect, React} from 'react'
import CardContainer from './CardContainer';
import Header from './Header';
import api from '../../api';

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    api
    .get("products")
    .then((res) => {
      console.log(res.data);
      setProducts(res.data);
    })
    .catch(err => { 
      console.log(err.message)
    });
  },[]);

  return (
    <>
    <Header />
    <CardContainer products={products}/>
    </>
  )
}

export default HomePage