import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import BaseButton from '../atoms/button';
import DecorationHero from '../molecules/home/decoration/decoration-hero';

const HomeTemplate = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className='bg-dark text-white min-h-screen relative'
        {...rest}
      >
        <BaseButton />
      </div>
    );
  }
);

export default HomeTemplate;
