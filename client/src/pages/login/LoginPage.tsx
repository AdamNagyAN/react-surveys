import AppBar from '../../components/organisms/appbar/AppBar';
import { Button, Card, Form } from 'react-daisyui';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema, type LoginValues } from './LoginForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '../../components/molecules/TextField';
import React from 'react';
import axiosBase from '../../service/axiosBase';

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const onSubmit = () => {};

  React.useEffect(() => {
    axiosBase.get('/asd');
  }, []);

  return (
    <>
      <AppBar />
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 my-auto mx-auto">
        <Card.Body>
          <h1 className="text-center font-medium text-lg">Login</h1>
          <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
            <Form.Label title="Email" />
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <TextField {...field} errorText={errors.email?.message} />
                );
              }}
            />
            <Form.Label className="mt-2" title="Password" />
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <TextField {...field} errorText={errors.password?.message} />
                );
              }}
            />
            <Button className="mt-8">Login</Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;
