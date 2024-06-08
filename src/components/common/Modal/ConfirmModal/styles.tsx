import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem;
`;

export const Button = styled.button`
  flex-basis: calc(100% / 2);
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors[300]};

  > :first-child {
    border-right: 1px solid ${(props) => props.theme.colors[300]};
  }
`;
