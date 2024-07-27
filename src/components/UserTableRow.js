import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  cursor: pointer;
  &:nth-child(even) {
    background: #f9f9f9;
  }
  &:hover {
    background: #f1f1f1;
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const UserTableRow = ({ user, onRowClick }) => {
    const { firstName, middleName, lastName, age, gender, phone, address } = user;
    return (
        <Tr onClick={() => onRowClick(user)}>
            <Td>{`${firstName} ${middleName || ''} ${lastName}`}</Td>
            <Td>{age}</Td>
            <Td>{gender === 'male' ? 'Мужской' : 'Женский'}</Td>
            <Td>{phone}</Td>
            <Td>{`${address.city}, ${address.street}`}</Td>
        </Tr>
    );
};

export default UserTableRow;
