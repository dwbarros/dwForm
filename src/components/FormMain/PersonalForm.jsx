import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidationContext from '../../contexts/ValidationContext';
import useError from '../../hooks/useError';

function PersonalForm({onFormSubmit}) {
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validation = useContext(ValidationContext)
    const [errors, validateField, validateForm] = useError(validation)

    return (
        <form
            onSubmit={ (event) => {
                    event.preventDefault();
                    if(validateForm()) {
                        onFormSubmit({name, lastName, cpf, promocoes, novidades});
                    }
                }
            }
        >
            <TextField
                id="nome"
                name="nome"
                value={name}

                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth

                onChange={(event) => {
                    setName(event.target.value);
                    }
                }
            />

            <TextField
                id="sobrenome"
                name="sobrenome"
                value={lastName}

                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth

                onChange={(event) => {
                    setLastName(event.target.value);
                    }
                }
            />

            <TextField
                id="cpf"
                name="cpf"
                value={cpf}

                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth

                error={!errors.cpf.valid}
                helperText={errors.cpf.text}

                onBlur={validateField}

                onChange={(event) => {
                    setCpf(event.target.value);
                    }
                }
            />

            <FormControlLabel
                name="promocoes"
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        name="promocoes"
                        color="primary"

                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                            }
                        }
                    />
                }
            />

            <FormControlLabel
                name="novidades"
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        name="novidade"
                        color="primary"

                        onChange={(event) => {
                            setNovidades(event.target.checked);
                            }
                        }
                    />
                }
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

export default PersonalForm;