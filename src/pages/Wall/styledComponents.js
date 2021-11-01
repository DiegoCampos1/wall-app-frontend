import styled from 'styled-components';

export const WallContainer = styled.div`
  height: 88vh;
  width: 80vh;
  display: flex;
  flex-direction: column;
`;

export const PostsContainer = styled.div`
  height: 60vh;
  overflow: auto;
  ::-webkit-scrollbar {
  width: 20px;
  }
  ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px ${({ theme }) => theme.inputBorder}; 
  border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.inputBorder}; 
  border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.inputBorder}; 
  }
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
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  overflow: hidden;
  padding: 0.5rem;
  height: 2rem;
  width: ${({ width }) => (width || '10rem')};
  margin-top: ${({ marginTop }) => (marginTop || '10px')};
  margin-left: ${({ marginLeft }) => (marginLeft || '0')};

  outline: none;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 70%;
  height: 2em;
  padding-left: 1em;
  font-size: 1em;
  ::placeholder {
    font-size: 1em;
  }
`;

export const Paragraph = styled.p`
  padding: 0 ${({ padding }) => (padding || '0')};
  margin: 0.4em;
`;
