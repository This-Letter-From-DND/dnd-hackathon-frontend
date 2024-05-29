import Font from '@/components/common/Font';

import {
  LabelLeft,
  LabelRight,
  LabelWrap,
  ProgressBarContainer,
  ProgressBarDetails,
  ProgressBarSection,
} from './styles';

interface ResultProgressBarProps {
  choices: Choice[];
}

export default function ResultProgressBar({ choices }: ResultProgressBarProps) {
  return (
    <ProgressBarContainer>
      {choices[0].percent >= choices[1].percent ? (
        <ProgressBarSection>
          <ProgressBarDetails
            ratio={`${choices[0].percent}%`}
            direction='left'
          >
            <LabelLeft>
              <LabelWrap direction='left'>
                <Font
                  fontWeight='bold'
                  fontSize='large'
                >
                  A
                </Font>
                <Font fontSize='large'>{`${choices[0].percent}%`}</Font>
              </LabelWrap>
            </LabelLeft>
          </ProgressBarDetails>
          <LabelRight $small={true}>
            {choices[1].percent === 0 ? '' : ''}
          </LabelRight>
        </ProgressBarSection>
      ) : (
        <ProgressBarSection>
          <LabelLeft $small={true}>
            {choices[0].percent === 0 ? '' : 'A'}
          </LabelLeft>
          <ProgressBarDetails
            ratio={`${choices[1].percent}%`}
            direction='right'
          >
            <LabelRight>
              <LabelWrap direction='right'>
                <Font
                  fontWeight='bold'
                  fontSize='large'
                >
                  B
                </Font>
                <Font fontSize='large'>{`${choices[1].percent}%`}</Font>
              </LabelWrap>
            </LabelRight>
          </ProgressBarDetails>
        </ProgressBarSection>
      )}
    </ProgressBarContainer>
  );
}
