import React from 'react';
import { Link } from 'react-router-dom';
import './SmartphoneItem.scss';

const SmartphoneItem = ({ item, addToCart}) => {

    return (
        <div className="smartphone-item">
            <div className="img-wrapper">
                <img src={process.env.PUBLIC_URL + '/img/' + item.image} alt={item.title} />
            </div>
            <div className="smartphone-title">
                <Link to={`/smartphones/${item.id}`} className="reset-this">
                    {item.title}
                </Link>
            </div>
            <div className="smartphone-item-footer ">
                <div className="smartphone-colors">{item.numberOfColors} Colors</div>
                <div className="smartphone-price">${item.price}</div>
            </div>
            <span className="material-icons-outlined add-to-cart-button" onClick={addToCart} >add_shopping_cart</span>
        </div>
    );
}

export default SmartphoneItem;