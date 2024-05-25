import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  margin: 0rem 1.5rem;
  flex-grow: 1;
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

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const TitleContainer = styled.div`
  height: 61px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Line = styled.div`
  margin: 0.75rem 0rem;
  border: 1px solid #e9ecef;
`;

export const Content = styled.div`
  color: #495057;
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 17.5rem;
  margin: 0.75rem 0rem 1.25rem 0rem;
`;

export const OriginalQuestionButton = styled.span`
  color: #2f80ed;
  font-weight: 600;
`;

export const CommentContainer = styled.div`
  margin-top: 1.25rem;
  height: 244px;
  display: flex;
  flex-direction: column;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentCount = styled.span`
  color: #495057;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const UserInfo = styled.span`
  display: flex;
  align-items: center;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Name = styled.span`
  margin: 0rem 0.75rem 0rem 0.25rem;
  font-size: 0.875rem;
  color: #495057;
`;

export const Time = styled.span`
  font-size: 0.875rem;
  color: #495057;
`;

export const CommentContent = styled.div`
  color: #212529;
  margin: 0.5rem 0rem 1rem 0rem;
`;
