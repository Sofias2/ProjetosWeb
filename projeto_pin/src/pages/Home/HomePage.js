import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import ReactDOM  from 'react-dom';
import {Card} from '../../components/Card/Card';
import { CardContainer } from '../../containers/Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { saveFolderSuccessType } from '../../store/types';
import { saveFolder } from '../../services/pinService';
import {fetchPinsAction  } from '../../store/actions';


export const HomePage = () => {
    const { state, dispatch } = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false);

    const pinsNormalized = state.pins.map(pin => ({
            ...pin,
            total: state.folders.filter(folder => (
                folder.pins.includes(pin.id)
            )).length 
    }))

    useEffect(() => {
        fetchPinsAction (dispatch);
    }, [])

    useEffect(() => {
        if (state.type === saveFolderSuccessType){
            setShowFeedback(true);
        }

    }, [state.type])

    return (
        <div>
            <ModalSavePin open={state.mode === 'savePin'} />
            <ModalCreateFolder open={state.mode === 'createFolder'} />  
           
             {showFeedback && (<Notification message='Criado com Sucesso!' onClose={() => {
               setShowFeedback(false)
            }} />)}
          
        <Container>
        <Row>
            {pinsNormalized.map(pin => (
                 <Col key={pin.id} xs={12} md={2}> <CardContainer {...pin} /> </Col>

            ))}
           
              
        </Row>
        </Container>
        </div>
        
  
    )
}