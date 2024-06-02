import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.colors[300]};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors[200]};
`;

export const ProgressBarSection = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
`;

interface ProgressBarDetailsProps {
  ratio: string;
  direction: 'left' | 'right';
}

export const ProgressBarDetails = styled.div<ProgressBarDetailsProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.direction === 'left' ? 'flex-start' : 'flex-end'};
  align-items: center;
  height: 100%;
  width: ${(props) => props.ratio};
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  ${(props) => (props.direction === 'left' ? 'left: 0;' : 'right: 0;')}
  border-radius: 8px;
`;

export const LabelWrap = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.direction === 'left' ? 'flex-start' : 'flex-end'};
  margin: ${(props) =>
    props.direction === 'left' ? '0 0 0 10px' : '0 10px 0 0'};

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
  position: absolute;
`;

export const LabelRight = styled(Label)<{ $small?: boolean }>`
  right: 0;
  color: ${(props) => (props.$small ? props.theme.colors[500] : '')};
  position: absolute;
`;
