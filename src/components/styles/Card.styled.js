import styled from "styled-components";

export const StyledCard = styled.div`
  flex: 0 0 400px;
  display: flex;
  flex-flow: column;
  min-height: 500px;
  width: auto;
  margin: 10px;
  box-shadow: 0 8px 8px -4px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  border-left: 1px solid rgba(0, 0, 0, 0.03);

  img {
    height: 350px;
    width: 300px;
    background-color: white;
    object-fit: contain;
  }
`;
export const StyledFlag = styled.div`
  background-color: rgb(84, 199, 84);
  margin: 10px;
  padding: 8px 16px;
  color: white;
  border-radius: 20px;
  position: absolute;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  height: 30%;
  padding: 8px;
  align-items: center;
`;

export const CardPrice = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
