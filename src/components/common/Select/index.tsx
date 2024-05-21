import React from 'react';

import { SelectStyle } from './styles';

interface SelectProps {
  defaultValue: string;
  selectList: string[];
  selectedItem: string | number;
  setSelectedItem: (value: string) => void;
}

export default function Select({
  defaultValue,
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
      <option
        value='default'
        disabled
      >
        {defaultValue}
      </option>
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
