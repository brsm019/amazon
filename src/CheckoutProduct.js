import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

<<<<<<< HEAD
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue()
=======
const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
>>>>>>> 6b8240e4326a42734e852973af5e7a100e6c916c

    // const FunctionalArticle = forwardRef((props, ref) => (
    //   <div ref={ref}>
    //     {props.articleName}
    //   </div>
    // ));

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img
          className="checkoutProduct__image"
          src={image}
          alt="product_image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
<<<<<<< HEAD
        {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
=======
>>>>>>> 6b8240e4326a42734e852973af5e7a100e6c916c
      </div>
    );
  }
);

export default CheckoutProduct;
