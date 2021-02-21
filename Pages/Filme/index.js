import React, { Component }from 'react';

class Filme extends Component{
    constructor(props){
        super(props);
        this.state={
            array:[]
        }
    
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)//ficar atento ao APi /filmes${id} não possui ponto,ao passar o link não colocar ponto
        .then((r) =>r.json())
        .then((json) =>{
            let estado = this.state;
            estado.array = json;
            this.setState(estado);
            console.log(json)

        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.array.nome}</h1>
            <img src={this.state.array.foto}/>
            {this.state.array.length !== 0 && 
            <h3>Sinopse</h3>}
            {this.state.array.sinopse}
        </div>    
        );
    }
}

export  default Filme;