'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ai from '@/assets/aiai.svg';
import user from '@/assets/user.svg';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { getAllQuestionApi } from '@/services/question';
export default function ListsUser() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllQuestionApi(1, 'recent', true);
      setList(data);
    };
    getData();
  }, []);

  // const AIDUMMY = {
  //   choice: 'A',
  //   reason: '맛있으니까',
  // };

  const handleClickButton = () => {};

  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'내가 쓴 질문'}</TitleStyled>}
        canGoBack={true}
      />
      <ListContainer>
        {list?.map((item, index) => (
          <QuestionCardContainer key={index}>
            <QuestionCard>
              <TimeContainer>
                <Time>2024.01.01</Time> <Button>후기작성</Button>
              </TimeContainer>
              <CardTop>
                <CardTitle>{item.title}</CardTitle>
                <CardProfileBox>
                  <ProfileBox>
                    <ProfileIcon>
                      <Image
                        src={user}
                        alt='user'
                      />
                    </ProfileIcon>
                    <ProfileText>{item.userNickname}</ProfileText>
                  </ProfileBox>
                  <Circle />
                  <ProfileBox>
                    <ProfileText>{`답변수 ${item.answerCount}`}</ProfileText>
                  </ProfileBox>
                </CardProfileBox>
              </CardTop>
              <Hr></Hr>
              <Content>
                <Description>{item.content}</Description>
                <ChoiceBox>
                  <Choice>
                    <AB>A</AB>
                    <div>{`: ${item.choices[0].content}`}</div>
                  </Choice>
                  <Choice>
                    <AB>B</AB>
                    <div>{`: ${item.choices[1].content}`}</div>
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
                          <div>
                            A <Span>{`${item.choices[0].percent}%`}</Span>
                          </div>
                        </LabelWrap>
                      </LeftLabel>
                    </ProgressBar>
                    <RightLabel $small={true}>
                      {item.choices[1].percent === 0 ? '' : 'B'}
                    </RightLabel>
                  </Div>
                ) : (
                  <Div>
                    <LeftLabel $small={true}>
                      {item.choices[1].percent === 0 ? '' : 'A'}
                    </LeftLabel>
                    <ProgressBar
                      ratio={`${item.choices[1].percent}%`}
                      direction='right'
                    >
                      <RightLabel>
                        <LabelWrap direction='right'>
                          <div>
                            <Span>{`${item.choices[1].percent}%`}</Span>B
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
              <AIRight>
                {/* <AITop>AI도 {AIDUMMY.choice}를 선택했어요</AITop>
                <AIBottom>왜냐면 {AIDUMMY.reason}는 맛있으니까!</AIBottom> */}
              </AIRight>
              <AIButtonContainer>
                <AIMiddle>AI 답변도 궁금한가요?</AIMiddle>
                <AIButton onClick={handleClickButton}>AI답변보기</AIButton>
              </AIButtonContainer>
            </AICard>
          </QuestionCardContainer>
        ))}
      </ListContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
}
export const FooterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const AICard = styled.div`
  width: 100%;
  height: 68px;
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
// const AITop = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: left;
// `;

// const AIBottom = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: left;
// `;

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
const ProgressBar = styled.div`
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
const LabelWrap = styled.div`
  display: flex;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
  justify-content: ${(props) => props.direction};
`;
const AB = styled.div`
  width: 16px;
`;

const Label = styled.div`
  color: #333;
  font-size: ${(props) => props.theme.font.fontSize.large};
`;
const LeftLabel = styled(Label)`
  left: 0;
  color: ${(props) => (props.small ? props.theme.colors.neutral[500] : '')};
  margin-left: 10px; /* 좌측 라벨 패딩 */
`;
const RightLabel = styled(Label)`
  right: 0; /* 오른쪽에서 시작 */
  padding-right: 10px; /* 우측 패딩 */
  color: ${(props) => (props.small ? props.theme.colors.neutral[500] : '')};
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

export const Wrapper = styled.div`
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

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
`;

export const QuestionCardContainer = styled.div`
  margin-bottom: 20px;
`;

export const AIMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const AIButton = styled.button`
  background-color: #868e96;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const AIButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const SortContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const AllowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 4px;
  cursor: pointer;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Time = styled.div`
  color: #495057;
`;
export const Button = styled.div`
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
