import Voos from './Voos';
import React,{ createContext, useState, useContext} from 'react';
import { AssentosOnibus } from './AssentosOnibus';
import { ViaCep } from './ViaCep';
import { Fonts } from "./Fonts";
import { Formulario } from "./Formulario";



//componente mais enxuto - arrow function

const Titulo = () =>(
  <h1>
    <span> Olá </span>
    <strong> Mundo</strong>
  </h1>

  )

// componente com function
function MeuBotao1(props){
  //const label = 'Aperte Aqui';
  const handleClick = ()=>{
    console.log('Clicou')
  };

  return(
    //evento de onClick
    <button onClick={handleClick} type="button" >{props.label}</button>
  )

}

//evento em classes

class MeuBotao extends React.Component{
  //const label = 'Aperte Aqui';
 // const handleClick = ()=>{
   // console.log('Clicou')
  //};

  handleClick(){
    console.log('Clicou')
  }

  render (){
    return(
      //evento de onClick
      <button onClick={this.handleClick} type="button" >{this.props.label}</button>
    )

  }
  

}

function PessoaIdade(props){
  //dentro do retirn d[o pode ser logico ou ternario para fazer if tem que ser fora dele
  return(

    <strong>{props.label}</strong>

  )
}

/*function PessoaDeMaior(){
  return(
    <strong>de maior</strong>

  )

}*/

function Pessoa(props){
  return(
  <section>
    Você é {props.idade >= 18 ? <PessoaIdade label='de maior' /> : <PessoaIdade label='de menor' />}
  </section>
)

}

const ListItem = ({label}) => {
  return (
    <li><strong>{label}</strong></li>
  )
}

const Lista = () => {
  const abc = [
    'A', 'B', 'C', 'D', 'E'
  ];

  return(

    <ul>
      {abc.map(function(valor, index){
        return <ListItem key={index} label={valor}/>

      })}

        
        
        

    </ul>


  )
}

export const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const SettingsContext = createContext({});

export const useSettingsContext = () => useContext(SettingsContext);


function App() {
  const [font, setFont] = useState('arial')
  

  return (
    <SettingsContext.Provider value={{cepUrlBase: 'https://viacep.com.br'}}>
    <ThemeContext.Provider value={{color: 'blue', font, setFont}} >
    <div className="App">
    <Titulo />

    <Formulario />

    <Fonts />
    
    <ViaCep    />

     <AssentosOnibus />

     <MeuBotao label="Clique Aqui" />
 
     <Voos />

    {/*} <Pessoa idade={19} />
     <Pessoa idade={15} />

     <Lista />
      <article>
      <h2>Subtitulo</h2>
      <p>kçsjfdfk dflkdsça akldfkpça</p>
      </article> */}

       
    </div>
    </ThemeContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
