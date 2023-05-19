import { Input, type InputProps } from 'react-daisyui';
import { cn } from '../../utils/utils';

type TextFieldProps = InputProps & { errorText?: string };

const TextField = (props: TextFieldProps) => {
  const { errorText, ...otherProps } = props;
  return (
    <>
      <Input
        type="text"
        placeholder="email"
        className={cn({ 'input-bordered': true, 'input-error': errorText })}
        {...otherProps}
      />
      <label className="label" htmlFor={otherProps.name}>
        <span className="label-text-alt text-error">{errorText}</span>
      </label>
    </>
  );
};

export default TextField;
