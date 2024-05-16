import { InputTemplateStyle, Name } from './styles';

export default function InputTemplate({ name, children }) {
  return (
    <InputTemplateStyle>
      <Name>{name}</Name>
      {children}
    </InputTemplateStyle>
  );
}
