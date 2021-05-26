import React from 'react';

import './Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts-page">
            <div className="container">
                <div className="contacts-form">
                    <div className="hello-text">Say Hello!</div>
                    <div className="contacts-form-content">

                        <div className="form-title">Name<span className="red-color">*</span></div>
                        <div className="form-row">
                            <input type="text" className="contacts-form-input" placeholder="Name" />
                            <input type="text" className="contacts-form-input" placeholder="Name of your company" />
                        </div>

                        <div className="form-title">Info<span className="red-color">*</span></div>
                        <div className="form-row">
                            <input type="text" className="contacts-form-input" placeholder="Email" />
                            <input type="text" className="contacts-form-input" placeholder="Phone" />
                            <input type="text" className="contacts-form-input" placeholder="Address" />
                        </div>

                        <div className="form-title">Your message</div>
                        <div className="form-row">
                            <textarea name="da" id="da" cols="30" rows="10" className="contact-form-textarea" placeholder="Type your request here"></textarea>
                        </div>

                        <button className="contacts-form-submit-button">Send Message</button>
                    </div>
                </div>
                <div className="contacts-footer">
                    <div className="contacts-footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10887.205538947477!2d28.8703103!3d46.9852356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cf814bcaef210a1!2sCentrul%20de%20Excelen%C8%9B%C4%83%20%C3%AEn%20Informatic%C4%83%20%C8%99i%20Tehnologii%20Informa%C8%9Bionale!5e0!3m2!1sro!2s!4v1622022252609!5m2!1sro!2s" style={{ border: 0 }} title="ceiti-map" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contacts-footer-text">
                        <div className="contacts-footer-text-content">
                            <div>Any request?</div>
                            <div>Get in Touch</div>
                            <div>AU Store</div>
                            <div>298-230 Pine Ln</div>
                            <div>Los Altos, CA 94022</div>
                            <div>Phone: 847-358-2688</div>
                            <div>Email: contact@austore.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;