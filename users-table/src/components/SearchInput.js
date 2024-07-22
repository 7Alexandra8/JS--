import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 20px auto;
  display: block;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SearchInput = ({ onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <Input type="text" placeholder="Поиск..." onChange={handleSearch} />
    );
};

export default SearchInput;
