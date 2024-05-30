import { ThemeColors, ThemeFontSizes, ThemeFontWeights } from '@/styles/theme';

import { FontStyle } from './styles';

export interface FontTypes {
  color?: ThemeColors;
  fontSize?: ThemeFontSizes;
  fontWeight?: ThemeFontWeights;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Font({
  color,
  fontSize,
  fontWeight,
  onClick,
  children,
}: FontTypes) {
  return (
    <FontStyle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </FontStyle>
  );
}
