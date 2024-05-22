import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Point = styled.div`
  height: 3rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 202, 12, 0.12);
`;

export const PointTitle = styled.span`
  color: #db9900;
`;

export const ContentContainer = styled.div`
  margin: 0rem 1.5rem;
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  margin-left: 0.5rem;
  color: #db9900;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 3.25rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #f1f3f5;
  color: #212529;
`;

export const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 8.75rem;
  margin-top: 0.75rem;
  height: 8.7rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #f1f3f5;
  color: #212529;
`;

export const CharacterCount = styled.div<{ $isLimitExceeded: boolean }>`
  text-align: right;
  font-size: 14px;
  color: ${(props) => (props.$isLimitExceeded ? 'red' : '#ADB5BD')};
  margin-top: 5px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const ButtonContainer = styled.div`
  margin: 1.5rem;
  flex-shrink: 0;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  cursor: pointer;
  background-color: #f1f3f5;
  color: #adb5bd;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #dee2e6;

  &:hover {
    opacity: 0.8;
  }
`;

export const FileInput = styled.input`
  margin-top: 10px;
  display: none;
`;

export const ImageCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`;
