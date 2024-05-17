import { SelectStyle } from './styles';

export default function Select({
  defaultValue,
  selectList,
  selectedItem,
  setSelectedItem,
}) {
  const selectHandler = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <SelectStyle
      onChange={selectHandler}
      defaultValue={selectedItem || 'default'}
    >
      <option value='default'>{defaultValue}</option>
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
