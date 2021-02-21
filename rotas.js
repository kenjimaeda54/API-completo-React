import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Header from './Componentes/Header';
import Home   from './Pages/Home';
import Filme  from './Pages/Filme';
import Error  from './Pages/Error';

const Rotas =()=>{
    return(
           <BrowserRouter>
             <Header/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme}/>
                <Route path="*" component={Error}/>
              </Switch>
           </BrowserRouter>         
           );
}
export default Rotas;