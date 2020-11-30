import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  min-width: 100vw;
  min-height: 100vh;
  background: #e5e5e5;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  color: #242424;
  padding: 16px 0;
`;

export const SignInForm = styled.form`
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  height: auto;
  background: #fff;
  padding: 32px;
`;