import user from '@/assets/user.svg';
import Font from '@/components/common/Font';

import {
  Title,
  Profile,
  ImageContainer,
  Text,
  Container,
  Hits,
} from './styles';
export default function ReviewItem() {
  return (
    <Container>
      <Title>
        <Font
          fontSize='large'
          fontWeight='bold'
        >
          바나나 맛있냐고 후기쓴 사람임
        </Font>
      </Title>
      <Profile>
        <ImageContainer
          src={user}
          alt='user'
        />
        <Text>
          <Font
            color={700}
            fontSize='small'
          >
            닉네임은 커피
          </Font>
        </Text>
        <Hits>
          <Font
            color={700}
            fontSize='small'
          >
            조회수
          </Font>
          <Font
            color={700}
            fontSize='small'
            fontWeight='bold'
          >
            98
          </Font>
        </Hits>
      </Profile>
    </Container>
  );
}
