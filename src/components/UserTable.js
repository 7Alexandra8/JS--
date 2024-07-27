import React from 'react';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const UserTable = ({ users, onSort, onRowClick }) => {
    return (
        <Table>
            <thead>
            <UserTableHeader onSort={onSort} />
            </thead>
            <tbody>
            {users.map(user => (
                <UserTableRow key={user.id} user={user} onRowClick={onRowClick} />
            ))}
            </tbody>
        </Table>
    );
};

export default UserTable;
