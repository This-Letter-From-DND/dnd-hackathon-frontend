import { InputStyle } from './styles';

interface InputProps {
  width?: 'full' | string;
  height?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  borderRadius?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function Input({
  width,
  height,
  color,
  bgColor,
  borderColor,
  focusBorderColor,
  borderRadius,
  placeholder,
  type = 'text',
  value,
  name,
  onChange,
  disabled,
}: InputProps) {
  return (
    <InputStyle
      $width={width}
      $height={height}
      $color={color}
      $bgColor={bgColor}
      $borderColor={borderColor}
      $focusBorderColor={focusBorderColor}
      $borderRadius={borderRadius}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
