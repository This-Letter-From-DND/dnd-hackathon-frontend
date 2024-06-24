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

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const router = useRouter();

  const handleClickButton = () => {
    router.push(`${ROUTE_PATHS.reviews}/${review.reviewId}`);
  };

  return (
    <Container onClick={handleClickButton}>
      <Title>
        <Font
          fontSize='large'
          fontWeight='bold'
        >
          {review.title}
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
            {review.nickname}
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
            {review.viewCount}
          </Font>
        </Hits>
      </Profile>
    </Container>
  );
}
