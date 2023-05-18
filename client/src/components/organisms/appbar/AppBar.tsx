import { Button, Navbar} from 'react-daisyui';

const AppBar = () => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Button className="text-xl normal-case" color="ghost">
          da
        </Button>
      </Navbar>
    </div>
  );
};

export default AppBar;
