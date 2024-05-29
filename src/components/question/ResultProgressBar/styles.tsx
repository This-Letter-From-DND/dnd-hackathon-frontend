import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%; /* 전체 너비 */
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.colors[300]};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors[200]}; /* 배경색 */
  border-radius: 8px; /* 테두리 둥글게 */
`;

export const ProgressBarSection = styled.div`
  width: 100%;
  height: 40px;
`;

interface ProgressBarDetailsProps {
  ratio: string;
  direction: 'left' | 'right';
}

export const ProgressBarDetails = styled.div<ProgressBarDetailsProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.direction};
  align-items: center;
  height: 100%;
  width: ${(props) => props.ratio};
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 8px; /* 테두리 둥글게 */
`;

export const LabelWrap = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.direction};

  > :first-child {
    margin-right: 0.5rem;
  }
`;

export const Label = styled.div`
  color: ${(props) => props.theme.colors[700]};
  font-size: ${(props) => props.theme.font.fontSizes.large};
`;

export const LabelLeft = styled(Label)<{ $small?: boolean }>`
  left: 0;
  color: ${(props) => (props.$small ? props.theme.colors[500] : '')};
  margin-left: 10px; /* 좌측 라벨 패딩 */
`;

export const LabelRight = styled(Label)<{ $small?: boolean }>`
  right: 0; /* 오른쪽에서 시작 */
  padding-right: 10px; /* 우측 패딩 */
  color: ${(props) => (props.$small ? props.theme.colors[500] : '')};
`;
