import React, { useState, useEffect } from 'react';
import { fetchUsers, filterUsers } from './services/api';
import UserTable from './components/UserTable';
import SearchInput from './components/SearchInput';
import UserModal from './components/UserModal';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const AppWrapper = styled.div`
  padding: 20px;
`;

const App = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Не удалось получить пользователей:', error);
            }
        };

        loadUsers();
    }, []);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        if (query) {
            try {
                const filteredUsers = await filterUsers(query);
                setUsers(filteredUsers);
            } catch (error) {
                console.error('Не удалось выполнить поиск:', error);
            }
        } else {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Не удалось получить пользователей:', error);
            }
        }
    };

    const handleSort = (field) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === field && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedUsers = [...users].sort((a, b) => {
            if (a[field] < b[field]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[field] > b[field]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setSortConfig({ key: field, direction });
        setUsers(sortedUsers);
    };

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    return (
        <AppWrapper>
            <GlobalStyle />
            <SearchInput onSearch={handleSearch} />
            <UserTable users={users} onSort={handleSort} onRowClick={handleRowClick} />
            <UserModal user={selectedUser} isOpen={!!selectedUser} onClose={handleCloseModal} />
        </AppWrapper>
    );
};

export default App;
