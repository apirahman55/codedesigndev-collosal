import { ReactComponent as Icon } from '@assets/icons/code.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Code = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Code);
