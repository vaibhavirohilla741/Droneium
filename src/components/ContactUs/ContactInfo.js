import React from 'react'
import "./ContactInfo.css"

function ContactInfo() {
    return (
        <div className="ContactInfo">
            <table>
                <tr>
                    <th><h4>Contact Information</h4></th>
                </tr>
                <tr>
                    <th><p><span>Address:  </span>198 West 21th Street, Suite 721 New York NY 10016</p></th>
                </tr>
                
                <tr>
                    <th><span>Phone: </span><a href='/'>+ 1235 2355 98</a></th>
                </tr>
                <tr>
                    <th>Email: <a href='/'>info@yoursite.com</a> </th>
                </tr>
                <tr>
                    <th>Website: <a href='/'>yoursite.com</a></th>
                </tr>
            </table>
        </div>
    )
}

export default ContactInfo
