import React from 'react';
import Icon from './icon';


const Contact=()=>{
    return(
        <div className=" contact-section" id="contact">
            
            <div className="row container">
            
                <div className="col-lg-6 container">
                    <h3>Contact Us</h3>
                    <p>Message us.</p>
                    <form className="form-signin">
                        <input type="text" id="inputNamE" class="form-control" placeholder="Your name" required autofocus/>
                        <input type="text" id="inputNumber" class="form-control" placeholder="Phone Number" required autofocus/>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <textarea type="text" id="inputMessage" class="form-control" placeholder="Message" required autofocus/>
                        <button className="btn-submit">Submit</button>
                    </form>
                </div>
                <div className="col-lg-6 more-info">
                    <h3 className="more">More Information</h3>
                    <Icon 
                    icon="facebook" 
                    details="James Okunola"
                    />
                    <Icon 
                    icon="whatsapp" 
                    details="+234 703 0669 848"
                    />
                     <Icon 
                    icon="twitter" 
                    details="@kingjamesegun"
                    />
                     <Icon 
                    icon="linkedin" 
                    details="@kingjamesegun"
                    />
                    <Icon className="location-sec"
                    icon="location-pin" 
                    details="No 5, Atoja Estate, Africa, Osogbo, Osun State."
                    />
                    
                </div>
            </div>
        </div>
    )
};

export default Contact;