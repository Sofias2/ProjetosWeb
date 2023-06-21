import React, {useState} from 'react';
import { useThemeContext} from './App';

//criando componentes com classe - Defasado

/*class Assento extends React.Component  {
    constructor (props){
        super(props);
        this.state = {
            disabled: false
        }
    }

   handleClick(){
        this.setState({
            disabled: true
        })
   } 

    render(){
    return(
        <button
         className="assento" 
         type="button" 
         disabled={this.state.disabled}
         onClick={this.handleClick.bind(this)}
         
         > 
         
         {this.props.pos}
          </button>
    )
}

} */


//Usando o Hook useState
const Assento = (props) =>  {
    const [disabled, setDisabled] = useState(false);


    const handleClick = () => {
        setDisabled(true);
    }

    const value = useThemeContext();

    return(
                <button
                className="assento" 
                type="button" 
                disabled={disabled}
                onClick={() => handleClick()}
                
                > 
                
               <span style={{ color: value.color  ,fontFamily:value.font}}> {props.pos } </span>
                 </button>
            
     
    )

}



const Fileira = (props) => {
    return(
        <div className="fileira">
            {[0, 1, 2, 3].map((pos, index)=> (
                <Assento key={index} pos={props.de + pos} />
         ))}
        </div>
    )
}

export const AssentosOnibus = ( ) => {
    return(
        <div className="container">
            {[1,5,9,13,17].map((pos, index) => (
                <Fileira key={index} de={pos} />

            ))}
        </div>
    )
}