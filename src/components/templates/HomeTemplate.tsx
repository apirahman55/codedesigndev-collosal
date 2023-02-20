import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import { Box } from '../atoms/icons';
import HeroDecoration from '../molecules/hero-decoration';

const HomeTemplate = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className='bg-dark text-white min-h-screen relative'
        {...rest}
      >
        <HeroDecoration />
      </div>
    );
  }
);

export default HomeTemplate;
