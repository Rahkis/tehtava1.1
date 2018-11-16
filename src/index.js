import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            huono:0,
            hyva:0,
            neutraali: 0
        }
    }

   

asetaHyva = () => {
    this.setState({
            hyva:this.state.hyva +1
    })
    
}
asetaNeutraali = () =>{
    this.setState({
        neutraali: this.state.neutraali +1
        
    })
}

asetaHuono = () =>{
   this.setState({
        hyva:this.state.huono +1
})
}


render() {
    
    return (
        <div>
          <h1>
            Anna Palautetta
            </h1>
        <div>
          <button onClick={this.asetaHyva}>Hyvä</button>
          <button onClick={this.asetaNeutraali}>Neutraali</button>
          <button onClick={this.asetaHuono}>Huono</button>
        </div>
        <div><h2>Tulokset </h2> </div>
            
            <div> Hyvät:  {this.state.hyva}</div>            
            <div> Neutraalit:  {this.state.neutraali}</div>
            <div> Huonot:  {this.state.huono}</div>
            
        
    </div>
      )
}

}
ReactDOM.render(<App />, document.getElementById('root'));