import React, { useState } from 'react';
import SmartphoneItem from '../SmartphoneItem/SmartphoneItem';
import { Alert } from '@material-ui/lab';
import { data } from '../../data';

import './SmartphonesList.scss';

const SmartphonesList = () => {

    const [showSuccesAlert, setShowSuccesAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showWarningAlert, setShowWarningAlert] = useState(false);

    const addToCart = (id) => {
        const currentItems = JSON.parse(localStorage.getItem('cart'));
        if (!currentItems) {
            try {
                const cartItems = [id];
                localStorage.setItem('cart', JSON.stringify(cartItems))
                setShowSuccesAlert(true);
                setTimeout(() => setShowSuccesAlert(false), 2000)
            } catch (error) {
                setShowErrorAlert(true);
                setTimeout(() => setShowErrorAlert(false), 2000)
            }

        } else {
            const candidate = currentItems.includes(id);
            if (candidate){
                setShowWarningAlert(true);
                setTimeout(() => setShowWarningAlert(false), 2000);
                return;
            }
            try {
                currentItems.push(id);
                localStorage.setItem('cart', JSON.stringify(currentItems));
                setShowSuccesAlert(true);
                setTimeout(() => setShowSuccesAlert(false), 2000);
            } catch (error) {
                setShowErrorAlert(true);
                setTimeout(() => setShowErrorAlert(false), 2000)
            }
        }

    }

    return (
        <>
            {data.length > 0 ?
                <div className="smartphones-list">
                    {showSuccesAlert && <Alert severity="success" className="succes-alert">Added Successfully</Alert>}
                    {showWarningAlert && <Alert severity="warning" className="warning-alert">Already exists in cart</Alert>}
                    {showErrorAlert && <Alert severity="error" className="error-alert">Error</Alert>}
                    {
                        data.map(item => <SmartphoneItem
                            item={item}
                            key={item.id}
                            addToCart={() => addToCart(item.id)}
                            showSuccesAlert={showSuccesAlert}
                            showErrorAlert={showErrorAlert}
                        />
                        )
                    }
                </div>
                : null}
        </>
    );
}

export default SmartphonesList;