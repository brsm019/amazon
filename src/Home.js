import React from 'react'
import './Home.css'
import Product from './Product'
import { useStateValue } from './StateProvider'

import products from './Data'

const Home = () => {
  const [{ searchProduct }] = useStateValue()

  console.log(searchProduct[1])
  console.log(Product)

  //Only show the filtered product

  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
      </div>
      <div className='home__rows'>
        {products
          ?.filter((product) => {
            console.log(searchProduct[1])
            console.log(product.title)
            if (searchProduct[1] === undefined) {
              return product
            } else if (product.title.toLowerCase().includes(searchProduct[1])) {
              return product
            } else if (searchProduct[1] === '') {
              return product
            }
          })
          .map((product) => (
            <div className='home__row'>
              <Product
                title={product.title}
                id={product.id}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
