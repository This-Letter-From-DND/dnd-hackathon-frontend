import { ThemeColors, ThemeFontSizes, ThemeFontWeights } from '@/styles/theme';

import { FontStyle } from './styles';

export interface FontTypes {
  color?: ThemeColors;
  fontSize?: ThemeFontSizes;
  fontWeight?: ThemeFontWeights;
  children: React.ReactNode;
}

export default function Font({
  color,
  fontSize,
  fontWeight,
  children,
}: FontTypes) {
  return (
    <FontStyle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </FontStyle>
  );
}
