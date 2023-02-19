import classNames from 'classnames';
import { ComponentProps, forwardRef, memo, useMemo } from 'react';

interface Dot extends Omit<ComponentProps<'div'>, 'children'> {
  size: string;
}

const Dot = forwardRef<HTMLDivElement, Dot>(
  ({ className, size, ...rest }, ref) => {
    const defaultClass = useMemo(() => {
      return `absolute h-[${size}] w-[${size}] rounded-full`;
    }, [size]);

    return (
      <div
        ref={ref}
        className={classNames(defaultClass, className)}
        {...rest}
      />
    );
  }
);

export default memo(Dot);
