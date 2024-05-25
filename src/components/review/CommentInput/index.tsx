import { Button, CommentInputStyle, Input } from './styles';

export default function CommentInput() {
  return (
    <CommentInputStyle>
      <Input placeholder='댓글을 입력해주세요.' /> <Button>등록</Button>
    </CommentInputStyle>
  );
}
