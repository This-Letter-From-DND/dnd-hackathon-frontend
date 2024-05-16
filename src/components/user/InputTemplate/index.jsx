import { InputTemplateStyle, Name, Content } from './styles';

export default function InputTemplate({ name, children }) {
  return (
    <InputTemplateStyle>
      <Name>{name}</Name>
      <Content>{children}</Content>
    </InputTemplateStyle>
  );
}
