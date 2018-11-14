import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const kurssi = "Half Stack - sovelluskehitys";
    const osa1 = {
        nimi: "Reactin perusteet",
        tehtavia: 10
    }
    const osa2 = {
        nimi: "tiedonvälitys propseilla",
        tehtavia :7
    }
    const osa3 = {
        nimi: "komponenttien tila",
        tehtavia: 14
    }

    return(
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto sisalto1 = {osa1} sisalto2 = {osa2} sisalto3 = {osa3}/>
            <Yhteensa yhteensa ={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />

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
        <Osa sisalto={props.sisalto1.nimi} tehtavia={props.sisalto1.tehtavia}/>
        <Osa sisalto={props.sisalto2.nimi} tehtavia={props.sisalto2.tehtavia}/>
        <Osa sisalto={props.sisalto3.nimi} tehtavia={props.sisalto3.tehtavia}/>
     
      </div>
    )
  }

  
const Yhteensa=(props) =>{
    return(
        <p>
            Yhteensä {props.yhteensa} tehtävää;
        </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

