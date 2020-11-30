import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin: 8px 0;
  color: #fff;
  background: #0d70ba;
  font-size: 18px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-right: 16px;
  }

  svg {
    margin: 0 4px;
  }
`;