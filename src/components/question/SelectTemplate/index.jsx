import { Title, Wrapper } from './styles';

export default function SelectTemplate({ name, children }) {
  return (
    <Wrapper>
      <Title>{name}</Title>
      {children}
    </Wrapper>
  );
}
