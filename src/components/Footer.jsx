import styled from "styled-components";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer1 = styled.footer`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;

  @media (max-width: 983px) {
    gap: 20px;
    /* transform: translateY(-50px); */
  }
`;

export default function Footer() {
  return (
    <Footer1>
      <Logo />
      <SocialMedia>
        {/* <p>+2349096525369</p>
        <p>foyesanmi@gmail.com</p> */}
        <FaGithub style={{ color: "var(--color-gray-20)" }} />
        <FaTwitter style={{ color: "var(--color-gray-20)" }} />
        <FaLinkedinIn style={{ color: "var(--color-gray-20)" }} />
      </SocialMedia>
    </Footer1>
  );
}
