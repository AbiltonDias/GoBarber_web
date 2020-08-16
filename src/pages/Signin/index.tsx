import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import AuthContext from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { name } = useContext(AuthContext);
  console.log(name);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O email é obrigatorio')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Logo GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot"> Esqueci minha Senha</a>
          </Form>

          <a href="/cadastro">
            <FiLogIn size={16} />
            Cadastrar
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};
export default Signin;
