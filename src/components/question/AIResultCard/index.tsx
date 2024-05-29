import Image from 'next/image';

import AIProfileIcon from '@/assets/AIProfileIcon.svg';
import Font from '@/components/common/Font';

import {
  AICardContainer,
  AIIconContainer,
  AIResultButton,
  AIResultContainer,
  AIRightContainer,
  AITextBottom,
  AITextMiddle,
  AITextTop,
} from './styles';

interface AIResultCardProps {
  question: Question;
  onClick: (question: Question) => void;
}

export default function AIResultCard({ question, onClick }: AIResultCardProps) {
  return (
    <AICardContainer>
      <AIIconContainer>
        <Image
          src={AIProfileIcon}
          alt='ai profile icon'
        />
      </AIIconContainer>
      {question.aiAnswer !== null ? (
        <AIRightContainer>
          <AITextTop>
            <Font fontSize='small'>
              AI도
              <strong>{question.aiAnswer.choiceId === 1 ? 'A' : 'B'}</strong>를
              선택했어요
            </Font>
          </AITextTop>
          <AITextBottom>
            <Font fontSize='small'>
              왜냐면 <strong>{question.aiAnswer.reason}</strong>
            </Font>
          </AITextBottom>
        </AIRightContainer>
      ) : (
        <AIResultContainer>
          <AITextMiddle>
            <Font fontSize='small'>AI 답변도 궁금한가요? </Font>
          </AITextMiddle>
          <AIResultButton onClick={() => onClick(question)}>
            <Font
              color='white'
              fontSize='small'
            >
              AI답변보기
            </Font>
          </AIResultButton>
        </AIResultContainer>
      )}
    </AICardContainer>
  );
}
