import AppBar from '../../components/organisms/appbar/AppBar';
import { Button, Card, Form, Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <>
      <AppBar />
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 my-auto mx-auto">
        <Card.Body>
          <h1 className="text-center font-medium text-lg">Login</h1>
          <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
            <Form.Label title="Email" />
            <Input type="text" placeholder="email" className="input-bordered" />
            <Form.Label className="mt-2" title="Password" />
            <Input
              type="text"
              placeholder="password"
              className="input-bordered"
            />
            <Button className="mt-8">Login</Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;
