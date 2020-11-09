import React, {useState, useRef, useEffect} from "react";

import ColisForm from "./Colis/ColisForm";
import FormsData from "./Colis/FormsData";

    const Colis = () => {


        var keygen=0;

        return(
                <div className="Colis">
                        <ColisForm key={keygen++} elmts={FormsData[0]} />
                        <ColisForm key={keygen++} elmts={FormsData[1]} />
                        <ColisForm key={keygen++} elmts={FormsData[2]} />
                </div>
        );
    }



export default Colis;