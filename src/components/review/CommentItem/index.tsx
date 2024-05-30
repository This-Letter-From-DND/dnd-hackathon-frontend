import Image from 'next/image';

import MoreIcon from '@/assets/MoreIcon.svg';
import ProfileIcon from '@/assets/ProfileIcon.svg';
import Font from '@/components/common/Font';

import {
  CommentContainer,
  CommentContent,
  Name,
  Time,
  UserInfo,
  UserInfoContainer,
} from './styles';

export default function CommentItem() {
  return (
    <CommentContainer>
      <UserInfoContainer>
        <UserInfo>
          <Image
            src={ProfileIcon}
            alt='profile icon'
          ></Image>
          <Name>
            <Font
              color={700}
              fontSize='xsmall'
            >
              닉네임은커피
            </Font>
          </Name>
          <Time>
            <Font
              color={700}
              fontSize='xsmall'
            >
              2024.04.04
            </Font>
          </Time>
        </UserInfo>
        <Image
          src={MoreIcon}
          alt='more icon'
        />
      </UserInfoContainer>
      <CommentContent>피자헛 좋다</CommentContent>
    </CommentContainer>
  );
}
