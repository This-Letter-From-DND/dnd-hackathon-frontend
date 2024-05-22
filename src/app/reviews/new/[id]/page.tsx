'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import plus from '@/assets/PlusIcon.svg';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import FormInputTemplate from '@/components/question/FormInputTemplate';
import { ROUTE_PATHS } from '@/constants/config';
import useForm from '@/hooks/useForm';

import {
  ButtonContainer,
  CharacterCount,
  ContentContainer,
  InputTitle,
  Textarea,
  TextareaWrapper,
  TitleStyled,
  Wrapper,
  ImagePreview,
  ImagePreviewContainer,
  CloseButton,
  FileInputLabel,
  FileInput,
  ImageCount,
  ImageContainer,
} from './styles';

interface FormData {
  userId: number;
  title: string;
  content: string;
}

const CHARACTER_LIMIT = 80;

const validationRules = {
  title: (value: string) =>
    value.length < 1 || value.length > 30
      ? '제목은 1자 이상 30자 이내여야 합니다.'
      : null,
  content: (value: string) =>
    value.length < 5 || value.length > 80
      ? '내용은 5자 이상 80자 이내여야 합니다.'
      : null,
};

interface NewReviewProps {
  params: { id: string };
}

export default function NewReview({ params }: NewReviewProps) {
  const router = useRouter();
  const { formData, errors, onChange, validateForm } = useForm<FormData>(
    {
      userId: 1,
      title: '',
      content: '',
    },
    validationRules,
  );

  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    console.log(params.id);
  }, []);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files);
      if (selectedImages.length + images.length <= 5) {
        setImages((prevImages) => [...prevImages, ...selectedImages]);
      } else {
        alert('최대 5개까지의 사진을 첨부할 수 있습니다.');
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      // const postData = async () => {
      //   await postReviewApi({
      //     userId: formData.userId,
      //     title: formData.title,
      //     content: formData.content,
      //     images,
      //   });
      // };
      // postData();
      router.push(`${ROUTE_PATHS.reviews}/${params.id}`);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Header
        title={<TitleStyled>{'후기쓰기'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ContentContainer>
        <FormInputTemplate
          name='제목을 적어주세요*'
          error={errors.title}
        >
          <InputTitle
            placeholder='30자 이내'
            name='title'
            value={formData.title}
            onChange={onChange}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='내용을 적어주세요(5자 이상~80자 이하)*'
          error={errors.content}
        >
          <TextareaWrapper>
            <Textarea
              name='content'
              value={formData.content}
              onChange={onChange}
              placeholder={`어떤 음식을 먹고 싶어?
음식 종류를 적어주면 결정에 도움이 됩니다.`}
            />
            <CharacterCount
              $isLimitExceeded={formData.content.length > CHARACTER_LIMIT}
            >
              {formData.content.length}/{CHARACTER_LIMIT}
            </CharacterCount>
          </TextareaWrapper>
        </FormInputTemplate>
        <FormInputTemplate name='사진 첨부'>
          <ImagePreviewContainer>
            <FileInputLabel>
              <Image
                src={plus}
                alt='plus'
              />
              <ImageCount>{images.length}/5</ImageCount>
              <FileInput
                type='file'
                accept='image/*'
                multiple
                onChange={handleImageChange}
              />
            </FileInputLabel>
            {images.map((image, index) => (
              <ImagePreview key={index}>
                <ImageContainer
                  src={URL.createObjectURL(image)}
                  alt={`preview ${index}`}
                  width={80}
                  height={80}
                />
                <CloseButton onClick={() => handleRemoveImage(index)}>
                  ×
                </CloseButton>
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
        </FormInputTemplate>
      </ContentContainer>
      <ButtonContainer>
        <Button width='full'>후기작성</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
