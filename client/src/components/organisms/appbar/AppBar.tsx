import { Navbar } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/auth/authSlice';
import { ROUTES } from '../../../Routes';
import { useDispatch, useSelector } from 'react-redux';

type MenuOption =
  | { label: string; path: string }
  | { label: string; onClick: () => void };

const menuOptionsLogged = (dispatch: any): MenuOption[] => [
  {
    label: 'My surveys',
    path: ROUTES.MY_SURVEYS,
  },
  {
    label: 'Answers',
    path: ROUTES.ANSWERS,
  },
  {
    label: 'Profile',
    path: ROUTES.PROFILE,
  },
  {
    label: 'Logout',
    onClick: () => {
      dispatch(logout());
    },
  },
];

const menuOptionsNotLogged: MenuOption[] = [
  {
    label: 'Login',
    path: ROUTES.LOGIN,
  },
  {
    label: 'Register',
    path: ROUTES.REGISTER,
  },
];

const isButton = (
  option: MenuOption
): option is { label: string; onClick: () => void } => {
  return 'onClick' in option;
};

const AppBar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const currentMenu = user ? menuOptionsLogged(dispatch) : menuOptionsNotLogged;

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-300 shadow-xl rounded-box px-10 uppercase flex justify-between">
        <Link to={ROUTES.HOME}>
          <span className="text-lg font-medium">Surveys</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            {currentMenu.map((option: MenuOption) => {
              const isLink = !isButton(option);
              return isLink ? (
                <li key={JSON.stringify(option)}>
                  <Link to={option.path}>
                    <span>{option.label}</span>
                  </Link>
                </li>
              ) : (
                <li key={JSON.stringify(option)}>
                  <button className="uppercase" onClick={option.onClick}>
                    <span>{option.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </Navbar>
    </div>
  );
};

export default AppBar;
