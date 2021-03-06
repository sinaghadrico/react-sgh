import { css } from 'styled-components';

import mediaQueries from 'utils/mediaQuery/index';
import { DEVICES } from 'utils/mediaQuery/consts';
import getDisplay from './getDisplay';

const getViewportHideStyles: GetViewportHideStyles = (on, block) =>
  DEVICES.map(viewport =>
    viewport in mediaQueries
      ? css`
          ${mediaQueries[viewport](css`
            display: ${on.indexOf(viewport) !== -1 ? 'none' : getDisplay({ block })};
          `)};
        `
      : // "smallMobile" is not media query so we need to check it explicitly
        viewport === 'smallMobile' &&
        on.indexOf(viewport) !== -1 &&
        css`
          display: none;
        `,
  );

export default getViewportHideStyles;
