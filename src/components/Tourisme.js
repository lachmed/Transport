import React, {useState} from "react";
import Destination from './Tourisme/Destination';
import Reserve from './Tourisme/Reserve'
import "./Tourisme/TourismeStyle.css";
import {Destinations} from './Tourisme/Destinations';

const Tourisme = () => 
{
    return (
            <div className="DestContainer">
                    {
                        Destinations.map((dest)=>{
                              
                            return <Destination infos={dest} />
                        })
                    }
            </div>
    );
}

export default Tourisme;