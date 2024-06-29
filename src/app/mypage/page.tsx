'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import MoveIcon from '@/assets/MoveIcon.svg';
import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';
import { ROUTE_PATHS } from '@/constants/config';

import { List, ListContainer, Wrapper } from './styles';

export default function MyPage() {
  const router = useRouter();
  const [isModalOpenLogout, setIsModalOpenLogout] = useState(false);
  const [isModalOpenWithdrawal, setIsModalOpenWithdrawal] = useState(false);

  const handleClickProfileButton = () => {
    router.push(ROUTE_PATHS.myProfile);
  };

  const handleClickMyQuestions = () => {
    router.push(ROUTE_PATHS.myQuestions);
  };

  const handleClickLogout = () => {
    setIsModalOpenLogout(true);
  };

  const handleClickWithdrawal = () => {
    setIsModalOpenWithdrawal(true);
  };
  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            마이페이지
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <ListContainer>
        <List onClick={handleClickProfileButton}>
          <Font>프로필 수정</Font>
          <Image
            src={MoveIcon}
            alt='moveIcon'
          />
        </List>
        <List onClick={handleClickMyQuestions}>
          <Font>내가 쓴 질문 보기</Font>
          <Image
            src={MoveIcon}
            alt='moveIcon'
          />
        </List>
        <List onClick={handleClickLogout}>
          <Font>로그아웃</Font>
          <Image
            src={MoveIcon}
            alt='moveIcon'
          />
        </List>

        <List onClick={handleClickWithdrawal}>
          <Font>회원탈퇴</Font>
          <Image
            src={MoveIcon}
            alt='moveIcon'
          />
        </List>
      </ListContainer>
      {isModalOpenLogout && (
        <ConfirmModal
          isModalOpen={isModalOpenLogout}
          onCancel={() => setIsModalOpenLogout(false)}
          onConfirm={() => setIsModalOpenLogout(false)}
          message='로그아웃하시겠어요?'
        />
      )}
      {isModalOpenWithdrawal && (
        <ConfirmModal
          isModalOpen={isModalOpenWithdrawal}
          onCancel={() => setIsModalOpenWithdrawal(false)}
          onConfirm={() => setIsModalOpenWithdrawal(false)}
          message='정말 탈퇴하시겠어요?'
        />
      )}
      <Footer />
    </Wrapper>
  );
}
