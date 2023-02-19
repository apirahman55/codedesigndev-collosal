import { ComponentProps, forwardRef, memo } from 'react';

const Decoration = forwardRef<
  HTMLDivElement,
  Omit<ComponentProps<'div'>, 'className'>
>(({ children }, ref) => {
  return (
    <div ref={ref} className='absolute left-0 h-full w-full z-[0]'>
      <div className='h-full relative -z-[1]'>{children}</div>

      <div className='bg-dark opacity-90 absolute top-0 h-full w-full z-[2]' />
      <div className='absolute backdrop-blur-[80px] h-full w-full top-0 z-[1]' />
    </div>
  );
});

export default memo(Decoration);
