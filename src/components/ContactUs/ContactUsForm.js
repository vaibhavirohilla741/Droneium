import React from 'react'
import "./ContactUsForm.css"


function ContactUsForm() {
    
    return (
       
            <div class="Contactcontainer">
                <form>
                    <label for="fname">Your Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="First Name"></input>
                    <label for="email">Your Email</label>
                    <input type="email" id='lname' name="email" placeholder="Email"></input>
                    <label for="subject">Message</label>
                    <textarea rows="7" cols="25" id="subject" name="subject" placeholder="Message"></textarea>        
                    <input type="submit" value="Send Message" ></input>
                </form>
            </div>
        
    )
}

export default ContactUsForm
