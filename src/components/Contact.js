import React from "react";
import "./Contact/ContactStyle.css";

const Contact = () => 
{
    const handleSubmit= (e)=>{
        e.preventDefault();
        alert("Submitted");
    }
    return (
            <div className="Contact">
                <form onSubmit={(event)=> handleSubmit(event)}>
                   <fieldset>
                   <legend>Nous contacter</legend>
                    <label>
                        Nom :
                    </label>
                    <input type="text" />
                    <label>
                        Email :
                    </label>
                    <input type="email" />
                    <label>
                        Sujet :
                    </label>
                    <input type="text" />
                    <label>
                        Message :
                    </label>
                    <textarea cols="70" rows="10"/>
                    </fieldset>
              
                <button className="btn">Envoyer</button>
                </form>
            </div>
    );
}

export default Contact;