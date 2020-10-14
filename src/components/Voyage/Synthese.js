import React from 'react'
import './Synthese.css'
import firebase from '../../firebase'

class Synthese extends React.Component {

    state={
        details: {}
    }



    componentDidMount(){

        const details = firebase.database().ref('Details');
        var trips = {};
        details.on('value', snapshot => {
                for( var trip in Object.values(snapshot.val()))
                {
                  if( Object.values(snapshot.val())[trip].Num === parseInt(this.props.demande.numTrip))
                       trips=Object.values(snapshot.val())[trip];
                }
                this.setState({ details : trips })
                console.log(this.state.details)
        });


        var date= new Date(); 
        var ref='Demande' + (date.toLocaleDateString());
        var tmp = ref.split('/');
        ref = tmp.join('-');
        const demandes = firebase.database().ref(ref);

        var dem= {
            client: {
                nom: this.props.demande.nom,
                prenom: this.props.demande.prenom,
                cin: this.props.demande.cin,
                tel: this.props.demande.tel
            },
            voyage: trips
        }

        demandes.push(dem);
    }

    render(){
        return(
          
          <div className='synthese '>
                <h1>Voici votre biellet:</h1>
                        <table border="1" cellSpacing="0">
                            <tbody>
                                <tr><td className="title">Nom:</td><td id="synNom">{this.props.demande.nom}</td><td className="title">Télephone:</td><td id="synTel">{this.props.demande.tel}</td></tr>
                                <tr><td className="title">Prénom:</td><td id="synPrenom">{this.props.demande.prenom}</td><td className="title">Numéro De voyage:</td><td id="synNumVoy">{this.props.demande.numTrip}</td></tr>
                                <tr><td className="title">CIN:</td><td id="synCin">{this.props.demande.cin}</td><td className="title">Date</td><td id="synDate">{this.state.details.date}</td></tr>
                                <tr><td className="title">Prix:</td><td id="synPrix" >{this.state.details.prix}</td><td className="title" >Heure:</td><td>{this.state.details.heure}</td></tr>
                                <tr><td className="title">Départ:</td><td>{this.state.details.depart}</td><td className="title">Arrivé</td><td>{this.state.details.arrive}</td></tr>
                            </tbody>
                        </table>
                        <button className="btn" onClick={(event)=> { this.props.reload(false)}}>Autre réservation</button>
            </div>
    
        )}
    
}


export default Synthese;