import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import back from '@/assets/back.svg';

import { HeaderDoneStyled, HeaderStyled, HeaderTitleStyled } from './styles';

interface HeaderProps {
  title: ReactNode;
  canGoBack: boolean;
  canDone: boolean;
}

export default function Header({ title, canGoBack, canDone }: HeaderProps) {
  const router = useRouter();

  const HeaderLeftComponent = () => {
    return (
      <div onClick={router.back}>
        {canGoBack ? (
          <Image
            src={back}
            alt='back'
          />
        ) : null}
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
