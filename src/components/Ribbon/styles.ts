import styled, { css, DefaultTheme } from 'styled-components';
import { RibbonColors, RibbonProps } from '.';

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
};
export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color }) => css`
    ${wrapperModifiers.color(theme, color!)}
  `}
`;
