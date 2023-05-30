import React from 'react';
import { Textarea, type TextareaProps } from 'react-daisyui';
import { cn } from '../../utils/utils';

type TextAreaProps = TextareaProps & { errorText?: string };

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { errorText, onChange, value, ...otherProps } = props;
    return (
      <>
        <Textarea
          ref={ref}
          className={cn({ 'input-bordered': true, 'input-error': errorText })}
          value={value}
          onInput={onChange}
          {...otherProps}
        ></Textarea>
        <label className="label" htmlFor={otherProps.name}>
          <span className="label-text-alt text-error">{errorText}</span>
        </label>
      </>
    );
  }
);

export default TextArea;
