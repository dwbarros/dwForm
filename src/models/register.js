function validateCPF (cpf) {
    if (cpf.length !== 11) {
      return {valid:false, text:"CPF deve ter 11 dígitos"}
    } else {
      return {valid:true, text:""}
    }
  }

  function validatePassword (password) {
    if (password.length < 4 || password.length > 72) {
      return {valid:false, text:"Senha deve ter 4 e 72 dígitos"}
    } else {
      return {valid:true, text:""}
    }
  }

export { validateCPF, validatePassword };