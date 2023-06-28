import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import { ListGroup } from '../../components/ListGroup/ListGroup';
import { useAppContext } from '../../store/AppContext';

const adapterItens = (itens) => {
    return itens.map( item => ({
        title: item.name,
        total: item.pins.length
    }))
}

export const MinhasPastasPage = () => {
    const {state} = useAppContext();

    return(
        <Container>
        <ListGroup itens={adapterItens(state.folders)}/>
        </Container>
    )
} 