import React, { Component }from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


class Home extends Component{
      constructor(props){
        super(props);
        this.state={
          array:[]
        }
      }
componentDidMount(){
  let url = "https:sujeitoprogramador.com/r-api/?api=filmes";
  fetch(url)
  .then((r)=>r.json())
  .then((json) =>{
     let estado = this.state;
     estado.array = json;
     this.setState(estado);
     console.log(estado);   
  
  });
  
}  

      render(){
          return(
            <div>
              {this.state.array.map((item)=>{
                return(
                  <div className="corpo" key={item.id}>
                    <h2>{item.nome}</h2>
                    <img src={item.foto} alt="Foto do filme"/>
                    <h5>{item.sinopse}</h5>
                  <Link to={`/Filme/${item.id}`}> Acessar</Link>
                  </div>
                );
              })}
            </div>  
          );
      }
}
export default Home;