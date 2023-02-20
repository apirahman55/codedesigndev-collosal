import { ReactComponent as Icon } from '@assets/icons/team-illustration.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const TeamIllustration = forwardRef<SVGSVGElement, ComponentProps<'svg'>>(
  (props, ref) => {
    return <Icon ref={ref} {...props} />;
  }
);

export default memo(TeamIllustration);
