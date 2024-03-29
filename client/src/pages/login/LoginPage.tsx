import AppBar from '../../components/organisms/appbar/AppBar';
import { Button, Card, Form } from 'react-daisyui';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema, type LoginValues } from './LoginForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '../../components/molecules/TextField';
import useLogin from '../../query/auth/useLogin';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';
import userLocalStorage from '../../utils/userLocalStorage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { mutateAsync, isLoading } = useLogin();
  const navigate = useNavigate();
  const onSubmit = async (formValues: LoginValues) => {
    const resp = await mutateAsync(formValues);
    userLocalStorage.setUser(resp.data);
    dispatch(setUser(resp.data));
    navigate(ROUTES.HOME);
  };

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
              Login
            </Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;
