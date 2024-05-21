import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  > * {
    flex-basis: calc(100% / 3);
  }
`;

export const HeaderTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderDoneStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
