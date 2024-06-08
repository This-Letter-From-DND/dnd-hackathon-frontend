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
  border-radius: 8px;
`;

export const ProgressBarSection = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
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

  > :first-child {
    margin-right: 0.5rem;
  }
`;

export const LabelLeft = styled.div`
  left: 10px;
  position: absolute;
`;

export const LabelRight = styled.div`
  right: 10px;
  position: absolute;
`;
