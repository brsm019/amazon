import React, { forwardRef } from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

const Home = () => {
  const [{ searchProduct }] = useStateValue();

  console.log(searchProduct[1]);

  const products = [
    {
      title: "Oura Ring",
      id: "4020202",
      price: 29.99,
      rating: 5,
      image:
        "https://pyxis.nymag.com/v1/imgs/c01/736/96c58e4d2174f35e9b8b49103bdbcd7d73-ode-oura-ring-secondary.jpg",
    },
    {
      title: "The Spy and the Traitor",
      id: "806040",
      price: 7.99,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/914MkUIWveL.jpg",
    },
    {
      title: "Greenlight",
      id: "54008338",
      price: 12.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41A77FOb6QL._SX346_BO1,204,203,200_.jpg",
    },
    {
      title: "Amazon Echo Dot",
      id: "819832",
      price: 39.99,
      rating: 4,
      image:
        "https://brain-images-ssl.cdn.dixons.com/6/4/10215746/u_10215746.jpg",
    },
    {
      title: "Bitcoin Billionaires",
      id: "90000000",
      price: 29.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41ur-YJU6SL.jpg",
    },
    {
      title: "Amazon Fire TV",
      id: "9819732",
      price: 34.99,
      rating: 4,
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/amazon_b079qhml21_fire_tv_stick_streaming_1442262.jpg",
    },
  ];

  console.log(products[0].title);
  console.log(products[1].title);
  console.log(products[2].title);
  console.log(products[3].title);
  console.log(products[4].title);
  console.log(products[5].title);

  // const titleLowerC = titles.map((title) => title.toLowerCase());

  // const filterProducts = titleLowerC.filter((title) =>
  //   title.includes(searchProduct[1])
  // );

  // console.log(filterProducts);

  //Only show the filtered product

  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </div>

        <div className="home__row">
          {products.map((product) => (
            <Product
              title={product.title}
              id={product.id}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    );
  }
};
export default Home;
