import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components 

import Header from './Header';
import Voyage from './Voyage';
import Colis from './Colis';
import Tourisme from './Tourisme';
import Reserve from './Tourisme/Reserve';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />
        <Switch>
           <Route path="/Transport.me/Voyage" component={Voyage} />
           <Route path="/Transport.me/Colis" component={Colis} />
           <Route path="/Transport.me/Tourisme" component={Tourisme} />
           <Route path="/Transport.me/Contact" component={Contact} />
           <Route component={Error}/>
        </Switch>
      {/*<Footer />*/}
      </div>
    </BrowserRouter>
         
  );
}

const Error = () => {

    return(
        <div>
          <h1>Page doesn't exist</h1>
        </div>

    )

}

export default App;