import './App.css';
import FormMain from './components/FormMain/FormMain';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validateCPF, validatePassword } from "./models/register";
import ValidationContext from './contexts/ValidationContext';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <ValidationContext.Provider value={{cpf: validateCPF, password: validatePassword}}>
        <FormMain onFormSubmit={onFormSubmit}></FormMain>
      </ValidationContext.Provider>
    </Container>
  );
}

function onFormSubmit(data) {
  console.log(data);
}

export default App;
