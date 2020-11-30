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

export const EditCostumerForm = styled.form`
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  height: auto;
  background: #fff;
  padding: 32px;
`;

export const Addresses = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 60px;
    height: 60px;
    margin-left: 4px;
  }
`;

export const AddressInput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InsertedAddresses = styled.div`
  width: 100%;
  margin: 8px 0;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  span {
    font-size: 14px;
    color: #444;
    width: fit-content;
    height: 24px;
    padding: 8px;
    margin: 4px;
    border-radius: 20px;
    background: #e5e5e5;

    display: flex;
    align-items: center;

    svg {
      background: #fff;
      border-radius: 50%;
      padding: 4px;
      margin-left: 4px;

      cursor: pointer;
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