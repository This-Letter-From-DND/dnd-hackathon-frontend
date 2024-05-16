import { InputStyle } from './styles';

export default function Input({
  width,
  size,
  color,
  bgColor,
  borderColor,
  focusBorderColor,
  borderRadius,
  placeholder,
  type,
  value,
  onChange,
}) {
  //NOTE Input Example
  /*            
   <Input
        size="small"
        color="#000"
        bgColor="#f0f0f0"
        borderColor="#ccc"
        focusBorderColor="#999"
        borderRadius="5px"
        placeholder="Small Input
        type="text"
        value={value}
        onChange={onChange}
      />
   */
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
