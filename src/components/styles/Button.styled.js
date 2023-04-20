import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #4caf50;
  width: 60%;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24),
      0 8px 15px 0 rgba(0, 0, 0, 0.338);
  }
`;
