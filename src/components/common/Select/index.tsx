import React from 'react';

import { SelectStyle } from './styles';

interface SelectProps {
  defaultValue: string;
  disabled?: boolean;
  selectList: string[];
  selectedItem: string | number;
  setSelectedItem: (value: string) => void;
}

export default function Select({
  defaultValue,
  disabled,
  selectList,
  selectedItem,
  setSelectedItem,
}: SelectProps) {
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
  };

  return (
    <SelectStyle
      onChange={selectHandler}
      defaultValue={selectedItem || 'default'}
    >
      {defaultValue && (
        <option
          value='default'
          disabled={disabled}
        >
          {defaultValue}
        </option>
      )}
      {selectList.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </SelectStyle>
  );
}
