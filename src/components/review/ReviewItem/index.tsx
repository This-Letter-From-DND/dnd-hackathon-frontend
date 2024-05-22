import user from '@/assets/user.svg';

import {
  ReviewItemStyle,
  Title,
  Profile,
  ImageContainer,
  Text,
} from './styles';
export default function ReviewItem() {
  return (
    <ReviewItemStyle>
      <Title>바나나</Title>
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
    </ReviewItemStyle>
  );
}
