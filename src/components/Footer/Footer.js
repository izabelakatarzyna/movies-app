import React from "react";
import * as Styled from "./Styles";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Text>Created by Izabela</Styled.Text>

      <Styled.Chat>
        <Styled.Paragraph>Let's chat!</Styled.Paragraph>
        <Styled.Paragraph>cbt@wp.pl</Styled.Paragraph>
        <Styled.Icons>
          <BsFacebook />
          <FaTwitter />
          <AiFillInstagram />
        </Styled.Icons>
      </Styled.Chat>
    </Styled.Wrapper>
  );
};

export default Footer;
