import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
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
  border: 2px solid ${({ theme }) => theme.toggleBorder};
`;
