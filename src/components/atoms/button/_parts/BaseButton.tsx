import { ComponentProps, forwardRef } from 'react';

const BaseButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<'button'>, 'className'>
>((props, ref) => {
  return (
    <button className='bg-light-normal py-2 px-8 m-4 rounded-md'>
      Contact
    </button>
  );
});

export default BaseButton;
