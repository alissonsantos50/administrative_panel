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

export const CostumerList = styled.ul`
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  height: auto;
  background: #fff;
  padding: 32px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    width: 100%;
    height: 60px;
    margin: 4px 0;
    border-bottom: 1px solid #ccc;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      height: 60px;
      width: 30%;
      text-align: left;
      margin: 0 4px;

      display: flex;
      align-items: center;

      &:last-child {
        width: 20%;
      }

      svg {
        margin: 0 8px 0 0;

        cursor: pointer;
      }

      a {
        text-decoration: none;
        width: auto;
        color: #444;
      }
    }

    &:first-child {
      span {
        font-weight: bold;
      }
    }

    &:last-child {
      border: 0;
    }
  }

  a {
    width: 100%;
    text-decoration: none;
  }
`;