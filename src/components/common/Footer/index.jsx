import { usePathname, useRouter } from 'next/navigation';

import { FooterStyled } from './styles';

import FooterAllQuestionIcon from '../Icons/FooterAllQuestion';
import FooterHomeIcon from '../Icons/FooterHome';
import FooterMyQuestion from '../Icons/FooterMyQuestion';
import FooterReviewIcon from '../Icons/FooterReviewIcon';

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
        <FooterHomeIcon
          color={PATHNAME_IS_ACTIVE.HOME ? ACTIVE_COLOR : undefined}
        />
        <span
          style={{ color: PATHNAME_IS_ACTIVE.HOME ? ACTIVE_COLOR : undefined }}
        >
          {'홈'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('/lists')}>
        <FooterAllQuestionIcon
          color={PATHNAME_IS_ACTIVE.ALLQUESTION ? ACTIVE_COLOR : undefined}
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.ALLQUESTION ? ACTIVE_COLOR : undefined,
          }}
        >
          {'전체질문보기'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('review')}>
        <FooterReviewIcon
          color={PATHNAME_IS_ACTIVE.REVIEW ? ACTIVE_COLOR : undefined}
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.REVIEW ? ACTIVE_COLOR : undefined,
          }}
        >
          {'후기 목록'}
        </span>
      </div>
      <div onClick={() => handleClickFooter('my')}>
        <FooterMyQuestion
          color={PATHNAME_IS_ACTIVE.MYQUESTION ? ACTIVE_COLOR : undefined}
        />
        <span
          style={{
            color: PATHNAME_IS_ACTIVE.MYQUESTION ? ACTIVE_COLOR : undefined,
          }}
        >
          {'내질문관리'}
        </span>
      </div>
    </FooterStyled>
  );
}

const ACTIVE_COLOR = '#212529';
