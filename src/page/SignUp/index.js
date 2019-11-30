import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome e obrigatorio'),
    email: Yup.string()
      .email('Digite um e-mail')
      .required('Este campo e obrigatorio'),
    password: Yup.string()
      .required('A senha e obrigatoria')
      .min(6, 'No minimo 6 caracteres'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar Conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
