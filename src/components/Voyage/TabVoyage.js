import React from 'react';
import './TabVoyage.css';
import firebase from "../../firebase.js";


class TabVoyages extends React.Component{

        state={
            traj : this.props.trajet.depart.substr(0,3) + this.props.trajet.arrive.substr(0,3),
            details: []
        }
    

    componentDidMount()
    {

        const details = firebase.database().ref('Details');
        var trips = [];
        details.on('value', snapshot => {
                var cpt=0;
                for( var trip in Object.values(snapshot.val()))
                {
                  if( Object.values(snapshot.val())[trip].traj === this.state.traj)
                       trips[trip] = {
                            id: ++cpt,
                            infos : Object.values(snapshot.val())[trip]
                       }
                }
                this.setState({ details : trips })
        });


    }


    render()
    {
        var trips = this.state.details.map(trip => {
                return <tr className={trip.id%2 ? "odd":"even"} key={trip.id}> 
                    <td>{trip.infos.Num}</td><td>{trip.infos.depart}</td><td>{trip.infos.arrive}</td><td>{trip.infos.date}</td><td>{trip.infos.heure}</td><td>{trip.infos.prix}</td>                     

                 </tr>
        });



        return( 
            <div className="tabvoyage">
                <table border="1" cellSpacing="0" >
                    <caption>
                        Voyages Disponibles:
                    </caption>
                    <thead>
                    <tr><th>Numéro du Voyage</th><th>Départ</th><th>Arrivé</th><th>Date</th><th>Heure</th><th>Prix</th></tr>
                    </thead>
                    <tbody>
                    {  trips  }
                    </tbody>
                </table>
            </div>
        )
    }


}







export default TabVoyages;