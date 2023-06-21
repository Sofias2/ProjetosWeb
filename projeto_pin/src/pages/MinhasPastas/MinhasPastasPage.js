import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import { ListGroup } from '../../components/ListGroup/ListGroup';

export const MinhasPastasPage = () => {
    return(
        <Container>
        <ListGroup itens={[
           {
            title: 'Matematica',
            total:3
           },
           {
            title: 'Geografia',
            total:1
           }
        ]}/>
        </Container>
    )
} 