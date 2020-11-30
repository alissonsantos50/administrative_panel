import React, { FormEvent, useState } from 'react';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, SignInForm, PageTitle } from './styles';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const authData = {
      name: username,
      password: password,
    };

    const auth = await api.post('session', authData);

    if (!auth) {
      return;
    }

    if (auth.status === 201) {
      history.push('/costumers');
    }
  }

  return (
    <Container>
      <PageTitle>Painel Administrativo</PageTitle>
      <SignInForm>
        <Input
          placeholder='Usuário'
          type='text'
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          icon={FiUser}
        />
        <Input
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          icon={FiLock}
        />
        <Button onClick={handleSignIn} icon={FiLogIn}>
          Acessar
        </Button>
      </SignInForm>
    </Container>
  );
};

export default SignIn;
