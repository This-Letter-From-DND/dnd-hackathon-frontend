import user from '@/assets/user.svg';

import { Title, Profile, ImageContainer, Text, Container } from './styles';
export default function ReviewItem() {
  return (
    <Container>
      <Title>바나나 맛있냐고 후기쓴 사람임</Title>
      <Profile>
        <ImageContainer
          src={user}
          alt='user'
        />
        <Text>닉네임은 커피</Text>
        <Text>
          조회수 <strong>98</strong>
        </Text>
      </Profile>
    </Container>
  );
}
