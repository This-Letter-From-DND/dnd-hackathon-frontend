import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
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
  margin-right: 18px;
`;

export const Hits = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
