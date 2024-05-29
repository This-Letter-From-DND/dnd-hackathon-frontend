import Image from 'next/image';
import { ReactNode } from 'react';

import ProfileIcon from '@/assets/ProfileIcon.svg';
import Font from '@/components/common/Font';

import {
  ProfileSection,
  CardHeader,
  ChoiceItem,
  ChoiceContainer,
  Circle,
  ChoiceSection,
  ProfileDetails,
  ProfileIconContainer,
  CardContainer,
  Line,
} from './styles';

import ResultProgressBar from '../ResultProgressBar';

interface QuestionResultCardProps {
  question: Question;
  children?: ReactNode;
}

export default function QuestionResultCard({
  question,
  children,
}: QuestionResultCardProps) {
  return (
    <CardContainer>
      {children}
      <CardHeader>
        <Font
          fontSize='large'
          fontWeight='bold'
        >
          {question.title}
        </Font>
        <ProfileSection>
          <ProfileDetails>
            <ProfileIconContainer>
              <Image
                src={ProfileIcon}
                alt='profile icon'
              />
            </ProfileIconContainer>
            <Font
              color={700}
              fontSize='small'
            >
              {question.userNickname}
            </Font>
          </ProfileDetails>
          <Circle />
          <ProfileDetails>
            <Font
              color={700}
              fontSize='small'
            >
              답변수
            </Font>
            <Font
              color={700}
              fontSize='small'
              fontWeight='bold'
            >
              {question.answerCount}
            </Font>
          </ProfileDetails>
        </ProfileSection>
      </CardHeader>
      <Line />
      <ChoiceSection>
        <Font color={700}>{question.content}</Font>
        <ChoiceContainer>
          <ChoiceItem>
            <Font
              color={700}
              fontWeight='bold'
            >{`A : ${question.choices[0].content}`}</Font>
          </ChoiceItem>
          <ChoiceItem>
            <Font
              color={700}
              fontWeight='bold'
            >{`B : ${question.choices[1].content}`}</Font>
          </ChoiceItem>
        </ChoiceContainer>
      </ChoiceSection>
      <ResultProgressBar choices={question.choices} />
    </CardContainer>
  );
}
