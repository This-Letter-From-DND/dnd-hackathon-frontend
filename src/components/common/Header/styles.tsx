import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
`;

export const HeaderLeftStyled = styled.div`
  display: flex;
  align-items: center;
  flex-basis: calc(100% / 4);

  > img {
    cursor: pointer;
  }
`;

export const HeaderTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const HeaderDoneStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: calc(100% / 4);
`;
