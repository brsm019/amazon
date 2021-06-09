import React, { forwardRef } from 'react'
import './Home.css'
import Product from './Product'
import { useStateValue } from './StateProvider'

const Home = () => {
  const [{ searchProduct }] = useStateValue()

  console.log(searchProduct[1])

  const titles = [
    'Oura Ring',
    'The Spy and the Traitor',
    'Greenlight',
    'Amazon Echo Dot',
    'Bitcoin Billionaires',
    'Amazon Fire TV',
  ]

  const titleLowerC = titles.map((title) => title.toLowerCase())

  const filterProducts = titleLowerC.filter((title) =>
    title.includes(searchProduct[1])
  )

  console.log(filterProducts)

  //Only show the filtered product

  // eslint-disable-next-line no-lone-blocks
  {
    if (searchProduct[1] === undefined) {
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
              title={titles[0]}
              price={29.99}
              rating={5}
              image='https://pyxis.nymag.com/v1/imgs/c01/736/96c58e4d2174f35e9b8b49103bdbcd7d73-ode-oura-ring-secondary.jpg'
            />
            <Product
              id='806040'
              title={titles[1]}
              price={7.99}
              rating={4}
              image='https://images-na.ssl-images-amazon.com/images/I/914MkUIWveL.jpg'
            />
          </div>
          <div className='home__row'>
            <Product
              id='54008338'
              title={titles[2]}
              price={12.99}
              rating={4}
              image='https://images-na.ssl-images-amazon.com/images/I/41A77FOb6QL._SX346_BO1,204,203,200_.jpg'
            />
            <Product
              id='819832'
              title={titles[3]}
              price={39.99}
              rating={4}
              image='https://brain-images-ssl.cdn.dixons.com/6/4/10215746/u_10215746.jpg'
            />
            <Product
              title={titles[4]}
              price={29.99}
              rating={4}
              image='https://m.media-amazon.com/images/I/41ur-YJU6SL.jpg'
            />
          </div>
          <div className='home__row'>
            <Product
              id='9819732'
              title={titles[5]}
              price={34.99}
              rating={4}
              image='https://www.bhphotovideo.com/images/images2500x2500/amazon_b079qhml21_fire_tv_stick_streaming_1442262.jpg'
            />
          </div>
        </div>
      )
    } else {
      switch (filterProducts[0]) {
        case 'oura ring':
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
                  title={titles[0]}
                  price={29.99}
                  rating={5}
                  image='https://pyxis.nymag.com/v1/imgs/c01/736/96c58e4d2174f35e9b8b49103bdbcd7d73-ode-oura-ring-secondary.jpg'
                />
              </div>
            </div>
          )

        case 'the spy and the traitor':
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
                  id='806040'
                  title={titles[1]}
                  price={7.99}
                  rating={4}
                  image='https://images-na.ssl-images-amazon.com/images/I/914MkUIWveL.jpg'
                />
              </div>
            </div>
          )
        case 'greenlight':
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
                  id='54008338'
                  title={titles[2]}
                  price={12.99}
                  rating={4}
                  image='https://images-na.ssl-images-amazon.com/images/I/41A77FOb6QL._SX346_BO1,204,203,200_.jpg'
                />
              </div>
            </div>
          )
        case 'amazon echo dot':
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
                  id='819832'
                  title={titles[3]}
                  price={39.99}
                  rating={4}
                  image='https://brain-images-ssl.cdn.dixons.com/6/4/10215746/u_10215746.jpg'
                />
              </div>
            </div>
          )
        case 'bitcoin billionaires':
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
                  title={titles[4]}
                  price={29.99}
                  rating={4}
                  image='https://m.media-amazon.com/images/I/41ur-YJU6SL.jpg'
                />
              </div>
            </div>
          )
        case 'amazon fire tv':
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
                  id='9819732'
                  title={titles[5]}
                  price={34.99}
                  rating={4}
                  image='https://www.bhphotovideo.com/images/images2500x2500/amazon_b079qhml21_fire_tv_stick_streaming_1442262.jpg'
                />
              </div>
            </div>
          )
        default:
          return ''
      }
    }
  }
}

export default Home
