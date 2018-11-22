import React from 'react';
import ReactDOM from 'react-dom';

const Button =({ handleClick, text}) => (
    <button onClick ={handleClick}>
    {text}
    </button>    
)

const Statistics = ({hyva, neutraali, huono}) =>{
    return(
        <tbody>
        <tr><td>Hyvät:</td><td>{hyva}</td></tr> 
        <tr><td>Neutraalit:</td><td>{neutraali}</td></tr>
        <tr><td>Huonot:</td><td>{huono}</td></tr>          
        </tbody>
        )
}

const Statistic =({ nimi, arvo, extra})=>{
    return(
        <tbody>
        <tr><td>{nimi}:</td><td>{arvo} {extra}</td></tr>
        </tbody>
    )
}

const Results = ({hyva, neutraali, huono}) =>{
    const summa = hyva - huono
    const kaikki = hyva + huono+ neutraali

    const pos = (hyva / kaikki)*100
    const keskiarvo = summa / kaikki

    if(kaikki > 0){
        return( 
            <div>
            <div> <h2>Tulokset</h2></div>
            <table>
            <Statistics hyva = {hyva} neutraali = {neutraali} huono={huono} />           
            <Statistic nimi="Keskiarvo" arvo={keskiarvo.toFixed(2)} />
            <Statistic nimi="Positiivisia" arvo={pos.toFixed(2)} extra="%" />
            </table>
            </div>
            )
    }else{
        return(<div> <h2>Ei arvioita</h2></div>)
    }
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
    
    asetaPalaute =(palaute)=>{
        return () => {
            this.setState({
                [palaute]: this.state[palaute] +1
            })           
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

    
    
    return (
        <div>
          <h1>
            Anna Palautetta
            </h1>
        <div>
        <Button 
                handleClick={this.asetaPalaute("hyva")}
                 text = "Hyvä"       
        />
        <Button 
                handleClick={this.asetaPalaute("neutraali")}
                 text = "Neutraali"       
        />
        <Button 
                handleClick={this.asetaPalaute("huono")}
                 text = "Huono"       
        />
          
        </div>
        <Results hyva = {this.state.hyva} neutraali = {this.state.neutraali} huono={this.state.huono} /> 
            
            
            
        
    </div>
      )
}

}
ReactDOM.render(<App />, document.getElementById('root'));