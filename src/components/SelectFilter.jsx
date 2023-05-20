import { useState } from 'react';
import { Container, StyledSelect } from './SelectFilter.styled';

const options = [
  { value: 'show all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const SelectFilter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container>
      <StyledSelect
        placeholder="Сhoose tweets by filter..."
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </Container>
  );
};
