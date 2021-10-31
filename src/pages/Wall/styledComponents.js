import styled from 'styled-components';

export const WallContainer = styled.div`
  height: 88vh;
  width: 80vh;
`;

export const PostsContainer = styled.div`
  height: 60vh;
  overflow: scroll;
`;

export const PostContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 2%;
  margin: 3px;
  padding: 0 10px;
  text-align: ${({ author }) => (author === 'owner' ? 'right' : 'left')};
`;
