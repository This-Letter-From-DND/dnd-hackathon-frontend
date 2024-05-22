'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ai from '@/assets/aiai.svg';
import user from '@/assets/user.svg';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ROUTE_PATHS } from '@/constants/config';
import { getQuestionApi } from '@/services/question';

interface Choice {
  content: string;
  percent: number;
}

interface AiAnswer {
  choiceId: number;
  reason: string;
}

interface Question {
  questionId: number;
  createdAt: string;
  title: string;
  userNickname: string;
  answerCount: number;
  content: string;
  choices: Choice[];
  aiAnswer: AiAnswer | null;
}

export default function MyQuestions() {
  const router = useRouter();
  const [questionList, setQuestionList] = useState<Question[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data: Question[] = await getQuestionApi(1);
      setQuestionList(data);
    };
    getData();
  }, []);

  const handleClickButton = () => {};
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'내가 쓴 질문'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ListContainer>
        {questionList?.map((question, index) => (
          <QuestionCardContainer key={index}>
            <QuestionCard>
              <TimeContainer>
                <Time>{formatDate(question.createdAt || '')}</Time>
                <Button
                  onClick={() =>
                    router.push(
                      `${ROUTE_PATHS.newReview}/${question.questionId}`,
                    )
                  }
                >
                  후기작성
                </Button>
              </TimeContainer>
              <CardTop>
                <CardTitle>{question.title}</CardTitle>
                <CardProfileBox>
                  <ProfileBox>
                    <ProfileIcon>
                      <Image
                        src={user}
                        alt='user'
                      />
                    </ProfileIcon>
                    <ProfileText>{question.userNickname}</ProfileText>
                  </ProfileBox>
                  <Circle />
                  <ProfileBox>
                    <ProfileText>{`답변수 ${question.answerCount}`}</ProfileText>
                  </ProfileBox>
                </CardProfileBox>
              </CardTop>
              <Hr></Hr>
              <Content>
                <Description>{question.content}</Description>
                <ChoiceBox>
                  <Choice>
                    <AB>A</AB>
                    <div>{`: ${question.choices[0].content}`}</div>
                  </Choice>
                  <Choice>
                    <AB>B</AB>
                    <div>{`: ${question.choices[1].content}`}</div>
                  </Choice>
                </ChoiceBox>
              </Content>
              <ProgressBarContainer>
                {question.choices[0].percent >= question.choices[1].percent ? (
                  <Div>
                    <ProgressBar
                      ratio={`${question.choices[0].percent}%`}
                      direction='left'
                    >
                      <LeftLabel>
                        <LabelWrap direction='left'>
                          <div>
                            A <Span>{`${question.choices[0].percent}%`}</Span>
                          </div>
                        </LabelWrap>
                      </LeftLabel>
                    </ProgressBar>
                    <RightLabel $small={true}>
                      {question.choices[1].percent === 0 ? '' : 'B'}
                    </RightLabel>
                  </Div>
                ) : (
                  <Div>
                    <LeftLabel $small={true}>
                      {question.choices[0].percent === 0 ? '' : 'A'}
                    </LeftLabel>
                    <ProgressBar
                      ratio={`${question.choices[1].percent}%`}
                      direction='right'
                    >
                      <RightLabel>
                        <LabelWrap direction='right'>
                          <div>
                            <Span>{`${question.choices[1].percent}%`}</Span>B
                          </div>
                        </LabelWrap>
                      </RightLabel>
                    </ProgressBar>
                  </Div>
                )}
              </ProgressBarContainer>
            </QuestionCard>
            <AICard>
              <AiIcon>
                <Image
                  src={ai}
                  alt='ai'
                />
              </AiIcon>
              {question.aiAnswer === null ? (
                <AIButtonContainer>
                  <AIMiddle>AI 답변도 궁금한가요?</AIMiddle>
                  <AIButton onClick={handleClickButton}>AI답변보기</AIButton>
                </AIButtonContainer>
              ) : (
                <AIRight>
                  <AITop>
                    AI도 {question.aiAnswer.choiceId === 1 ? 'A' : 'B'}를
                    선택했어요
                  </AITop>
                  <AIBottom>
                    왜냐면 {question.aiAnswer.reason}는 맛있으니까!
                  </AIBottom>
                </AIRight>
              )}
            </AICard>
          </QuestionCardContainer>
        ))}
      </ListContainer>
      <Footer />
    </Wrapper>
  );
}

const AICard = styled.div`
  width: 100%;
  min-height: 68px;
  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: ${(props) => props.theme.colors.neutral[300]};
  border-radius: 0 0 20px 20px;
`;
const AIRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const AITop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const AIBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const ProgressBarContainer = styled.div`
  width: 100%; /* 전체 너비 */
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.colors.neutral[300]};
  justify-content: space-between;
  background-color: #ddd; /* 배경색 */
  border-radius: 8px; /* 테두리 둥글게 */
`;

interface ProgressBarProps {
  ratio: string;
  direction: 'left' | 'right';
}

const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.direction};
  align-items: center;
  height: 100%;
  width: ${(props) => props.ratio};
  background-color: ${(props) => props.theme.colors.main.primary};

  border-radius: 8px; /* 테두리 둥글게 */
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.colors.neutral[300]};
  margin: 12px 0px;
`;
const Span = styled.span`
  font-weight: ${(props) => props.theme.font.fontStyle.medium};
`;

const ChoiceBox = styled.div`
  border-left: 3px solid;
  border-color: ${(props) => props.theme.colors.neutral[300]};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: ${(props) => props.theme.font.fontSize.medium};
  gap: 8px;
  margin-bottom: 16px;
`;
const Choice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 9px;

  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;
const LabelWrap = styled.div<{ direction: string }>`
  display: flex;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
  justify-content: ${(props) => props.direction};
  > div {
    display: flex;
    gap: 4px;
  }
`;
const AB = styled.div`
  width: 16px;
`;

const Label = styled.div`
  color: #333;
  font-size: ${(props) => props.theme.font.fontSize.large};
`;
const LeftLabel = styled(Label)<{ $small?: boolean }>`
  left: 0;
  color: ${(props) => (props.$small ? props.theme.colors.neutral[500] : '')};
  margin-left: 10px; /* 좌측 라벨 패딩 */
`;
const RightLabel = styled(Label)<{ $small?: boolean }>`
  right: 0; /* 오른쪽에서 시작 */
  padding-right: 10px; /* 우측 패딩 */
  color: ${(props) => (props.$small ? props.theme.colors.neutral[500] : '')};
`;

const Description = styled.div``;

const QuestionCard = styled.div`
  border-radius: 20px 20px 0 0;
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutral[50]};
`;

const CardTitle = styled.div`
  color: ${(props) => props.theme.font.colors.black};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
  font-size: ${(props) => props.theme.font.fontSize.large};
`;

const CardProfileBox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral[700]};
`;
const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
`;

const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;
const ProfileText = styled.div`
  font-size: 0.875rem;
`;

const Circle = styled.div`
  width: 3px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.neutral[300]};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const AiIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  margin-right: 0.5rem;
`;

const Div = styled.div`
  width: 100%;
  height: 40px;
`;

const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

const QuestionCardContainer = styled.div`
  margin-bottom: 20px;
`;

const AIMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const AIButton = styled.button`
  background-color: #868e96;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AIButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Time = styled.div`
  color: #495057;
`;
const Button = styled.div`
  background-color: #2f80ed;
  color: #ffffff;
  font-size: 14px;
  width: 89px;
  height: 38px;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
