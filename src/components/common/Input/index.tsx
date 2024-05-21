import { InputStyle } from './styles';

interface InputProps {
  width?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  borderRadius?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  width,
  size = 'medium', // default value
  color,
  bgColor,
  borderColor,
  focusBorderColor,
  borderRadius,
  placeholder,
  type = 'text', // default value
  value,
  onChange,
}: InputProps) {
  return (
    <InputStyle
      $width={width}
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $borderColor={borderColor}
      $focusBorderColor={focusBorderColor}
      $borderRadius={borderRadius}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
