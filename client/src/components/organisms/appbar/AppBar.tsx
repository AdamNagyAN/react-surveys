import { Navbar } from 'react-daisyui';
import { ROUTES } from '../../../Routes';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-300 shadow-xl rounded-box px-10 uppercase flex justify-between">
        <Link to={ROUTES.HOME}>
          <span className="text-lg font-medium">Survays</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to={ROUTES.LOGIN}>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.REGISTER}>
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Navbar>
    </div>
  );
};

export default AppBar;
