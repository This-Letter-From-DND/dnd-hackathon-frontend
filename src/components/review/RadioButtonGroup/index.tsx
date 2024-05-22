import React, { SetStateAction } from 'react';

import useMouseDrag from '@/hooks/useMouseDrag';

import RadioButton from './RadioButton';
import { Container } from './styles';

interface Category {
  id: number;
  title: string;
  content: string;
}

interface RadioButtonGroupProps {
  label: string;
  radioButtonlist: Category[];
  radioButtonItem?: string;
  setRadioButtonItem: React.Dispatch<SetStateAction<string>>;
}

export default function RadioButtonGroup({
  label,
  radioButtonlist,
  radioButtonItem,
  setRadioButtonItem,
}: RadioButtonGroupProps) {
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useMouseDrag();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioButtonItem(event.target.value);
  };

  return (
    <Container
      role='group'
      aria-labelledby={label}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={isDrag ? onThrottleDragMove : undefined}
      ref={scrollRef}
    >
      {radioButtonlist.map((item, idx) =>
        item.title === radioButtonItem ? (
          <RadioButton
            id={item.title}
            key={idx}
            name={label}
            value={item.title}
            defaultChecked={true}
            onChange={radioHandler}
          />
        ) : (
          <RadioButton
            id={item.title}
            key={idx}
            name={label}
            value={item.title}
            onChange={radioHandler}
          />
        ),
      )}
    </Container>
  );
}
