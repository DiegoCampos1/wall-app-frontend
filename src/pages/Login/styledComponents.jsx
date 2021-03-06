import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 7rem;
  height: 2rem;
  outline: none;
`;

export const SecondButton = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.invertButtonText};
  background-color: ${({ theme }) => theme.invertBackground};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 7rem;
  height: 2rem;
  outline: none;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 50%;
  height: 2em;
  font-size: 1em;
  padding-left: 0.5rem;
  ::placeholder {
       font-size: 1em;
   }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;
