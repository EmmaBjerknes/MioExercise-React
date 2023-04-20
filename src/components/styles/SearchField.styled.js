import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid grey;
  border-radius: 25px;
  width: 300px;
  height: 50px;

  input {
    border: none;
    margin: 10px;
    outline: none;
    width: -webkit-fill-available;
    height: fit-content;
    font-size: 16px;
  }
`;
