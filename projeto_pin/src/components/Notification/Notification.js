import React, { Component }  from 'react';
import  ReactDOM  from 'react-dom';
import Alert  from 'react-bootstrap/Alert';
import './index.css';

export const Notification = ({message, variant = 'success', onClose}) => {

    return ReactDOM.createPortal(
        <div className='notification'>
            <Alert variant={variant} onClose={onClose} dismissible>
            <p>
            {message}
            </p>
        </Alert>
        </div>,
      document.body
    )
}