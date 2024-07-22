import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }
};

const ModalContent = styled.div`
  h2 {
    margin-top: 0;
  }

  p {
    margin: 10px 0;
    line-height: 1.5;
  }

  button {
    padding: 10px 15px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }
`;

const UserModal = ({ user, isOpen, onClose }) => {
    if (!user) return null;

    const { firstName, middleName, lastName, age, phone, address, height, weight, email } = user;
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="User Details" style={customStyles}>
            <ModalContent>
                <h2>{`${firstName} ${middleName || ''} ${lastName}`}</h2>
                <p><strong>Возраст:</strong> {age}</p>
                <p><strong>Адрес:</strong> {`${address.city}, ${address.street}`}</p>
                <p><strong>Рост:</strong> {height} см</p>
                <p><strong>Вес:</strong> {weight} кг</p>
                <p><strong>Номер телефона:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <button onClick={onClose}>Закрыть</button>
            </ModalContent>
        </Modal>
    );
};

export default UserModal;
