import styled from 'styled-components';

export const WallContainer = styled.div`
  height: 88vh;
  width: 80vh;
`;

export const PostsContainer = styled.div`
  height: 60vh;
  overflow: auto;
`;

export const PostContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 2%;
  margin: 3px;
  padding: 0 10px;
  text-align: ${({ author }) => (author === 'owner' ? 'right' : 'left')};
`;

export const InputSendContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 700;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  height: 2rem;
  width: 6rem;
  outline: none;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 70%;
  height: 2em;
`;
