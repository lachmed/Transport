import React from 'react';
import './Demande.css';

import firebase from "../../firebase";

class Demande extends React.Component{

        state={
            numTrip:"",
            nom: "",
            prenom:"",
            tel:"",
            cin:"",
            Erreures:{
                NumTrip: false,
                nom: false,
                prenom:false,
                tel:false,
                cin:false
            },
            traj : this.props.trajet.depart.substr(0,3) + this.props.trajet.arrive.substr(0,3),
            Numbers : []
        }

        componentDidMount()
    {

        const details = firebase.database().ref('Details');
        var numbers = [];
        details.on('value', snapshot => {
                for( var trip in Object.values(snapshot.val()))
                {
                  if( Object.values(snapshot.val())[trip].traj === this.state.traj)
                       numbers[trip] = Object.values(snapshot.val())[trip].Num;
                }
                this.setState({ Numbers : numbers });
            });
    }

    updateData = (event) =>{
                const {name,value}=event.target;
                this.setState(
                    {
                        [name]:value
                    }
                )
        }

        validNumber(num)
        {
            for(var i in this.state.Numbers)
                if(num===this.state.Numbers[i])
                {
                    return true;
                }
            return false;
        }


        verifierInfos()
        {
            if(this.state.numTrip==="" || !this.validNumber(parseInt(this.state.numTrip)))
            {
                this.setState({
                    Erreures : {
                        numTrip: true
                    }
                });
                return false;
            }

            if(this.state.nom==="" || !isNaN(this.state.nom))
                {
                    this.setState({
                        Erreures : {
                            nom: true
                        }
                    });
                    return false;
                }

                if(this.state.prenom==="" || !isNaN(this.state.prenom))
                {
                    this.setState({
                        Erreures : {
                            prenom: true
                        }
                    });
                    return false;
                }
                

                if(this.state.cin==="" || !isNaN(this.state.cin))
                {
                    this.setState({
                        Erreures : {
                            cin: true
                        }
                    });
                    return false;
                }

                if(this.state.tel==="" || isNaN(this.state.tel) || this.state.tel.length<10 || this.state.tel.length>10)
                {
                    this.setState({
                        Erreures : {
                            tel: true
                        }
                    });
                    return false;
                }

            return true;
        }



        render(){        
            return (
                <div className="demande container-fluid">
                    <form name="demandeForm container-fluid">
                    <fieldset>
                            <legend>Le numéro du voyage</legend>
                            <input 
                            type="number" 
                            name="numTrip" 
                            value={this.state.numTrip} 
                            onChange={ event =>this.updateData(event)}
                            />
                        { this.state.Erreures.numTrip && <span className="ErrValid">Veillez donner un numéro de voyage correct</span> }
                    </fieldset> 
                    
                    <fieldset className="infos">
                        <legend>
                                        Donner vos informations:
                        </legend>
                        <table className="infoperso">
                                        <tbody>
                                            <tr>
                                                <td>Nom:</td>
                                                <td>
                                                    <input type="text" value={this.state.nom} name="nom" onChange={ event => { this.updateData(event) } } />
                                                    { this.state.Erreures.nom && <span className="ErrValid">Veillez donner votre nom</span> }
                                                </td>
                                                <td>CIN:</td>
                                                <td>
                                                    <input type="text" value={this.state.cin} name="cin" onChange={ event => { this.updateData(event) } } />
                                                { this.state.Erreures.cin && <span className="ErrValid">Veillez donner votre code cin</span> }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Prénom:</td>
                                                <td>
                                                    <input type="text" value={this.state.prenom} name="prenom" onChange={ event => { this.updateData(event) } } />
                                                { this.state.Erreures.prenom && <span className="ErrValid">Veillez donner votre prénom</span> }
                                                </td>
                                                <td>Tel:</td>
                                                <td>
                                                    <input type="number" value={this.state.tel} name="tel" onChange={ event => { this.updateData(event) } } />
                                                { this.state.Erreures.tel && <span className="ErrValid">Veillez donner un numéro de téléphone valide</span> }
                                                </td>
                                            </tr>
                                        </tbody>
                        </table>
                    </fieldset>
                    </form>
                    <button className="btn" onClick={ (event)=>{this.verifierInfos() ? this.props.sendInfos(this.state,true) : alert('Corriger les infos') }} >Demander</button>
                </div>
            )};

}





export default Demande;