import React from "react";
    const Destination = (props) => {
            const {city,image,title,description,hotel,food,car,duration}=props.infos;

        return(
                    <div className="DestOut" >
                            <img src={image}/>
                            <h1>
                                {city}
                            </h1>
                            <h5>
                                {title}
                            </h5>
                            <p>
                                {description}
                            </p>
                            <ul className="prices">
                                <li>
                                    Hôtel: {hotel}
                                </li>
                                <li>
                                    Repas: {food}
                                </li>
                                <li>
                                    Voiture (optionel): {car}
                                </li>
                            </ul>

                            <span className="duration">
                                Duration: {duration}
                            </span>
                    </div>
        )}


export default Destination;