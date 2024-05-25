import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #212529;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled(Image)`
  width: 28px;
  height: 28px;
  margin-right: 0.25rem;
`;

export const Text = styled.span`
  color: #495057;
  font-size: 14px;
  margin-right: 18px;
`;
