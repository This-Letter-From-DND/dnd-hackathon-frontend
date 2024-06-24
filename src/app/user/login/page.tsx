'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import GorillaIcon from '@/assets/GolillaIcon.svg';
import HomeLogo from '@/assets/HomeLogo.svg';
import Button from '@/components/common/Button';
import Font from '@/components/common/Font';
import FormInputTemplate from '@/components/common/FormInputTemplate';
import Input from '@/components/common/Input';
import { ROUTE_PATHS } from '@/constants/config';
import useForm from '@/hooks/useForm';
import { putUserApi } from '@/services/user';

import {
  ButtonContainer,
  FormContainer,
  ImageContainer,
  SignupContainer,
  Wrapper,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const validationRules = {
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value) ? '유효한 이메일 주소를 입력하세요.' : null;
  },
  password: (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return !passwordRegex.test(value)
      ? '비밀번호는 8~16자, 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.'
      : null;
  },
};

export default function Login() {
  const router = useRouter();
  const { formData, errors, onChange, onReset, validateForm } =
    useForm<FormData>(
      {
        email: '',
        password: '',
      },
      validationRules,
    );

  const handleClickButton = () => {
    router.push(ROUTE_PATHS.signUp);
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      const putData = async () => {
        try {
          const data = await putUserApi({
            email: formData.email,
            password: formData.password,
          });
          sessionStorage.setItem('user', JSON.stringify(data));
          router.push(ROUTE_PATHS.home);
        } catch (err) {
          onReset('email'), onReset('password');
        }
      };
      putData();
    }
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={HomeLogo}
          alt='home logo'
        />
      </ImageContainer>
      <FormContainer onSubmit={handleSubmitForm}>
        <FormInputTemplate
          name='아이디 입력(이메일)'
          error={errors.email}
        >
          <Input
            placeholder='gorilla@example.com'
            name='email'
            value={formData.email}
            onChange={onChange}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='비밀번호 입력'
          error={errors.password}
        >
          <Input
            placeholder='8~16자, 영문대소문자, 숫자, 특수문자 조합 '
            name='password'
            type='password'
            value={formData.password}
            onChange={onChange}
          />
        </FormInputTemplate>
        <ButtonContainer>
          <Button>
            <Font fontWeight='bold'>로그인</Font>
          </Button>
        </ButtonContainer>
      </FormContainer>
      <SignupContainer>
        <Font>아직 회원이 아니신가요?</Font>
        <Font
          color='secondary'
          fontWeight='bold'
          onClick={handleClickButton}
        >
          회원가입
        </Font>
      </SignupContainer>
      <Image
        src={GorillaIcon}
        alt='golilla icon'
      />
    </Wrapper>
  );
}
