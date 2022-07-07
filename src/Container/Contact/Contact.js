import React from 'react'
import ContactUsForm from "../../components/ContactUs/ContactUsForm"
import './Contact.css'

import ContactInfo from '../../components/ContactUs/ContactInfo'

function Contact() {
    return (
        <>
           
            <div className="Contact">
                
                <ContactInfo />
                <ContactUsForm />
            </div>

        </>
    )
}

export default Contact
