import { ReactComponent as Icon } from '@assets/icons/figma.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Figma = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Figma);
