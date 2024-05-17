import { useRouter } from 'next/navigation';

import { HeaderDoneStyled, HeaderStyled, HeaderTitleStyled } from './styles';

export default function Header({ title, canGoBack, canDone }) {
  const router = useRouter();

  const HeaderLeftComponent = () => {
    return <div onClick={router.back}>{canGoBack ? 'GoBack' : ''}</div>;
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
