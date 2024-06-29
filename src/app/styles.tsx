import styled from 'styled-components';

interface ContainerStyledProps {
  $marginTop: string;
}

interface MainStyledProps {
  $isEmpty: boolean;
}

export const MainStyled = styled.main<MainStyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => !props.$isEmpty && '/MainBackground.svg'});
`;

export const ContainerStyled = styled.div<ContainerStyledProps>`
  margin-top: calc(${(props) => props.$marginTop});
`;

export const LogoContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 24px 0px 24px;

  > span {
    cursor: pointer;
  }
`;

export const BananaCountStyled = styled.div`
  background-color: ${(props) => props.theme.colors[900]};
  padding: 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors[100]};
  gap: 4px;
`;

export const SkipStyled = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 380px;
  min-height: 250px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors[300]};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid ${(props) => props.theme.colors[300]};
  background-color: ${(props) => props.theme.colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -6px;
  right: 0;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 10px;
    width: 190px;
    min-height: 115px;
    border: 1px solid ${(props) => props.theme.colors[300]};
    background-color: ${(props) => props.theme.colors.white};
    border: none;

    &.left {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      border-right: 0.5px solid ${(props) => props.theme.colors[300]};
    }
    &.right {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      border-left: 0.5px solid ${(props) => props.theme.colors[300]};
    }
  }
`;

export const TransparentButtonContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 380px;
  display: flex;

  > button {
    flex-grow: 1;
    min-height: 115px;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const FooterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const AddQuestion = styled.div`
  position: absolute;
  left: 54px;
  bottom: 108px;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 10px 14px 10px;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
  }

  > img {
    margin-top: 0.25rem;
  }
`;
