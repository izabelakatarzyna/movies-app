import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    height: 40px;
    margin: 40px;
    padding-right: 10px;
    border-radius: 5px;
    border: 2px solid orange;
    background-color: white;
    color: orange;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
  color: orange;
  text-align: center;
  margin-top: -50px !important;
`;

export const Text = styled.div`
  margin: 40px;
  color: white;
`;
