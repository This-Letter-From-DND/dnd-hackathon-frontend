'use client';

import { FormEvent } from 'react';

import Button from '@/components/common/Button';
import Font from '@/components/common/Font';
import FormInputTemplate from '@/components/common/FormInputTemplate';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import useForm from '@/hooks/useForm';

import {
  ButtonContainer,
  Form,
  FormContainer,
  TitleContainer,
  Wrapper,
} from './styles';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
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
  confirmPassword: (value: string, allValues?: FormData) =>
    allValues && value !== allValues.password
      ? '비밀번호가 일치하지 않습니다.'
      : null,
  nickName: (value: string) =>
    value.length < 2 || value.length > 8
      ? '닉네임은 2자 이상 8자 이내여야 합니다.'
      : null,
};

export default function Signup() {
  const { formData, errors, onChange, validateForm } = useForm<FormData>(
    {
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
    },
    validationRules,
  );

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('보내기');
    }
  };

  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='mediumLarge'
            fontWeight='bold'
          >
            회원가입
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <FormContainer onSubmit={handleSubmitForm}>
        <TitleContainer>
          <Font
            fontSize='large'
            fontWeight='bold'
          >{`어서오세요 :)`}</Font>
          <Font
            fontSize='large'
            fontWeight='bold'
          >{`간단하게 가입하고 즐겨주세요!`}</Font>
        </TitleContainer>
        <Form>
          <FormInputTemplate
            name='아이디 입력(이메일)*'
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
            name='비밀번호 입력*'
            error={errors.password}
          >
            <Input
              placeholder='8~16자, 영문대소문자, 숫자, 특수문자 조합'
              name='password'
              type='password'
              value={formData.password}
              onChange={onChange}
            />
          </FormInputTemplate>
          <FormInputTemplate
            name='비밀번호 확인*'
            error={errors.confirmPassword}
          >
            <Input
              placeholder='8~16자, 영문대소문자, 숫자, 특수문자 조합'
              name='confirmPassword'
              type='password'
              value={formData.confirmPassword}
              onChange={onChange}
            />
          </FormInputTemplate>
          <FormInputTemplate
            name='닉네임*'
            error={errors.nickName}
          >
            <Input
              placeholder='2~8자'
              name='nickName'
              value={formData.nickName}
              onChange={onChange}
            />
          </FormInputTemplate>
        </Form>
      </FormContainer>
      <ButtonContainer>
        <Button>
          <Font fontWeight='bold'>작성완료</Font>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
