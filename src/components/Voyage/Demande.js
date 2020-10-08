import React from 'react';
import './Demande.css';




class Demande extends React.Component{

        state={
            numTrip:"",
            nom: "",
            prenom:"",
            tel:"",
            cin:""
        }


      updateData = (event) =>{
                const {name,value}=event.target;

                this.setState(
                    {
                        [name]:value
                    }
                )
        }



        render(){        
            return (
                <div className="demande">
                    <form name="demandeForm">
                    <fieldset>
                            <legend>Le numéro du voyage</legend>
                            <input type="number" name="numTrip" value={this.state.numTrip} onChange={ event => { this.updateData(event) } }/>
                    </fieldset> 
                    
                    <fieldset className="infos">
                        <legend>
                                        Donner vos informations:
                        </legend>
                        <table name="infoperso">
                                        <tbody>
                                            <tr><td>Nom:</td><td><input type="text" value={this.state.nom} name="nom" onChange={ event => { this.updateData(event) } } /></td><td>CIN:</td><td><input type="text" value={this.state.cin} name="cin" onChange={ event => { this.updateData(event) } } /></td></tr>
                                            <tr><td>Prénom:</td><td><input type="text" value={this.state.prenom} name="prenom" onChange={ event => { this.updateData(event) } } /></td><td>Tel:</td><td><input type="number" value={this.state.tel} name="tel" onChange={ event => { this.updateData(event) } } /></td></tr>
                                        </tbody>
                        </table>
                    </fieldset>
                    </form>
                    <button className="btn" onClick={(event)=> this.props.sendInfos(this.state,true)}>Demander</button>
                </div>
            )};

}





export default Demande;