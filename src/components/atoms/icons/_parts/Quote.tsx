import { ReactComponent as Icon } from '@assets/icons/quote.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Quote = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Quote);
