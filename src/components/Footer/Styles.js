import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  background-color: black;
  justify-content: space-between;
  margin: 25px;
  border-top: 2px solid orange;
`;

export const Text = styled.div`
  display: flex;
  font-size: large;
  font-weight: bold;
  text-align: center;
  color: orange;
  margin-top: 60px;
`;

export const Chat = styled.div`
  //display: block;
  justify-content: flex-end;
  text-align: center;
  margin: 15px;
  color: black;
  border-radius: 15px;
  color: orange;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  font-size: 16px;

`;
