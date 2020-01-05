import React from "react"
import newsletterBackground from "../images/newsletter-background.jpg"

function Newsletter() {
    return (
        <div className="newsletter-container" style={{backgroundImage: `url(${newsletterBackground})`}}>
            <div className="title-newsletter">
                <h1>Join our Newsletter!</h1>
            </div>
            <div className="form-newsletter-container">
                <div className="input-newsletter">
                <input placeholder="Enter your email"/>
                </div>
                <div className="button-newsletter">
                <button>Subscribe<span/></button>
                </div>
                
                
            </div>

        </div>
    )
}

export default Newsletter