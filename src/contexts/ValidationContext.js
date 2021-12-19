import React from 'react';

const ValidationContext = React.createContext({
    cpf: defaultValidation,
    password: defaultValidation,
    name: defaultValidation
});

function defaultValidation(data) {
    console.log(data);
    return { valid: true, text: ""};
}

export default ValidationContext;