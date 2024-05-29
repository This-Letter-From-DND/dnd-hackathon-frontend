import styled from 'styled-components';

import { theme } from '@/styles/theme';

import { FontTypes } from '.';

export const FontStyle = styled.span<FontTypes>`
  color: ${(props) => theme.colors[props.color || 900]};
  font-size: ${(props) => theme.font.fontSizes[props.fontSize || 'medium']};
  font-weight: ${(props) =>
    theme.font.fontWeights[props.fontWeight || 'regular']};
`;
