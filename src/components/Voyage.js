import React from "react";
import "./Voyage/VoyageStyle.css";
import "../styles/Voyage.css";


// children 
import ChoixTrajet from './Voyage/ChoixTrajet'
import TabVoyage from './Voyage/TabVoyage'
import Demande from './Voyage/Demande'
import Synthese from './Voyage/Synthese'

class Voyage extends React.Component {

        state = {
                    trajet: {
                                depart: "",
                                arrive: ""
                            },
                    shouldReaload: false,
                    demande: {},
                    tripNumbers: []
                            
                }

        Keygen=0;

        getTrajet = (traj,s) => {

            this.setState(
                {
                    trajet:traj,
                }
            )

        }

        getInfos = (infos, s) =>{
            this.setState({
                demande: infos,
                shouldReaload: s
            })
    
        }
        
        reload= (f)=>
        {
            this.setState(
                {
                    shouldReaload: f
                }
            )                
        }

        
    render()
    {
       
         return (
           <div className="voyage">
                <div className="part1">

         {!this.state.shouldReaload && <ChoixTrajet key={this.Keygen++} sendTrajet={this.getTrajet} /> }
                { ( !this.state.shouldReaload && this.state.trajet.depart !== "" &&  this.state.trajet.arrive !== "") && <TabVoyage key={this.Keygen++} trajet={this.state.trajet} reload={this.state.shouldReaload}/> }  

                </div>           

                { (!this.state.shouldReaload && this.state.trajet.depart !== "" &&  this.state.trajet.arrive !== "") && <div className="part2"><Demande key={this.Keygen++} trajet={this.state.trajet} sendInfos={this.getInfos} /></div>}
                {this.state.shouldReaload && <Synthese demande={this.state.demande} reload={this.reload}/> }
            
         
           </div> 
         );
    }     
}

export default Voyage;