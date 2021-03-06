import React from 'react';
import styled, { css } from 'styled-components';

import Slide from 'utils/Slide';
import defaultTheme from 'utils/token';
import randomID from 'utils/randomID';
import Heading from '../Heading';
import Stack from '../Stack';
import ButtonLink from '../ButtonLink';
import Icon from '../Icon';

const AnimatedIcon = styled(Icon)<{ expanded }>`
  transition: transform ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(180deg);
    `};
`;

AnimatedIcon.defaultProps = {
  theme: defaultTheme,
};
const StyledCollapse = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.jajiga.paletteCloudNormal};
  padding-bottom: ${({ theme }) => theme.jajiga.spaceXLarge};
  margin-bottom: ${({ theme }) => theme.jajiga.spaceXLarge};
  :last-child,
  :only-child {
    border: 0;
    margin: 0;
  }
`;

StyledCollapse.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseLabel = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

const StyledCollapseChildren = styled.div`
  margin-top: ${({ theme }) => theme.jajiga.spaceXSmall};
`;

StyledCollapseChildren.defaultProps = {
  theme: defaultTheme,
};

const Collapse = ({
  initialExpanded = false,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  onClick,
}: CollapseProps) => {
  const isControlledComponent = React.useMemo(() => expandedProp != null, [expandedProp]);
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [contentHeight, setContentHeight] = React.useState(expanded ? null : 0);
  const node = React.useRef(null);

  React.useEffect(() => {
    const calculateHeight = () => {
      if (node && node.current) {
        const { height } = node.current.getBoundingClientRect();
        setContentHeight(height);
      }
    };

    calculateHeight();

    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  const slideID = React.useMemo(() => randomID('slideID'), []);
  const labelID = React.useMemo(() => randomID('labelID'), []);

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }
        setExpandedState(!expanded);
      }
      if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <StyledCollapse data-test={dataTest}>
      <StyledCollapseLabel
        onClick={handleClick}
        role="button"
        aria-expanded={expanded}
        aria-controls={slideID}
        id={labelID}>
        <Stack direction="row" justify="between" align="center">
          <Heading type="title4" element="div">
            {label}
          </Heading>
          <ButtonLink iconLeft="" transparent size="small" type="secondary" />
        </Stack>
      </StyledCollapseLabel>
      <Slide maxHeight={contentHeight} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <StyledCollapseChildren ref={node}>{children}</StyledCollapseChildren>
      </Slide>
    </StyledCollapse>
  );
};

export default Collapse;
