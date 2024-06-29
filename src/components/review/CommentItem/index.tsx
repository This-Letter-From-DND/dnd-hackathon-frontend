import Image from 'next/image';

import MoreIcon from '@/assets/MoreIcon.svg';
import ProfileIcon from '@/assets/ProfileIcon.svg';
import Font from '@/components/common/Font';
import { formatDate } from '@/utils/fomatDate';

import {
  CommentContainer,
  CommentContent,
  Name,
  Time,
  UserInfo,
  UserInfoContainer,
} from './styles';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
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
              {comment.nickname}
            </Font>
          </Name>
          <Time>
            <Font
              color={700}
              fontSize='xsmall'
            >
              {formatDate(comment.createdAt || '')}
            </Font>
          </Time>
        </UserInfo>
        <Image
          src={MoreIcon}
          alt='more icon'
        />
      </UserInfoContainer>
      <CommentContent> {comment.content}</CommentContent>
    </CommentContainer>
  );
}
