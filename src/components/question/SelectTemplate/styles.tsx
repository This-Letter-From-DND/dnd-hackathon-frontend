import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

interface TitleProps {
  theme: {
    font: {
      fontStyle: {
        bold: string;
      };
    };
    colors: {
      neutral: {
        900: string;
      };
    };
  };
}

export const Title = styled.div`
  margin-bottom: 0.75rem;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
  color: ${(props) => props.theme.colors.neutral[900]};
`;
