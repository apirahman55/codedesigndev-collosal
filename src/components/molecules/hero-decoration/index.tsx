import { ComponentProps, forwardRef } from 'react';
import Decoration from '@atoms/decoration';
import Dot from '@atoms/dot';

const HeroDecoration: React.FC<
  Omit<ComponentProps<'div'>, 'children' | 'ref'>
> = (props) => {
  return (
    <Decoration {...props}>
      <Dot
        size='100vh'
        className='bg-green right-[-10vh] left-0 top-[-4vh] mx-auto'
      />
      <Dot size='100vh' className='bg-red right-0 top-[-20vh]' />
      <Dot size='100vh' className='bg-yellow-500 left-[-20vh] top-[10vh]' />
    </Decoration>
  );
};

export default HeroDecoration;
