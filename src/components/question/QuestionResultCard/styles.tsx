import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 20px 20px 0 0;
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors[50]};
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.colors[700]};
`;
export const ProfileDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ProfileIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;

export const Circle = styled.div`
  width: 3px;
  height: 3px;
  background-color: ${(props) => props.theme.colors[300]};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
`;

export const Line = styled.hr`
  color: ${(props) => props.theme.colors[200]};
  margin: 12px 0px;
`;

export const ChoiceContainer = styled.div`
  border-left: 3px solid;
  border-color: ${(props) => props.theme.colors[300]};
`;
export const ChoiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  margin-bottom: 16px;
`;
export const ChoiceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 9px;
`;
