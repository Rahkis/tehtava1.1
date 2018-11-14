import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = "Half Stack - sovelluskehitys";
    const osa1 = "Reactin perusteet";
    const tehtavia1 = 10;
    const osa2 = "tiedonvälitys propseilla";
    const tehtavia2 =7;
    const osa3 = "komponenttien tila";
    const tehtavia3 =14;

    return(
        <div>
            <Otsikko otsikko={kurssi} />
            <Sisalto sisalto1 = {osa1} tehtava1 = {tehtavia1}  sisalto2 = {osa2} tehtava2 = {tehtavia2} sisalto3 = {osa3} tehtava3 = {tehtavia3}/>
            <Yhteensa yhteensa ={tehtavia1 + tehtavia2 + tehtavia3} />

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
        <Osa sisalto={props.sisalto1} tehtavia={props.tehtava1}/>
        <Osa sisalto={props.sisalto2} tehtavia={props.tehtava2}/>
        <Osa sisalto={props.sisalto3} tehtavia={props.tehtava3}/>
     
      </div>
    )
  }

  //  <Osa sisalto={osa2} tehtavia={tehtavia2}/>
  //<Osa sisalto={osa3} tehtavia={tehtavia3}/>



const Yhteensa=(props) =>{
    return(
        <p>
            Yhteensä {props.yhteensa} tehtävää;
        </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

