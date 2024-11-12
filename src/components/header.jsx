import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import NavItems from "./NavItems";

// import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  gap: 100px;
  font-size: 20px;
  align-items: center;
  /* border: 1px solid black; */
  margin-bottom: 30px;
  margin-left: 95px;

  @media (max-width: 983px) {
    margin-bottom: 30px;
    margin-left: 0px;
    justify-content: center;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: var(--color-gray-100);

  @media (max-width: 983px) {
    display: none;
  }
  /* width: 60%; */
  /* border: 1px solid red; */
`;

// const Contact = styled.div`
//   width: 20%;
//   /* border: 1px solid green; */
//   display: flex;
//   gap: 15px;
//   justify-content: end;
// `;

export default function Header() {
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <Nav>
      <Logo />
      <Div>
        <NavItems />
        <SocialMedia>
          <FaGithub />
          <FaTwitter />
          <FaLinkedinIn />
        </SocialMedia>
      </Div>

      {/* <Grid onClick={() => setIsClicked((clicked) => !clicked)}>
        {isClicked ? <FaTimes /> : <IoGrid />}
      </Grid> */}
    </Nav>
  );
}
