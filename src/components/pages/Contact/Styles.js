import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  background-color: black;
  margin: 25px;
`;

export const Text = styled.div`
  display: flex;
  font-size: large;
  font-weight: bold;
  text-align: center;
  color: orange;
  align-items: center;
  padding: 15px;
`;

export const Chat = styled.div`
  //display: block;
  //justify-content: center;
  //text-align: center;
  margin: 15px;
  color: black;
  //border-radius: 15px;
  color: orange;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;
