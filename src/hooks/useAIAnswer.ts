import { RemoteRunnable } from '@langchain/core/runnables/remote';
import { useState } from 'react';

import { postAIAnswer } from '@/services/ai';

const chain = new RemoteRunnable({
  url: `https://becoming-dodo-roughly.ngrok-free.app/answer-ai/`,
  // headers: {
  //   'ngrok-skip-browser-warning': 'skip', //ngrok오류로 인해 넣어준 헤더
  // },
});

interface AiAnswerResponse {
  response: {
    choice: string;
    reason: string;
  };
  content: string;
}

const useAIAnswer = (initialQuestions: Question[]) => {
  const [questionList, setQuestionList] =
    useState<Question[]>(initialQuestions);

  const handleClickButton = async (question: Question) => {
    const res: any = await chain.invoke({
      question: question.content,
      choiceA: question.choices[0].content,
      choiceB: question.choices[1].content,
    });
    const answer: AiAnswerResponse = await JSON.parse(
      res.content.replace('\n', ''),
    );

    setQuestionList((prevList) =>
      prevList.map((prevItem) => {
        if (
          prevItem.questionId === question.questionId &&
          answer.response.reason
        ) {
          return {
            ...prevItem,
            aiAnswer: {
              choiceId: answer.response.choice === 'A' ? 1 : 2,
              reason: answer.response.reason,
            },
          };
        }
        return {
          ...prevItem,
        };
      }),
    );

    const req = {
      userId: 0,
      questionId: question.questionId,
      choiceId: answer.response.choice === 'A' ? 1 : 2,
      reason: answer?.response?.reason,
    };
    await postAIAnswer(req);
  };

  return { questionList, setQuestionList, handleClickButton };
};

export default useAIAnswer;
