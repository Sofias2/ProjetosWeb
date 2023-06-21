import React, { Component }  from 'react';
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';
import { Modal } from "../../components/Modal/Modal"

export const ModalCreateFolder = ({open}) => {
    const [ folderName, setFolderName ] = useState ('');

    const handleChange = (e) => {
        setFolderName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fez o submit', folderName)
    }

    return (
        <Modal open={open} title="Criar Pasta" 
        controls={[
            {
                label: 'Criar e Salvar',
                loadingLabel: 'Criando',
                variant: 'secondary',
                type: 'submit',
                form: 'form-criar-pasta'
                
            }
        ]}
        >
            <Form onSubmit={handleSubmit} id="form-criar-pasta" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome da Pasta</Form.Label>
                <Form.Control type="text" placeholder="Ex: Matematica" value={folderName} onChange={handleChange} />

                </Form.Group>

            
            
            </Form>
        </Modal>
    )
}