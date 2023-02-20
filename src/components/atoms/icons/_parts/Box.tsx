import { ReactComponent as Icon } from '@assets/icons/box.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Box = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Box);
