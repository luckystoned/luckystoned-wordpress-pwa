import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  .actualPage {
    display: block;
    background: #aaa;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    padding: 3px 0 0 0;
  }

  .navBack {
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
    background: #aaa;
    padding: 3px 10px 0 25px;
    margin-bottom: 30px;

    :before {
      display: block;
      position: absolute;
      left: -15px;
      top: 50%;
      margin: 0;
      border: solid;
      content: '';
      pointer-events: none;
      border-right-color: #aaa;
      border-width: 15px;
      margin-top: -15px;
    }

    :hover {
      background: #d22e26;
    }

    :hover:before {
      border-right-color: #d22e26;
    }
  }

  .navForward {
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
    background: #aaa;
    padding: 3px 10px 0 5px;
    margin-bottom: 30px;
    text-align: center;

    :after {
      display: block;
      position: absolute;
      left: 90%;
      top: 50%;
      margin: 0;
      border: solid;
      content: '';
      pointer-events: none;
      border-left-color: #aaa;
      border-width: 15px;
      margin-top: -15px;
    }

    :hover {
      background: #d22e26;
    }

    :hover:after {
      border-left-color: #d22e26;
    }
  }
`;
