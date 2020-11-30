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

export const Costumer = styled.ul`
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  height: auto;
  background: #fff;
  padding: 32px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    width:fit-content;
    margin: 8px 0;
    font-size: 16px;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    h2 {
      margin-left: 8px;
      font-size: 18px;
    }

    h3 {
      font-size: 16px;
      padding: 8px;
      margin: 4px;
      background: #ccc;
      border-radius: 20px;
      font-weight: normal;
    }
  }
`;

export const FooterButtons = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;