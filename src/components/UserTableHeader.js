import React, { useRef } from 'react';
import styled from 'styled-components';

const Th = styled.th`
  cursor: pointer;
  padding: 10px;
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;
  min-width: 50px;
  position: relative; /* Для позиционирования перетаскивателя */

  &:hover {
    background: #e9e9e9;
  }

  &.sorted-asc::after {
    content: ' 🔼';
  }

  &.sorted-desc::after {
    content: ' 🔽';
  }

  .resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    user-select: none;
  }
`;

const UserTableHeader = ({ onSort, sortConfig }) => {
    const thRefs = useRef([]);

    const handleSort = (field) => {
        onSort(field);
    };

    const getClassName = (field) => {
        if (!sortConfig) return '';
        return sortConfig.key === field ? (sortConfig.direction === 'ascending' ? 'sorted-asc' : 'sorted-desc') : '';
    };

    const handleMouseDown = (index, e) => {
        const startX = e.clientX;
        const startWidth = thRefs.current[index].offsetWidth;

        const handleMouseMove = (moveEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX);
            thRefs.current[index].style.width = `${Math.max(newWidth, 50)}px`; // Минимальная ширина 50px
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const columns = [
        { key: 'lastName', label: 'ФИО' },
        { key: 'age', label: 'Возраст' },
        { key: 'gender', label: 'Пол' },
        { key: 'phone', label: 'Номер телефона' },
        { key: 'address', label: 'Адрес' }
    ];

    return (
        <tr>
            {columns.map((column, index) => (
                <Th key={column.key} ref={el => thRefs.current[index] = el}>
                    <div onClick={() => handleSort(column.key)} className={getClassName(column.key)}>
                        {column.label}
                    </div>
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => handleMouseDown(index, e)}
                    />
                </Th>
            ))}
        </tr>
    );
};

export default UserTableHeader;
