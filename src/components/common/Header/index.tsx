import Image from 'next/image';
import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/BackIcon.svg';

import {
  HeaderDoneStyled,
  HeaderLeftStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from './styles';

import Font from '../Font';

interface HeaderProps {
  title: string;
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
    return (
      <HeaderTitleStyled>
        <Font
          fontSize='large'
          fontWeight='bold'
        >
          {title}
        </Font>
      </HeaderTitleStyled>
    );
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
