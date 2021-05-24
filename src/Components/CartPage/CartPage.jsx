import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import { Alert } from '@material-ui/lab';
import { data } from '../../data';

import './CartPage.scss';


const CartPage = () => {

    const [cartIds, setCartIds] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [showSuccesAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const arrOfPrices = cartIds.map(item => data[item].price);
    const totalPrice = arrOfPrices.reduce((a, b) => a + b, 0)

    const removeFromCart = (id) => {
        const index = cartIds.indexOf(id);

        const before = cartIds.slice(0, index);
        const after = cartIds.slice(index + 1);
        const concated = before.concat(after);

        try {
            localStorage.setItem('cart', JSON.stringify(concated));
            setCartIds(prev => prev.filter(item => item !== id))
            setShowSuccessAlert(true);
            setTimeout(() => setShowSuccessAlert(false), 2000)
        } catch (error) {
            setShowErrorAlert(true);
            setTimeout(() => setShowErrorAlert(false), 2000)
        }
    }

    if (cartIds.length > 0) {
        return (
            <div className="cart-list">
                {showSuccesAlert && <Alert severity="success" className="succes-alert">Removed Successfully</Alert>}
                {showErrorAlert && <Alert severity="error" className="error-alert">Error</Alert>}
                <div className="container">
                    <div className="total-price">Total price : <strong>${totalPrice}</strong></div>
                </div>
                <div className="container cart-list-content">
                    {
                        cartIds.map(item => <CartItem item={data[item]} key={item} removeFromCart={() => removeFromCart(item)} />)
                    }
                </div>
            </div>
        );
    } else {
        return <h3 className="empty-cart-message">Empty</h3>
    }
}

export default CartPage;