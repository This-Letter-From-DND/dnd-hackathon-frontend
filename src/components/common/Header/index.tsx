import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import BackIcon from '@/assets/BackIcon.svg';

import {
  HeaderDoneStyled,
  HeaderLeftStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from './styles';

interface HeaderProps {
  title: ReactNode;
  canGoBack: boolean;
  canDone: boolean;
}

export default function Header({ title, canGoBack, canDone }: HeaderProps) {
  const router = useRouter();

  const HeaderLeftComponent = () => {
    return (
      <HeaderLeftStyled onClick={router.back}>
        {canGoBack ? (
          <Image
            src={BackIcon}
            alt='back icon'
          />
        ) : null}
      </HeaderLeftStyled>
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
