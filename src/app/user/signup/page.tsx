'use client';

import { FormEvent } from 'react';
import { Container, Form, LoginContainer, Wrapper } from './styles';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import InputTemplate from '@/components/user/InputTemplate';
import useGeolocation from '@/hooks/useGeolocation';
import useInput from '@/hooks/useInput';

const SignUp: React.FC = () => {
  const email = useInput('');
  const password = useInput('');
  const nickName = useInput('');
  const { address } = useGeolocation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('NickName:', nickName.value);
    console.log('Address:', address);
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <h1>회원가입</h1>
          <Form onSubmit={handleSubmit}>
            <InputTemplate name='이메일'>
              <Input
                width='full'
                type='text'
                placeholder='hello@example.com'
                value={email.value}
                onChange={email.onChange}
              />
            </InputTemplate>
            <InputTemplate name='비밀번호'>
              <Input
                width='full'
                type='password'
                placeholder='password'
                value={password.value}
                onChange={password.onChange}
              />
            </InputTemplate>
            <InputTemplate name='닉네임'>
              <Input
                width='full'
                type='text'
                placeholder='nickname'
                value={nickName.value}
                onChange={nickName.onChange}
              />
            </InputTemplate>
            <InputTemplate name='지역인증'>{address}</InputTemplate>
            <Button width='full'>가입완료</Button>
          </Form>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
