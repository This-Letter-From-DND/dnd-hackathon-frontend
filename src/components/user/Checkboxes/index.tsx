import { Checkbox, Label, Wrapper } from './styles';

interface Category {
  id: number;
  title: string;
  content: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: Category[];
  onChange: (selected: Category[]) => void;
}

export default function Checkboxes({
  categories,
  selectedCategories,
  onChange,
}: CategorySelectorProps) {
  const handleChangeCheckBox = (category: Category) => {
    const isSelected = selectedCategories.some(
      (selected) => selected.id === category.id,
    );
    const updatedSelection = isSelected
      ? selectedCategories.filter((selected) => selected.id !== category.id)
      : [...selectedCategories, category];

    onChange(updatedSelection);
  };

  return (
    <Wrapper>
      {categories.map((category) => {
        const isSelected = selectedCategories.some(
          (selected) => selected.id === category.id,
        );
        return (
          <Label
            key={category.id}
            $isSelected={isSelected}
          >
            <Checkbox
              type='checkbox'
              checked={selectedCategories.some(
                (selected) => selected.id === category.id,
              )}
              onChange={() => handleChangeCheckBox(category)}
            />
            {category.title}
          </Label>
        );
      })}
    </Wrapper>
  );
}
