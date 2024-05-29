import styled from 'styled-components';

export const RadioButtonStyle = styled.li`
  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + label {
    min-width: 68px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1rem;
    margin: 0.5rem 0.5rem 0.5rem 0rem;
    border-radius: 5rem;
    background-color: ${(props) => props.theme.colors[200]};
    color: ${(props) => props.theme.colors[500]};
    white-space: nowrap;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme.colors[900]};
    color: ${(props) => props.theme.colors.white};
  }
`;
