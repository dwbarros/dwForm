import React, { useState, useEffect } from 'react';
import AddressForm from './AddressForm';
import PersonalForm from './PersonalForm';
import UserForm from './UserForm';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

function FormMain({onFormSubmit, validation}) {

    // Variáveis state
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
        if(etapaAtual === subForms.length-1) {
            onFormSubmit(formData)
        }
    })

    // Components Array
    const subForms = [
        <UserForm onFormSubmit={getFormData}/>,
        <PersonalForm onFormSubmit={getFormData}/>,
        <AddressForm onFormSubmit={getFormData}/>,
        <Typography variant="h5">Cadastro realizado com sucesso!</Typography>
    ];

    function getFormData(data) {
        setFormData({...formData, ...data})
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {subForms[etapaAtual]}
        </>
    );
}

export default FormMain;