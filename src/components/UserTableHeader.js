import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
  cursor: pointer;
  padding: 10px;
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #e9e9e9;
  }
`;

const UserTableHeader = ({ onSort }) => {
    const handleSort = (field) => {
        onSort(field);
    };

    return (
        <tr>
            <Th onClick={() => handleSort('lastName')}>ФИО</Th>
            <Th onClick={() => handleSort('age')}>Возраст</Th>
            <Th onClick={() => handleSort('gender')}>Пол</Th>
            <Th onClick={() => handleSort('phone')}>Номер телефона</Th>
            <Th onClick={() => handleSort('address')}>Адрес</Th>
        </tr>
    );
};

export default UserTableHeader;
