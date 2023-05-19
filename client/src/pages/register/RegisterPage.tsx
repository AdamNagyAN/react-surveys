import AppBar from '../../components/organisms/appbar/AppBar';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { Button, Card, Form } from 'react-daisyui';
import TextField from '../../components/molecules/TextField';
import { registerSchema, RegisterValues } from './RegisterForm.schema';
import useRegister from '../../query/auth/useRegister';

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { mutateAsync, isLoading } = useRegister();
  const navigate = useNavigate();
  const onSubmit = async (formValues: RegisterValues) => {
    await mutateAsync(formValues);
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <AppBar />
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 my-auto mx-auto">
        <Card.Body>
          <h1 className="text-center font-medium text-lg">Register</h1>
          <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
            <Form.Label title="Full name" />
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    errorText={errors.fullname?.message}
                  />
                );
              }}
            />
            <Form.Label className="mt-2" title="Email" />
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    errorText={errors.email?.message}
                  />
                );
              }}
            />
            <Form.Label className="mt-2" title="Password" />
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    value={field.value ?? ''}
                    errorText={errors.password?.message}
                    type="password"
                  />
                );
              }}
            />
            <Button loading={isLoading} className="mt-8">
              Register
            </Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegisterPage;
