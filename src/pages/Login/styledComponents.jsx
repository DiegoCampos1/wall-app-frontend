import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 700;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 2rem;
  outline: none;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 50%;
  height: 2em;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 50%;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
