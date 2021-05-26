import React, { useState } from 'react';
import SmartphonesList from '../SmartphonesList/SmartphonesList';

import './SmartphonesPage.scss';

const SmartphonesPage = () => {

    const [showPriceList, setShowPriceList] = useState('active');
    const [showOs, setShowOs] = useState('');
    const [showSim, setShowSim] = useState('');
    const [showStorage, setShowStorage] = useState('');
    const [showRam, setShowRam] = useState('');
    const [showDisplay, setShowDisplay] = useState('');
    const [showCpu, setShowCpu] = useState('');
    const [showColor, setShowColor] = useState('');

    const [price, setPrice] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [os, setOs] = useState("");
    const [sim, setSim] = useState("");
    const [storage, setStorage] = useState("");
    const [ram, setRam] = useState("");
    const [display, setDisplay] = useState("");
    const [cpu, setCpu] = useState("");
    const [color, setColor] = useState("");

    const filteredOptions = {
        priceFrom,
        priceTo,
        price,
        os,
        sim,
        storage,
        ram,
        display,
        cpu,
        color
    }

    

    const toggleList = (e) => {
        if (e.target.classList.contains('priceList')) {
            if (showPriceList === '') setShowPriceList('active')
            if (showPriceList === 'active') setShowPriceList('')
        }

        if (e.target.classList.contains('osList')) {
            if (showOs === '') setShowOs('active')
            if (showOs === 'active') setShowOs('')
        }
        if (e.target.classList.contains('simList')) {
            if (showSim === '') setShowSim('active')
            if (showSim === 'active') setShowSim('')
        }
        if (e.target.classList.contains('storageList')) {
            if (showStorage === '') setShowStorage('active')
            if (showStorage === 'active') setShowStorage('')
        }
        if (e.target.classList.contains('ramList')) {
            if (showRam === '') setShowRam('active')
            if (showRam === 'active') setShowRam('')
        }
        if (e.target.classList.contains('displayList')) {
            if (showDisplay === '') setShowDisplay('active')
            if (showDisplay === 'active') setShowDisplay('')
        }
        if (e.target.classList.contains('cpuList')) {
            if (showCpu === '') setShowCpu('active')
            if (showCpu === 'active') setShowCpu('')
        }
        if (e.target.classList.contains('colorList')) {
            if (showColor === '') setShowColor('active')
            if (showColor === 'active') setShowColor('')
        }


    }

    const getPriceFrom=(e)=>{
        setPriceFrom(e.target.value);
    }
    const getPriceTo=(e)=>{
        setPriceTo(e.target.value);
    }
    const getPrice=(e)=>{
        if(e.target.checked) setPrice(e.target.value)
        else setPrice("");
    }
    const getOs=(e)=>{
        if(e.target.checked) setOs(e.target.value)
        else setOs("");
    }
    const getSim=(e)=>{
        if(e.target.checked) setSim(e.target.value)
        else setSim("");
    }
    const getStorage=(e)=>{
        if(e.target.checked) setStorage(e.target.value)
        else setStorage("");
    }
    const getRam=(e)=>{
        if(e.target.checked) setRam(e.target.value)
        else setRam("");
    }
    const getDisplay=(e)=>{
        if(e.target.checked) setDisplay(e.target.value)
        else setDisplay("");
    }
    const getCpu=(e)=>{
        if(e.target.checked) setCpu(e.target.value)
        else setCpu("");
    }
    const getColor=(e)=>{
        if(e.target.checked) setColor(e.target.value)
        else setColor("");
    }


    return (
        <div className="smartphones-page">
            <div className="container">
                <div className="smartphones-page-header">
                    <div>Smartphones</div>
                    <div>
                        <span>Sort By : </span>
                        <select name="da">
                            <option value="featured">Featured</option>
                        </select>
                    </div>
                </div>

                <div className="smartphones">
                    <div className="smartphones-filter">

                        <div className="manufacturer w-100 f-bold d-flex space-between">
                            <span>Manufacturer</span>
                            <select name="da" className="no-border no-outline f-bold">
                                <option value="featured"></option>
                                <option value="featured">Manufacturer</option>
                            </select>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="price w-100 f-bold">
                            <div className="price-header d-flex space-between">
                                <span>Price</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size priceList">expand_more</span>
                            </div>
                            <ul className={`price-list hidden ${showPriceList}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="u200" value="200" onChange={getPrice} />
                                    <label htmlFor="u200">Under $200</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b200-b300" value="300" onChange={getPrice}/>
                                    <label htmlFor="b200-b300">$200 - $300</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b300-b400" value="400" onChange={getPrice}/>
                                    <label htmlFor="b300-b400">$300 - $400</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b400-b500" value="500" onChange={getPrice}/>
                                    <label htmlFor="b400-b500">$400 - $500</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b500-b600" value="600" onChange={getPrice}/>
                                    <label htmlFor="b500-b600">$500 - $600</label>
                                </li>
                                <li className="price-calculator d-flex align-item-center space-evenly">
                                    <span>$</span> <input type="number" name="moneyFrom" className="price-calculator-input" onChange={getPriceFrom} />
                                    <span>to</span><span>$</span> <input type="number" name="moneyTo" onChange={getPriceTo} className="price-calculator-input" />
                                    <button className="price-calculator-button f-normal">Go</button>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="os w-100 f-bold">
                            <div className="os-header d-flex space-between">
                                <span>Operating System</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size osList">expand_more</span>
                            </div>
                            <ul className={`os-list hidden ${showOs}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="android" onChange={getOs} value="android" />
                                    <label htmlFor="android">Android</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="ios" onChange={getOs} value="ios" />
                                    <label htmlFor="ios">iOS</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="sim w-100 f-bold">
                            <div className="sim-header d-flex space-between">
                                <span>SIM Cards</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size simList">expand_more</span>
                            </div>
                            <ul className={`sim-list hidden ${showSim}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="sim1" value="1" onChange={getSim} />
                                    <label htmlFor="sim1">Single SIM</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="sim2" value="2" onChange={getSim}/>
                                    <label htmlFor="sim2">Dual SIM</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="storage w-100 f-bold">
                            <div className="storage-header d-flex space-between">
                                <span>Internal Storage</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size storageList">expand_more</span>
                            </div>
                            <ul className={`storage-list hidden ${showStorage}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="s128" value="128" onChange={getStorage}/>
                                    <label htmlFor="s128">128 GB</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="s256" value="256" onChange={getStorage} />
                                    <label htmlFor="s256">256 GB</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="ram w-100 f-bold">
                            <div className="ram-header d-flex space-between">
                                <span>RAM</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size ramList">expand_more</span>
                            </div>
                            <ul className={`ram-list hidden ${showRam}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="gb4" value="4" onChange={getRam} />
                                    <label htmlFor="gb4">4 GB</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="gb12" value="12" onChange={getRam} />
                                    <label htmlFor="gb12">12 GB</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="display w-100 f-bold">
                            <div className="display-header d-flex space-between">
                                <span>Display Size</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size displayList">expand_more</span>
                            </div>
                            <ul className={`display-list hidden ${showDisplay}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="d61" value="6.1" onChange={getDisplay} />
                                    <label htmlFor="d61">6.1"</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="d65plus" value="6.5" onChange={getDisplay}/>
                                    <label htmlFor="d65plus">6.5" +</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="cpu w-100 f-bold">
                            <div className="cpu-header d-flex space-between">
                                <span>CPU Type</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size cpuList">expand_more</span>
                            </div>
                            <ul className={`cpu-list hidden ${showCpu}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="hexa" value="Hexa-core" onChange={getCpu}/>
                                    <label htmlFor="hexa">Hexa-core</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="octa" value="Octa-core" onChange={getCpu}/>
                                    <label htmlFor="octa">Octa-core</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="color w-100 f-bold">
                            <div className="color-header d-flex space-between">
                                <span>Color</span>
                                <span onClick={toggleList} className="material-icons-outlined filter-arrow-size colorList">expand_more</span>
                            </div>
                            <ul className={`color-list hidden ${showColor}`}>
                                <li className="list-item">
                                    <input type="checkbox" name="purple" value="purple" onChange={getColor} />
                                    <label htmlFor="purple">Purple</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="phantonSilver" value="phantonSilver" onChange={getColor} />
                                    <label htmlFor="phantonSilver">Phantom Silver</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                    </div>
                    <div className="smartphones-content">
                        <SmartphonesList filteredOptions={filteredOptions} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SmartphonesPage;