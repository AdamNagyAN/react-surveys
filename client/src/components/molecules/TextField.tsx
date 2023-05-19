import React from 'react';
import { Input, type InputProps } from 'react-daisyui';
import { cn } from '../../utils/utils';

type TextFieldProps = InputProps & { errorText?: string };

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { errorText, ...otherProps } = props;
    return (
      <>
        <Input
          ref={ref}
          type="text"
          className={cn({ 'input-bordered': true, 'input-error': errorText })}
          {...otherProps}
        />
        <label className="label" htmlFor={otherProps.name}>
          <span className="label-text-alt text-error">{errorText}</span>
        </label>
      </>
    );
  }
);

export default TextField;
