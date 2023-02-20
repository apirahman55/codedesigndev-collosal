import { ComponentProps, forwardRef } from 'react';
import { Copy } from '@atoms/icons';

const Logo = forwardRef<HTMLDivElement, ComponentProps<'div'>>((props, ref) => {
  return (
    <div ref={ref} {...props} className='flex'>
      <Copy />
      <div className='text'>Collosal.</div>
    </div>
  );
});

export default Logo;
