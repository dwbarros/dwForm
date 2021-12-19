import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidationContext from '../../contexts/ValidationContext';
import useError from '../../hooks/useError';

function UserForm( { onFormSubmit } ){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validation = useContext(ValidationContext)
    const [errors, validateField, validateForm] = useError(validation);

    return(
        <form
            onSubmit={ 
                (event) => {
                    event.preventDefault();
                    if(validateForm()) {
                        onFormSubmit({email, password}); // Objeto literal
                    }
                }
            }
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
                label="Email"
                type="email"
                required

                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onBlur={validateField}
                error={!errors.password.valid}
                helperText={errors.password.text}
                id="password"
                name="password"
                label="Senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}

export default UserForm;