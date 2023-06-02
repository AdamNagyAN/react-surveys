import { Button, Card, Dropdown, Navbar } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { logout } from '../../../redux/auth/authSlice';
import { ROUTES } from '../../../Routes';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../redux/store';
import { UserIcon } from '@heroicons/react/24/outline';
import useGetAllSurveys from '../../../query/surveys/useGetAllSurveys';

type MenuOption =
  | { label: string; path: string }
  | { label: string; onClick: () => void };

const menuOptionsLogged: MenuOption[] = [
  {
    label: 'Create survey',
    path: ROUTES.CREATE_SURVEY,
  },
  {
    label: 'My surveys',
    path: ROUTES.MY_SURVEYS,
  },
  {
    label: 'Answers',
    path: ROUTES.ANSWERS,
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
  const { data } = useGetAllSurveys(0, 0);
  const { user } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.auth
  );
  const dispatch = useDispatch();
  const currentMenu = user ? menuOptionsLogged : menuOptionsNotLogged;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-300 shadow-xl rounded-box px-10 uppercase flex justify-between">
        <Link to={ROUTES.HOME}>
          <span className="text-lg font-medium">Surveys</span>
        </Link>
        <nav>
          <ul className="flex gap-8 items-center">
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
            {user && (
              <li>
                <Dropdown vertical="bottom" end>
                  <Dropdown.Toggle color="ghost">Profile</Dropdown.Toggle>
                  <Dropdown.Menu className="card card-compact w-64 p-2 shadow bg-base-300 text-primary-content m-1">
                    <Card.Body className="normal-case">
                      <Card.Title tag="div" className="mb-0">
                        <div className="p-2 bg-neutral-content rounded-full">
                          <UserIcon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-medium">{user.user.fullname}</p>
                          <p className="text-sm font-normal">
                            {user.user.email}
                          </p>
                        </div>
                      </Card.Title>
                      <p>Amount of surveys: {data?.total ?? 0}</p>
                      <Button className="mt-4" color="error" onClick={onLogout}>
                        Log out
                      </Button>
                    </Card.Body>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            )}
          </ul>
        </nav>
      </Navbar>
    </div>
  );
};

export default AppBar;
