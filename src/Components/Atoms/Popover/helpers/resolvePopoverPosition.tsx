import { css } from 'styled-components';

import { POSITIONS, POPOVER_SPACE_BETWEEN } from '../consts';

const resolvePopoverPosition: ResolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
  overlapped,
}) => {
  if (position === POSITIONS.TOP) {
    return css`
      top: ${Math.floor(
        containerTop - popoverHeight - (overlapped ? -containerHeight : POPOVER_SPACE_BETWEEN),
      )}px; /* TODO: use token */
    `;
  }
  if (position === POSITIONS.BOTTOM) {
    return css`
      top: ${Math.floor(
        containerTop + (overlapped ? 0 : containerHeight + POPOVER_SPACE_BETWEEN),
      )}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverPosition;
