import React, { useEffect, useState } from 'react'
import RequireLogin from '../auth/requireNavbar'
import Carousel from '../components/carousel/carousel'
import CategoryCarousel from '../components/carousel/categoryCarousel'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BASEURL}/product`)
        .then((response) => setProducts(response.data.data))
      setLoading(true)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true)
    }
  }
  return (
    <>
      <RequireLogin />
      <div className="container">
        <Carousel />
        <CategoryCarousel />
        <h2 className="ml-3 mt-5 font-weight-bold">New</h2>
        <p className="ml-3">You've never seen before!</p>
          <div className="row">
        {loading ? products.map((item, index) => (
            <div className="col-md-3 col-sm-6 mt-5">
              <Link to={`product/${item.id_product}`} >
                <div key={index} className="border rounded">
                  <img src={item.image_product} style={{ width: "100%" }} crossOrigin="anonymous" alt='product' />
                  <h5 className="card-title p-2">
                    {item.name_product}
                  </h5>
                  <div className="p-2">
                    <h5 className="text-danger">Rp.{item.price_product}</h5>
                    <p>{item.store_seller}</p>
                    5/5
                  </div>
                </div>
              </Link>
            </div>
        )) : <Spinner animation="border" />}
          </div>
        <section className="mt-5">
          <h2 className="font-weight-bold">Populer</h2>
          <p>Find Clothes that are you tranding recently!</p>
            <div className="row">
          {loading ? products.map((item, index) => (
              <div className="col-md-3 col-sm-6 mt-5">
                <Link to={`product/${item.id_product}`} >
                  <div key={index} className="border rounded">
                    <img src={item.image_product} style={{ width: "100%" }} crossOrigin="anonymous" alt='product' />
                    <h5 className="card-title p-2">
                      {item.name_product}
                    </h5>
                    <div className="p-2">
                      <h5 className="text-danger">Rp.{item.price_product}</h5>
                      <p>{item.store_seller}</p>
                      5/5
                    </div>
                  </div>
                </Link>
              </div>
          )) : <Spinner animation="border" />}
            </div>
        </section>
      </div>
    </>
  )
}

export default Home