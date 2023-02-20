import { ReactComponent as Icon } from '@assets/icons/copy.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Copy = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Copy);
