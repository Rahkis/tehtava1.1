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
            <Sisalto sisalto={osa1} tehtavia={tehtavia1}/>
            <Sisalto sisalto={osa2} tehtavia={tehtavia2}/>
            <Sisalto sisalto={osa3} tehtavia={tehtavia3}/>
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

const Sisalto =(props) =>{
    return(
        <p>
            {props.sisalto} {props.tehtavia}
        </p>
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

