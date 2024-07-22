const API_URL = "https://dummyjson.com";

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data.users;
};

export const filterUsers = async (query) => {
    const response = await fetch(`${API_URL}/users/search?q=${query}`);
    if (!response.ok) throw new Error('Failed to filter users');
    const data = await response.json();
    return data.users;
};
