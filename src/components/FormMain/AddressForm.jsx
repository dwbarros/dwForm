import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function AddressForm({onFormSubmit}) {

    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUF] = useState("");


    return(
        <form
            onSubmit={ 
                (event) => {
                    event.preventDefault();
                    onFormSubmit({cep, address, number, city, uf});
                }
            }
        >
            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                id="cep"
                name="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={address}
                onChange={(event) => {
                    setAddress(event.target.value);
                }}
                id="address"
                name="address"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={number}
                onChange={(event) => {
                    setNumber(event.target.value);
                }}
                id="number"
                name="number"
                label="Número"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={city}
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                id="city"
                name="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={uf}
                onChange={(event) => {
                    setUF(event.target.value);
                }}
                id="uf"
                name="uf"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default AddressForm;