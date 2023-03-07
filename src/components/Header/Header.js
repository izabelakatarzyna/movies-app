import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import * as Styled from "./Styles";
import image from "../../Images/logo.jpg";

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Image>
        <img src={image} />
      </Styled.Image>

      <Styled.Nav>
        <ul>
          <Styled.Icons>
            <AiTwotoneHome />
            <Styled.LinkMovie to="/">Homepage</Styled.LinkMovie>
          </Styled.Icons>
          <Styled.Icons>
            <FaSearch />
            <Styled.LinkMovie to="/search">Search</Styled.LinkMovie>
          </Styled.Icons>

          <Styled.Icons>
            <MdContactMail />
            <Styled.LinkMovie to="/contact">Contact</Styled.LinkMovie>
          </Styled.Icons>
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default Header;
