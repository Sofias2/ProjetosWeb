

import { useThemeContext} from './App';

const voosDisponiveis = [{
    id:'12',
    title: 'Volta t 19 de junho',
    details: {
        id: '12',
        title: 'Espaço para as pernas'
    }
}];

function ItemVooDetails({details}){
    const value = useThemeContext();
    return (

        <ul>
        {details.map(detail => (
            <li key = {detail.id} style={{color: value.color, fontFamily: value.font}}>{detail.title}</li>

        ))}
       </ul>
   
    )
        
};

function ItemVoo({ title, children}){
    return (
        <div className="voos">
        <header>
            <h3>{title}</h3>
        </header>
        <div className="voo-details">
            
        </div>
            
         </div>
    )
        
};

function Voos(){
    return(
        <div className="voos">
            {voosDisponiveis.map(voo => (
            <ItemVoo key={voo.id} title={voo.title}>
             <ItemVooDetails details={voo.details}  />
            </ItemVoo>

            ))}
        </div>

    )
}



export default Voos;
