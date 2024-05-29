import styled from 'styled-components';

export const AICardContainer = styled.div`
  width: 100%;
  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: ${(props) => props.theme.colors[300]};
  border-radius: 0 0 20px 20px;
`;

export const AIIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  margin-right: 0.5rem;
`;

export const AIRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AITextTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const AITextBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const AITextMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const AIResultButton = styled.button`
  background-color: ${(props) => props.theme.colors[600]};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const AIResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;
