import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import FooterAllQuestion from '@/assets/FooterAllQuestion.svg';
import FooterAllQuestionActive from '@/assets/FooterAllQuestionActive.svg';
import FooterHome from '@/assets/FooterHome.svg';
import FooterHomeActive from '@/assets/FooterHomeActive.svg';
import FooterMyPage from '@/assets/FooterMyPage.svg';
import FooterMyPageActive from '@/assets/FooterMyPageActive.svg';
import FooterReview from '@/assets/FooterReview.svg';
import FooterReviewActive from '@/assets/FooterReviewActive.svg';
import { ROUTE_PATHS } from '@/constants/config';

import { FooterStyled } from './styles';

import Font from '../Font';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const PATHNAME_IS_ACTIVE = {
    HOME: pathname === ROUTE_PATHS.home,
    ALLQUESTION: pathname === ROUTE_PATHS.questions,
    REVIEW: pathname === ROUTE_PATHS.reviews,
    MYPAGE: pathname === ROUTE_PATHS.myPage,
  };

  const handleClickFooter = (url: string) => {
    if (pathname === url) {
      return;
    }
    router.push(url);
  };

  return (
    <FooterStyled>
      <div onClick={() => handleClickFooter(ROUTE_PATHS.home)}>
        <Image
          src={PATHNAME_IS_ACTIVE.HOME ? FooterHomeActive : FooterHome}
          alt='home'
        />
        <Font
          color={PATHNAME_IS_ACTIVE.HOME ? 900 : 500}
          fontSize='xsmall'
        >
          홈
        </Font>
      </div>
      <div onClick={() => handleClickFooter(ROUTE_PATHS.questions)}>
        <Image
          src={
            PATHNAME_IS_ACTIVE.ALLQUESTION
              ? FooterAllQuestionActive
              : FooterAllQuestion
          }
          alt='all question'
        />

        <Font
          color={PATHNAME_IS_ACTIVE.ALLQUESTION ? 900 : 500}
          fontSize='xsmall'
        >
          전체질문
        </Font>
      </div>
      <div onClick={() => handleClickFooter(ROUTE_PATHS.reviews)}>
        <Image
          src={PATHNAME_IS_ACTIVE.REVIEW ? FooterReviewActive : FooterReview}
          alt='all review'
        />
        <Font
          color={PATHNAME_IS_ACTIVE.REVIEW ? 900 : 500}
          fontSize='xsmall'
        >
          전체후기
        </Font>
      </div>
      <div onClick={() => handleClickFooter(ROUTE_PATHS.myPage)}>
        <Image
          src={PATHNAME_IS_ACTIVE.MYPAGE ? FooterMyPageActive : FooterMyPage}
          alt='my page'
        />
        <Font
          color={PATHNAME_IS_ACTIVE.MYPAGE ? 900 : 500}
          fontSize='xsmall'
        >
          마이페이지
        </Font>
      </div>
    </FooterStyled>
  );
}
