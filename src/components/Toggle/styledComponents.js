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
  min-width: 6rem;
  height: 3rem;
  outline: none;
`;

export const Sun = styled.svg`
 height: auto;
 width: 2.0rem;
 transition: all 0.7s linear;
`;

export const Moon = styled.svg`
  height: auto;
  width: 2.0rem;
  transition: all 0.7s linear;
`;
