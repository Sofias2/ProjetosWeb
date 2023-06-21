import React, { Component }  from 'react';
import ReactDOM  from 'react-dom';
import {Card} from '../../components/Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';

export const HomePage = () => {
    return (
        <div>
            <ModalSavePin open={false} />
            <ModalCreateFolder open={false} />  
            <Notification message='Criado com Sucesso!' onClose={() => {
                console.log('Clicou em Fechar')
            }} />
          
        <Container>
        <Row>
            <Col xs={12} md={2}> <Card title="matematica" image="https://cdn.wikirby.com/thumb/8/87/KPR_Warp_Star_artwork.png/800px-KPR_Warp_Star_artwork.png" total={0} /> </Col>
            <Col xs={12} md={2}> <Card title="geografia" image="https://cdn.wikirby.com/thumb/8/87/KPR_Warp_Star_artwork.png/800px-KPR_Warp_Star_artwork.png" total={0} /> </Col>
            
        </Row>
        </Container>
        </div>
        
  
    )
}