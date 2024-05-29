import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors[200]};

  > * {
    flex-basis: calc(100% / 4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 4px;

    &:hover {
      cursor: pointer;
    }
  }
`;
