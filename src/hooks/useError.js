import React, { useState } from 'react';

function useError(validation) {

    const initialState = _createDefaultState(validation);

    const [errors, setErrors] = useState(initialState);

    function validateField(event) {
        const {name, value} = event.target;
        const newState = {...errors}
        newState[name] = validation[name](value);
        setErrors(newState);        
    }

    function validateForm() {
        for(let field in errors) {
            if(!errors[field].valid) return false
        }
        return true;
    }

    return [errors, validateField, validateForm]
}

function _createDefaultState(validation) {
    const initialState = {};
    for(let field in validation) {
        initialState[field] = {valid: true, text: ""};
    }

    return initialState;
}

export default useError;