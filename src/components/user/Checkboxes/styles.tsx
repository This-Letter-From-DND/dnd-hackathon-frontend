import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

export const Label = styled.label<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors[900] : theme.colors[100]};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.white : theme.colors[500]};
`;

export const Checkbox = styled.input`
  display: none;
`;
