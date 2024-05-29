'use client';

import { RemoteRunnable } from '@langchain/core/runnables/remote';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ai from '@/assets/aiai.svg';
import allow from '@/assets/allow.svg';
import user from '@/assets/user.svg';
import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { postAIAnswer } from '@/services/ai';
import { getAllQuestionApi } from '@/services/question';

const chain = new RemoteRunnable({
  url: `https://becoming-dodo-roughly.ngrok-free.app/answer-ai/`,
  // headers: {
  //   'ngrok-skip-browser-warning': 'skip', //ngrok오류로 인해 넣어준 헤더
  // },
});

interface Choice {
  content: string;
  percent: number;
}

interface Question {
  questionId: number;
  createdAt: string;
  title: string;
  userNickname: string;
  answerCount: number;
  content: string;
  choices: Choice[];
  choice?: string | null;
  reason?: string | null;
}

interface AiAnswerResponse {
  response: {
    choice: string;
    reason: string;
  };
  content: string;
}

export default function Questions() {
  const [list, setList] = useState<Question[]>([]);
  const [sort, setSort] = useState<string>('recent');
  const [agree, setAgree] = useState<boolean>(false);

  const listWithResponse = list.map((element) => {
    if (element.reason) {
      return {
        ...element,
      };
    }
    return {
      ...element,
      choice: null,
      reason: null,
    };
  });

  useEffect(() => {
    console.log(listWithResponse);
  }, [listWithResponse]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllQuestionApi(1, sort, agree);
      console.log(data);
      setList(data);
    };
    getData();
  }, [sort, agree]);

  //ai에 api 요청
  const handleClickButton = async (item: Question) => {
    const res: any = await chain.invoke({
      question: item.content,
      choiceA: item.choices[0].content,
      choiceB: item.choices[1].content,
    });
    console.log(await res);
    const answer: AiAnswerResponse = await JSON.parse(
      res.content.replace('\n', ''),
    );

    console.log(answer);

    //const answer = await JSON.parse(response);
    setList((prevList) =>
      prevList.map((prevItem) => {
        console.log(prevItem);
        console.log(item);
        if (prevItem.questionId === item.questionId && answer.response.reason) {
          return {
            ...prevItem,
            choice: answer.response.choice,
            reason: answer.response.reason,
          };
        }
        return {
          ...prevItem,
        };
      }),
    );

    const req = await {
      userId: 0,
      questionId: item.questionId,
      choiceId: answer.response.choice === 'A' ? 1 : 2,
      reason: answer?.response?.reason,
    };
    const res2 = await postAIAnswer(req);

    console.log('final', res2);
  };

  return (
    <Wrapper>
      <Header
        title='전체 질문 목록'
        canGoBack={true}
        canDone={false}
      />
      <SortContainer>
        <AllowContainer
          onClick={() => {
            setSort(sort === 'recent' ? 'popular' : 'recent');
          }}
        >
          <Image
            src={allow}
            alt='allow'
          />
          {sort === 'recent' ? <Font>최신순</Font> : <Font>인기순</Font>}
        </AllowContainer>
        <CheckContainer>
          <label htmlFor='agree'>
            <Input
              type='checkbox'
              id='agree'
              name='agree'
              checked={agree}
              onChange={() => {
                setAgree(!agree);
              }}
            />
            <Font>내가 답한 것만 보기</Font>
          </label>
        </CheckContainer>
      </SortContainer>
      <ListContainer>
        {listWithResponse?.map((item, index) => (
          <QuestionCardContainer key={index}>
            <QuestionCard>
              <CardTop>
                <Font
                  fontSize='large'
                  fontWeight='bold'
                >
                  {item.title}
                </Font>
                <CardProfileBox>
                  <ProfileBox>
                    <ProfileIcon>
                      <Image
                        src={user}
                        alt='user'
                      />
                    </ProfileIcon>
                    <Font
                      color={700}
                      fontSize='small'
                    >
                      {item.userNickname}
                    </Font>
                  </ProfileBox>
                  <Circle />
                  <ProfileBox>
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
                      {item.answerCount}
                    </Font>
                  </ProfileBox>
                </CardProfileBox>
              </CardTop>
              <Hr />
              <Content>
                <Font color={700}>{item.content}</Font>
                <ChoiceBox>
                  <Choice>
                    <Font
                      color={700}
                      fontWeight='bold'
                    >{`A : ${item.choices[0].content}`}</Font>
                  </Choice>
                  <Choice>
                    <Font
                      color={700}
                      fontWeight='bold'
                    >{`B : ${item.choices[1].content}`}</Font>
                  </Choice>
                </ChoiceBox>
              </Content>
              <ProgressBarContainer>
                {item.choices[0].percent >= item.choices[1].percent ? (
                  <Div>
                    <ProgressBar
                      ratio={`${item.choices[0].percent}%`}
                      direction='left'
                    >
                      <LeftLabel>
                        <LabelWrap direction='left'>
                          <Font
                            fontWeight='bold'
                            fontSize='large'
                          >
                            A
                          </Font>
                          <Font fontSize='large'>{`${item.choices[0].percent}%`}</Font>
                        </LabelWrap>
                      </LeftLabel>
                    </ProgressBar>
                    <RightLabel $small={true}>
                      {item.choices[1].percent === 0 ? '' : ''}
                    </RightLabel>
                  </Div>
                ) : (
                  <Div>
                    <LeftLabel $small={true}>
                      {item.choices[0].percent === 0 ? '' : 'A'}
                    </LeftLabel>
                    <ProgressBar
                      ratio={`${item.choices[1].percent}%`}
                      direction='right'
                    >
                      <RightLabel>
                        <LabelWrap direction='right'>
                          <Font
                            fontWeight='bold'
                            fontSize='large'
                          >
                            B
                          </Font>
                          <Font fontSize='large'>{`${item.choices[1].percent}%`}</Font>
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
              {item.reason ? (
                <>
                  <AIRight>
                    <AITop>
                      <Font fontSize='small'>
                        AI도 {item.choice}를 선택했어요
                      </Font>
                    </AITop>
                    <AIBottom>
                      <Font fontSize='small'>
                        왜냐면 <strong>{item.reason}</strong>
                      </Font>
                    </AIBottom>
                  </AIRight>
                </>
              ) : (
                <AIButtonContainer>
                  <AIMiddle>
                    <Font fontSize='small'>AI 답변도 궁금한가요? </Font>
                  </AIMiddle>
                  <AIButton onClick={() => handleClickButton(item)}>
                    <Font
                      color='white'
                      fontSize='small'
                    >
                      AI답변보기
                    </Font>
                  </AIButton>
                </AIButtonContainer>
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
  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: ${(props) => props.theme.colors[300]};
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
  border-color: ${(props) => props.theme.colors[300]};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors[200]}; /* 배경색 */
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
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 8px; /* 테두리 둥글게 */
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.colors[200]};
  margin: 12px 0px;
`;

const ChoiceBox = styled.div`
  border-left: 3px solid;
  border-color: ${(props) => props.theme.colors[300]};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  margin-bottom: 16px;
`;
const Choice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 9px;
`;
const LabelWrap = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.direction};

  > :first-child {
    margin-right: 0.5rem;
  }
`;

const Label = styled.div`
  color: ${(props) => props.theme.colors[700]};
  font-size: ${(props) => props.theme.font.fontSizes.large};
`;
const LeftLabel = styled(Label)<{ $small?: boolean }>`
  left: 0;
  color: ${(props) => (props.$small ? props.theme.colors[500] : '')};
  margin-left: 10px; /* 좌측 라벨 패딩 */
`;
const RightLabel = styled(Label)<{ $small?: boolean }>`
  right: 0; /* 오른쪽에서 시작 */
  padding-right: 10px; /* 우측 패딩 */
  color: ${(props) => (props.$small ? props.theme.colors[500] : '')};
`;

const QuestionCard = styled.div`
  border-radius: 20px 20px 0 0;
  padding: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors[50]};
`;

const CardProfileBox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.colors[700]};
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

const Circle = styled.div`
  width: 3px;
  height: 3px;
  background-color: ${(props) => props.theme.colors[300]};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
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
  background-color: ${(props) => props.theme.colors[600]};
  color: ${(props) => props.theme.colors.white};
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

const SortContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

const AllowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 4px;
  cursor: pointer;
`;
