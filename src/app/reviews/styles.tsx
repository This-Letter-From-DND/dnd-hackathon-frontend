import styled from 'styled-components';

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

export const ListContainer = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 0.75rem;
  list-style: none;
`;

export const ReviewItemContainer = styled.li`
  width: 100%;
  height: 97px;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1.25rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const CategoryContainer = styled.div`
  margin-left: 1.5rem;
`;
