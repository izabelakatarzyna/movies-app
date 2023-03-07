import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: row;

  & ul {
    display: flex;
    justify-content: space-around;
    width: 400px;

    & li {
      font-style: normal !important;
    }
  }
`;
export const Image = styled.div`
  & img {
    width: 100px;
    margin: 10px;
  }
`;

export const LinkMovie = styled(Link)`
  color: orange;
  text-decoration: none;
  font-weight: 200;
  font-size: 16px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    color: orange;
    padding: 10px;
  }
`;
