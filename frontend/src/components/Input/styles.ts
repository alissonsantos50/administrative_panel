import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background: #e5e5e5;
  color: #444;
  margin: 8px 0;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 60px;
  background: #e5e5e5;
  color: #444;
  margin: 8px;
  padding: 8px 16px;

  &::placeholder {
    color: #333;
  }
`;