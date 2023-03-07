import React from "react";
import * as Styled from "./Styles";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import MainTemplate from "../../templates/MainTemplate";

const ContactPage = () => {
  return (
    <MainTemplate>
      <Styled.Wrapper>
        <Styled.Chat>
          <Styled.Paragraph>Let's chat!</Styled.Paragraph>

          <Styled.Text>
            <IoMailSharp />
            <Styled.Paragraph>cbt@wp.pl</Styled.Paragraph>
          </Styled.Text>

          <Styled.Text>
            <BsFillTelephoneFill />
            <Styled.Paragraph>700-700-700</Styled.Paragraph>
          </Styled.Text>

          <Styled.Icons>
            <BsFacebook />
            <FaTwitter />
            <AiFillInstagram />
          </Styled.Icons>
        </Styled.Chat>
      </Styled.Wrapper>
    </MainTemplate>
  );
};

export default ContactPage;
