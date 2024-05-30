import styled from 'styled-components';

export const CommentContainer = styled.div`
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
`;

export const Time = styled.span`
  font-size: 0.875rem;
`;

export const CommentContent = styled.div`
  margin: 0.5rem 0rem 1rem 0rem;
`;
