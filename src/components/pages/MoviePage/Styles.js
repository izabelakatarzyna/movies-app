import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 2px solid orange;
  margin: 20px;
  color: white;
`;

export const Text = styled.div`
  display: block;
  width: 40%;
  margin: 40px 60px;
`;

export const Subtitle = styled.p`
font-weight: lighter;
`

export const Rating = styled.div`
  display: block;
  margin-top: 300px;
  border-radius: 15px;
  background-color: orange;
  width: 170px;
  color: black;
  text-decoration: double;
  font-size: 20px;
 align-items: center;
 padding: 30px;
`;
export const VoteRating = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const VoteCount = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
`;
