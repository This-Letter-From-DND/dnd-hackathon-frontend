import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { FooterStyled } from './styles';

import FooterAllQuestion from '@/assets/FooterAllQuestion.svg';
import FooterAllQuestionActive from '@/assets/FooterAllQuestionActive.svg';
import FooterHome from '@/assets/FooterHome.svg';
import FooterHomeActive from '@/assets/FooterHomeActive.svg';
import FooterMyQuestion from '@/assets/FooterMyQuestion.svg';
import FooterMyQuestionActive from '@/assets/FooterMyQuestionActive.svg';
import FooterReview from '@/assets/FooterReview.svg';
import FooterReviewActive from '@/assets/FooterReviewActive.svg';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const PATHNAME_IS_ACTIVE = {
    HOME: pathname === '/',
    ALLQUESTION: pathname === '/lists',
    REVIEW: pathname === '/review',
    MYQUESTION: pathname === '/my',
  };

  const handleClickFooter = (url) => {
    if (pathname === url) {
      return;
    }
    router.push(url);
  };

  return (
    <FooterStyled>
      <div onClick={() => handleClickFooter('/')}>
        <Image
          src={PATHNAME_IS_ACTIVE.HOME ? FooterHomeActive : FooterHome}
          alt='home'
        />
        <span
          style={{ color: PATHNAME_IS_ACTIVE.HOME ? ACTIVE_COLOR : undefined }}
        >
          {'홈'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('/lists')}>
        <Image
          src={
            PATHNAME_IS_ACTIVE.ALLQUESTION
              ? FooterAllQuestionActive
              : FooterAllQuestion
          }
          alt='all question'
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.ALLQUESTION ? ACTIVE_COLOR : FooterReview,
          }}
        >
          {'전체질문'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('review')}>
        <Image
          src={
            PATHNAME_IS_ACTIVE.REVIEW ? FooterReviewActive : FooterAllQuestion
          }
          alt='all review'
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.REVIEW ? ACTIVE_COLOR : undefined,
          }}
        >
          {'전체후기'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('my')}>
        <Image
          src={
            PATHNAME_IS_ACTIVE.MYQUESTION
              ? FooterMyQuestionActive
              : FooterMyQuestion
          }
          alt='my question'
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.MYQUESTION ? ACTIVE_COLOR : undefined,
          }}
        >
          {'내가쓴질문'}
        </span>
      </div>
    </FooterStyled>
  );
}

const ACTIVE_COLOR = '#212529';
