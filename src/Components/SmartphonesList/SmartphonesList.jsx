import React, { useState } from 'react';
import SmartphoneItem from '../SmartphoneItem/SmartphoneItem';
import { Alert } from '@material-ui/lab';
import { data } from '../../data';

import './SmartphonesList.scss';

const SmartphonesList = ({ filteredOptions }) => {

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
            if (candidate) {
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

   

    let filteredByPrice;

    if(filteredOptions.priceFrom && filteredOptions.priceTo){
        filteredByPrice = data.filter((item) => item.price <= parseInt(filteredOptions.priceTo) && item.price >= parseInt(filteredOptions.priceFrom) )
    }else{
        filteredByPrice = data.filter((item) => item.price <= parseInt(filteredOptions.price) && item.price >= parseInt(filteredOptions.price - 100) )
    }

    const filteredByOs = data.filter((item) => item.os === filteredOptions.os)
    const filteredBySim = data.filter((item) => item.numberOfSim === parseInt(filteredOptions.sim))
    const filteredByStorage = data.filter((item) => item.storage === parseInt(filteredOptions.storage))
    const filteredByRam = data.filter((item) => item.ram === parseInt(filteredOptions.ram))
    const filteredByDisplay = data.filter((item) => item.displaySize >= parseFloat(filteredOptions.display))
    const filteredByCpu = data.filter((item) => item.cpuCores === filteredOptions.cpu)
    const filteredByColor = data.filter((item) => item.color === filteredOptions.color)

    const filteredWithoutRepeat = [...filteredByPrice, ...filteredByOs, ...filteredBySim, ...filteredByStorage, ...filteredByRam, ...filteredByDisplay, ...filteredByCpu, ...filteredByColor];

    const filtered = filteredWithoutRepeat.filter((item, index) => filteredWithoutRepeat.indexOf(item) === index);


    return (
        <>
            {filtered.length > 0 ?
                <div className="smartphones-list">
                    {showSuccesAlert && <Alert severity="success" className="succes-alert">Added Successfully</Alert>}
                    {showWarningAlert && <Alert severity="warning" className="warning-alert">Already exists in cart</Alert>}
                    {showErrorAlert && <Alert severity="error" className="error-alert">Error</Alert>}
                    {
                        filtered.map(item => <SmartphoneItem
                            item={item}
                            key={item.id}
                            addToCart={() => addToCart(item.id)}
                            showSuccesAlert={showSuccesAlert}
                            showErrorAlert={showErrorAlert}
                        />
                        )
                    }
                </div>
                :
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
            }
        </>
    );
}

export default SmartphonesList;