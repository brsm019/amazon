import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
      </div>

      <div className='home__row'>
        <Product
          id='4020202'
          title='The Lean Startup'
          price={29.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
        <Product
          id='806040'
          title='Spy and the Traitor'
          price={29.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='54008338'
          title='Greenlight'
          price={29.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
        <Product
          title='The Lean Startup'
          price={29.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
        <Product
          id='819832'
          title='The Lean Startup'
          price={29.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='9819732'
          title='The Lean Startup'
          price={29.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
