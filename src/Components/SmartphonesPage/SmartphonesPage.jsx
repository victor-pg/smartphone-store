import React from 'react';

import './SmartphonesPage.scss';

const SmartphonesPage = () => {
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
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="price-list">
                                <li className="list-item">
                                    <input type="checkbox" name="u200" value="200" />
                                    <label htmlFor="u200">Under $200</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b200-b300" value="300" />
                                    <label htmlFor="b200-b300">$200 - $300</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b300-b400" value="400" />
                                    <label htmlFor="b300-b400">$300 - $400</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b400-b500" value="500" />
                                    <label htmlFor="b400-b500">$400 - $500</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="b500-b600" value="600" />
                                    <label htmlFor="b500-b600">$500 - $600</label>
                                </li>
                                <li className="price-calculator d-flex align-item-center space-evenly">
                                    <span>$</span> <input type="number" name="moneyFrom" className="price-calculator-input" />
                                    <span>to</span><span>$</span> <input type="number" name="moneyTo" className="price-calculator-input" />
                                    <button className="price-calculator-button f-normal">Go</button>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="os w-100 f-bold">
                            <div className="os-header d-flex space-between">
                                <span>Operating System</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="os-list">
                                <li className="list-item">
                                    <input type="checkbox" name="android" value="android" />
                                    <label htmlFor="android">Android</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="ios" value="ios" />
                                    <label htmlFor="ios">iOS</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="sim w-100 f-bold">
                            <div className="sim-header d-flex space-between">
                                <span>SIM Cards</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="sim-list">
                                <li className="list-item">
                                    <input type="checkbox" name="1" value="1" />
                                    <label htmlFor="1">Single SIM</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="2" value="2" />
                                    <label htmlFor="2">Dual SIM</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="storage w-100 f-bold">
                            <div className="storage-header d-flex space-between">
                                <span>Internal Storage</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="storage-list">
                                <li className="list-item">
                                    <input type="checkbox" name="s128" value="128" />
                                    <label htmlFor="s128">128 GB</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="s256" value="256" />
                                    <label htmlFor="s256">256 GB</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="ram w-100 f-bold">
                            <div className="ram-header d-flex space-between">
                                <span>RAM</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="ram-list">
                                <li className="list-item">
                                    <input type="checkbox" name="gb4" value="4" />
                                    <label htmlFor="gb4">4 GB</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="gb12" value="12" />
                                    <label htmlFor="gb12">12 GB</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="display w-100 f-bold">
                            <div className="display-header d-flex space-between">
                                <span>Display Size</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="display-list">
                                <li className="list-item">
                                    <input type="checkbox" name="d61" value="61" />
                                    <label htmlFor="d61">6.1"</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="d65plus" value="65" />
                                    <label htmlFor="d65plus">6.5" +</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="cpu w-100 f-bold">
                            <div className="cpu-header d-flex space-between">
                                <span>CPU Type</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="cpu-list">
                                <li className="list-item">
                                    <input type="checkbox" name="hexa" value="6" />
                                    <label htmlFor="hexa">Hexa-core</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="octa" value="8" />
                                    <label htmlFor="octa">Octa-core</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                        <div className="color w-100 f-bold">
                            <div className="color-header d-flex space-between">
                                <span>Color</span>
                                <span className="material-icons-outlined filter-arrow-size">expand_more</span>
                            </div>
                            <ul className="color-list">
                                <li className="list-item">
                                    <input type="checkbox" name="purple" value="purple" />
                                    <label htmlFor="purple">Purple</label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="phantonSilver" value="phantonSilver" />
                                    <label htmlFor="phantonSilver">Phantom Silver</label>
                                </li>
                            </ul>
                        </div>
                        <hr className="filter-hr-color w-100" />

                    </div>
                    <div className="smartphones-content"></div>
                </div>

            </div>
        </div>
    );
}

export default SmartphonesPage;