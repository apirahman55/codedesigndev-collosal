import { ComponentProps, forwardRef, memo, useCallback } from 'react';
import classNames from 'classnames';
interface Button extends Omit<ComponentProps<'button'>, 'className'> {
  color?: 'light' | 'dark' | 'white' | 'primary';
  outline?: boolean;
  rounded?: boolean;
  label?: string;
  sm?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Button>(
  ({ color, outline, rounded, label, sm }, ref) => {
    const classes = useCallback(
      (className: string) => {
        return classNames(className, {
          'bg-primary text-white': color === 'primary' && !outline,
          'bg-primary-light text-white': color === 'dark' && !outline,
          'bg-white text-black': color === 'white' && !outline,
          'bg-light-normal text-white':
            (color === 'light' || !color) && !outline,
          'border-primary border-2 bg-transparent text-primary':
            color === 'primary' && outline,
          'border-primary-light border-2 bg-transparent text-primary':
            color === 'dark' && outline,
          'border-white border-2 bg-transparent text-white':
            color === 'white' && outline,
          'border-light-normal border-2 bg-transparent text-white':
            (color === 'light' || !color) && outline,
          'rounded-full': rounded,
          'rounded-lg': !rounded,
          'text-sm': sm,
        });
      },
      [color, outline, rounded, sm]
    );

    return (
      <button ref={ref} className={classes('py-2 px-8')}>
        {label}
      </button>
    );
  }
);

export default memo(Button);
