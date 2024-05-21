'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import { Container, Form, LoginContainer, Wrapper } from './styles';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import InputTemplate from '@/components/user/InputTemplate';
import { ROUTE_PATHS } from '@/constants/config';
import useInput from '@/hooks/useInput';

export default function Login() {
  const router = useRouter();
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email:', email.value);
    console.log('Password:', password.value);
  };

  const handleClickButton = () => {
    router.push(ROUTE_PATHS.signUp);
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <h1>로그인</h1>
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
            <Button width='full'>로그인</Button>
          </Form>
          <Button
            size='small'
            color='black'
            bgColor='transparent'
            hoverBgColor='transparent'
            onClick={handleClickButton}
          >
            회원가입하기
          </Button>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
