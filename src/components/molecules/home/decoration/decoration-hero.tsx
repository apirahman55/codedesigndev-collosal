import { ComponentProps, forwardRef } from 'react';
import Decoration from '../../../atoms/decoration';
import Dot from '../../../atoms/dot';

const DecorationHero = forwardRef<
  HTMLDivElement,
  Omit<ComponentProps<'div'>, 'children' | 'ref'>
>((props, ref) => {
  return (
    <Decoration ref={ref} {...props}>
      <Dot
        size='100vh'
        className='bg-green right-[-10vh] left-0 top-[-4vh] mx-auto'
      />
      <Dot size='100vh' className='bg-red right-0 top-[-20vh]' />
      <Dot
        size='100vh'
        className='bg-yellow-500 rounded-full left-[-20vh] top-[10vh]'
      />
    </Decoration>
  );
});

export default DecorationHero;
