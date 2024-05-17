'use client';

import React from 'react';
import { styled } from 'styled-components';

export default function page() {
  const DUMMY = {
    A: 30,
    B: 70,
  };

  return (
    <Wrapper>
      <QuestionCard>
        <CardTop>
          <CardTitle>바나나 맛있냐고 바나나 먹어말아?</CardTitle>
          <CardProfileBox>
            <ProfileBox>
              <ProfileIcon />
              <ProfileText>닉네임</ProfileText>
            </ProfileBox>
            <Circle />
            <ProfileBox>
              <ProfileText>답변수 {98}</ProfileText>
            </ProfileBox>
          </CardProfileBox>
        </CardTop>
        <Hr></Hr>
        <Content>
          <Description>
            바나나먹고싶은데 어떻게하냐 나 진짜 미치겠다
          </Description>
          <ChoiceBox>
            <Choice>
              <AB>A</AB>
              <div>: 먹어라</div>
            </Choice>
            <Choice>
              <AB>B</AB>
              <div>: 참아라!</div>
            </Choice>
          </ChoiceBox>
        </Content>
        <ProgressBarContainer>
          {DUMMY.A >= DUMMY.B ? (
            <>
              <ProgressBar
                ratio={`${DUMMY.A}%`}
                direction='left'
              >
                <LeftLabel>
                  <LabelWrap direction='left'>
                    <div>
                      A <Span>{DUMMY.A}%</Span>
                    </div>
                  </LabelWrap>
                </LeftLabel>
              </ProgressBar>
              <RightLabel small={true}>B</RightLabel>
            </>
          ) : (
            <>
              <LeftLabel small={true}>A</LeftLabel>
              <ProgressBar
                ratio={`${DUMMY.B}%`}
                direction='right'
              >
                <RightLabel>
                  <LabelWrap direction='right'>
                    <div>
                      <Span>{DUMMY.B}%</Span> B
                    </div>
                  </LabelWrap>
                </RightLabel>
              </ProgressBar>
            </>
          )}
        </ProgressBarContainer>
      </QuestionCard>
    </Wrapper>
  );
}

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
  height: 273px;
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
  background-color: hotpink;
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
  padding: 25px 25px;
  display: flex;
  justify-content: center;
`;
