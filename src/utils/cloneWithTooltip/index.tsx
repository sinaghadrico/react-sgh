import { cloneElement } from 'react';
const cloneWithTooltip: CloneWithTooltip = (tooltip, children) => {
  if (!tooltip) return children;
  return cloneElement(tooltip, {
    children,
  });
};

export default cloneWithTooltip;
