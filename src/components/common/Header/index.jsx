import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { HeaderDoneStyled, HeaderStyled, HeaderTitleStyled } from './styles';

import back from '@/assets/back.svg';
export default function Header({ title, canGoBack, canDone }) {
  const router = useRouter();

  const HeaderLeftComponent = () => {
    return (
      <div onClick={router.back}>
        {canGoBack ? (
          <Image
            src={back}
            alt='back'
          />
        ) : (
          ''
        )}
      </div>
    );
  };

  const HeaderTitleComponent = () => {
    return <HeaderTitleStyled>{title}</HeaderTitleStyled>;
  };

  const HeaderRightComponent = () => {
    return <HeaderDoneStyled>{canDone ? 'Done' : ''}</HeaderDoneStyled>;
  };
  return (
    <HeaderStyled>
      <HeaderLeftComponent />
      <HeaderTitleComponent />
      <HeaderRightComponent />
    </HeaderStyled>
  );
}
