import { ButtonStyle } from './styles';

export default function Button({
  width,
  size,
  color,
  bgColor,
  hoverBgColor,
  borderRadius,
  onClick,
  children,
}) {
  //NOTE Button Example
  /*            
    <Button
      size='large'
      color='white'
      bgColor='green'
      hoverBgColor='darkgreen'
      borderRadius='10px'
      onClick={() => alert('Large Green Button clicked!')}
    >
      버튼
    </Button> 
   */
  return (
    <ButtonStyle
      $width={width}
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $hoverBgColor={hoverBgColor}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
