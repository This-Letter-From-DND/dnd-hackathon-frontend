import { useRouter } from 'next/navigation';

import ProfileIcon from '@/assets/ProfileIcon.svg';
import Font from '@/components/common/Font';
import { ROUTE_PATHS } from '@/constants/config';

import {
  Title,
  Profile,
  ImageContainer,
  Text,
  Container,
  Hits,
} from './styles';

export default function ReviewItem() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push(`${ROUTE_PATHS.reviews}/1`);
  };

  return (
    <Container onClick={handleClickButton}>
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
          src={ProfileIcon}
          alt='profile icon'
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
