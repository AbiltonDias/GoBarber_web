import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logo} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu Logon</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="senha"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot"> Esqueci minha Senha</a>
        </form>

        <a href="/cadastro">
          <FiLogIn size={16} />
          Cadastrar
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default Signin;
