import { useState, useEffect } from "react";
import { useSettingsContext } from "./../App";

export const useCep = (cep) => {
    const [endereco, setEndereco] = useState({});
    const value = useSettingsContext();


    const fetchCEP = (cep) =>{
        fetch(`${value.cepUrlBase}/ws/${cep}/json/`)
        .then(dados => dados.json())
        .then(endereco => {
            console.log(endereco);
            setEndereco(endereco);
        })
    }

    useEffect(()=>{
       fetchCEP(cep)
       
    },[cep])

    return endereco;
}