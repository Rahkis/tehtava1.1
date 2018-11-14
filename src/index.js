import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const kurssi = "Half Stack - sovelluskehitys";
    const osat = [
        {
            nimi: "Reactin perusteet",
            tehtavia: 10
        },
        {
            nimi: "tiedonvälitys propseilla",
            tehtavia :7
        },
        {
            nimi: "komponenttien tila",
            tehtavia: 14
        }
    ]

 
    return(
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto osat = {osat} />
            <Yhteensa osat ={osat} />

            

        </div>
    )

}

const Otsikko =(props) =>{
    return(
        <h1>
           {props.otsikko}
        </h1>
    )
}
const Osa =(props) =>{
    return(
        <p>
            {props.sisalto} {props.tehtavia}
        </p>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa sisalto={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
        <Osa sisalto={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
        <Osa sisalto={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
     
      </div>
    )
  }

  
const Yhteensa=(props) =>{
    return(
        <p>
            Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää;
        </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

