'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import Font from '@/components/common/Font';
import FormInputTemplate from '@/components/common/FormInputTemplate';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Checkboxes from '@/components/user/Checkboxes';
import { ROUTE_PATHS } from '@/constants/config';
import useForm from '@/hooks/useForm';
import { getCategoryApi } from '@/services/category';
import { postUserApi } from '@/services/user';

import {
  ButtonContainer,
  Form,
  FormContainer,
  TitleContainer,
  Wrapper,
} from './styles';

interface Category {
  id: number;
  title: string;
  content: string;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  categories: Category[];
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

export default function Profile() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const { formData, errors, onChange, setFormData, onReset, validateForm } =
    useForm<FormData>(
      {
        email: '',
        password: '',
        confirmPassword: '',
        nickName: '',
        categories: [],
      },
      validationRules,
    );

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategoryApi();
      setCategoryList(data);
    };
    fetchCategories();
  }, []);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      if (pageNumber) {
        const postData = async () => {
          try {
            await postUserApi({
              email: formData.email,
              password: formData.password,
              nickname: formData.nickName,
              categories: formData.categories
                .map((category) => category.id)
                .join(),
            });
            router.push(ROUTE_PATHS.login);
          } catch (err) {
            onReset('email');
            onReset('password');
            onReset('confirmPassword');
            onReset('nickName');
            onReset('categories');
          }
        };
        postData();
      }
      setPageNumber(!pageNumber);
    }
  };

  const handleChangeCategory = (selected: Category[]) => {
    setFormData({
      ...formData,
      categories: selected,
    });
  };

  return (
    <Wrapper onSubmit={handleSubmitForm}>
      {pageNumber === false ? (
        <>
          <Header
            title={
              <Font
                fontSize='mediumLarge'
                fontWeight='bold'
              >
                프로필 수정
              </Font>
            }
            canGoBack={true}
            canDone={false}
          />
          <FormContainer>
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
        </>
      ) : (
        <>
          <Header
            title={
              <Font
                fontSize='mediumLarge'
                fontWeight='bold'
              >
                관심사 수정
              </Font>
            }
            canGoBack={false}
            canDone={false}
          />
          <FormContainer>
            <TitleContainer>
              <Font
                fontSize='large'
                fontWeight='bold'
              >
                관심사를 알려주세요!
              </Font>
            </TitleContainer>
            <Form>
              <FormInputTemplate name='중복선택 3개까지 가능합니다.'>
                <Checkboxes
                  categories={categoryList}
                  selectedCategories={formData.categories}
                  onChange={handleChangeCategory}
                />
              </FormInputTemplate>
            </Form>
          </FormContainer>
        </>
      )}
      <ButtonContainer>
        <Button>
          <Font fontWeight='bold'>수정하기</Font>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
