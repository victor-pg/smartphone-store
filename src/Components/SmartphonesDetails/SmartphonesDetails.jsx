import React from 'react';
import { data } from '../../data';

import './SmartphonesDetails.scss';

const SmartphonesDetails = ({ id }) => {

    const itemDetails = data.filter(item => item.id === Number(id))
    const { title, image,storage,ram,displaySize,os,numberOfSim,price } = itemDetails[0];

    return (
        <div className="smartphones-details">
            <div className="container">
                <div className="image-details">
                    <img src={process.env.PUBLIC_URL + '/img/' + image} alt={title} />
                </div>
                <div className="text-details">
                    <div className="item-details-title">{title}</div>
                    <div className="item-details item-details-storage">Storage : {storage} GB</div>
                    <div className="item-details item-details-ram">RAM : {ram} GB</div>
                    <div className="item-details item-details-display">Display size : {displaySize}"</div>
                    <div className="item-details item-details-os">Operating System : {os}</div>
                    <div className="item-details item-details-sim">Number of SIM : {numberOfSim}</div>
                    <div className="item-details item-details-price">Price : ${price}</div>
                </div>
            </div>
        </div>
    );
}

export default SmartphonesDetails;