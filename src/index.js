import React from 'react';
import ReactDOM from 'react-dom';

const Button =({ handleClick, text}) => (
    <button onClick ={handleClick}>
    {text}
    </button>    
)

const Statistics = ({hyva, neutraali, huono}) =>{
    return(
        <div>
        <div> Hyvät:  {hyva}</div>            
        <div> Neutraalit:  {neutraali}</div>
        <div> Huonot:  {huono}</div>
        </div>
        )
}

const Statistic =({ nimi, arvo, extra})=>{
    return(
        <div>{nimi} : {arvo} {extra}</div>
    )
}
    



class App extends React.Component{
    constructor(){
        super()
        this.state = {            
            hyva:0,
            neutraali: 0,
            huono:0
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
        huono:this.state.huono +1
})
}




render() {

    const summa = this.state.hyva - this.state.huono
    const kaikki = this.state.hyva + this.state.huono+ this.state.neutraali

    const pos = (this.state.hyva / kaikki)*100
    const keskiarvo = summa / kaikki
    
    return (
        <div>
          <h1>
            Anna Palautetta
            </h1>
        <div>
        <Button 
                handleClick={this.asetaHyva}
                 text = "Hyvä"       
        />
        <Button 
                handleClick={this.asetaNeutraali}
                 text = "Neutraali"       
        />
        <Button 
                handleClick={this.asetaHuono}
                 text = "Huono"       
        />
          
        </div>
        <div><h2>Tulokset </h2> </div>
            
            <Statistics hyva = {this.state.hyva} neutraali = {this.state.neutraali} huono={this.state.huono} />           
            <Statistic nimi="Keskiarvo" arvo={keskiarvo.toFixed(2)} />
            <Statistic nimi="Positiivisia" arvo={pos.toFixed(2)} extra="%" />
            
        
    </div>
      )
}

}
ReactDOM.render(<App />, document.getElementById('root'));