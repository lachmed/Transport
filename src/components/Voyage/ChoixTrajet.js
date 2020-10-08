import React from "react";
import "./ChoixTrajet.css"
import firebase from "../../firebase.js";


class ChoixTrajet extends React.Component {

        state = {
            depart: "",
            arrive: "",
            options: []
        }

        
        componentDidMount()
        {
                const Trajectoires = firebase.database().ref('Trajectoires');

                var tab = [];

                Trajectoires.on("value", copy => {
                    
                    for(var stop in Object.values(copy.val()))
                    {
                        tab[stop]={
                            id: stop,
                            ville: Object.values(copy.val())[stop]
                        }
                    }
                    this.setState({ options: tab });
                });
            
                
        //EOmount
            }



        updateTrajet = (event) => {
                const {name,value} = event.target;
            this.setState({
                    [name]:value
            });
        }

        handleSubmit= (event) => {
            if(this.verifierTrajet())
            {
                event.preventDefault();
                const trajet = {
                    depart: this.state.depart,
                    arrive: this.state.arrive
                }
                var shouldReload = true;
                this.props.sendTrajet(trajet,shouldReload);
    }
            else{
                event.preventDefault();
                alert("SVP : Donner un trajet valide");
            }
               
        }

        verifierTrajet= () => {
           const verified= ( this.state.depart==="" || this.state.arrive==="" || (this.state.depart===this.state.arrive )); 
           return !verified;
        }
        
        render()
        {
        
            // getting options from database/firebase
            {
                var  options = this.state.options.map( traj => {
                    return <option key={traj.id} value={traj.ville}>{traj.ville}</option>
                }
            ); 
            }
            

            return(
                <div className="choix">
                        <form name="choixForm" onSubmit={ (event) => this.handleSubmit(event)}>
                            <fieldset>
                                <legend>
                                    Choisir un trajet :
                                </legend>
                            
                                <span>Départ</span>
                                <select name="depart" value={this.state.depart} onChange={(event) => this.updateTrajet(event)}>
                                   
                                    <option value="">
                                     ------------
                                 </option>
                                 {options}
                                </select>        
                                 
                                <span>Arrivé</span>           
                                <select name="arrive" value={this.state.arrive} onChange={(event) => this.updateTrajet(event)}>
                                <option value="">
                                        ------------
                                    </option>
                                    {options}
                                </select>
                                <button>Envoyer</button>
                            </fieldset>
                        </form>
                </div>
            );


        }


}


export default ChoixTrajet;