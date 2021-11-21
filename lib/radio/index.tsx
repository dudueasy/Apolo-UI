import React, {InputHTMLAttributes} from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement>;

export const InternalRadio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = ((props, ref) => {
  const children = props.children

  return <label>
    <input
      type="radio"
      ref={ref}
    >
      {
        children ? children : null
      }
    </input>
  </label>
})

export const Radio = React.forwardRef<unknown, RadioProps>(InternalRadio)
