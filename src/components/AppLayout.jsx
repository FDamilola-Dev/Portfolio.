import Header from "./header";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
// import SocialMedia from "./SocialMedia";
import {
  // FaGithub,
  // FaLinkedinIn,
  // FaTwitter,
  FaProjectDiagram,
} from "react-icons/fa";
import { IoMdHome, IoMdContacts } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";

const Div = styled.div`
  position: relative;
`;

const P = styled.p`
  position: fixed;
  right: 10px;
  top: 150px;
  z-index: 1000;

  cursor: pointer;
  border: 2px solid var(--color-grey-800);
  border-radius: 3px;

  @media (max-width: 983px) {
    top: 100px;
  }
`;

// const Grid = styled.div`
//   display: none;
//   cursor: pointer;
//   @media (max-width: 983px) {
//     display: block;
//   }
// `;

const Palet = styled.p`
  display: none;
  position: fixed;
  right: 50%;
  bottom: 10px;
  min-width: 300px;
  height: 50px;
  /* padding: 10px; */
  z-index: 100;

  color: var(--color-grey-900);
  background-color: var(--palet);
  cursor: pointer;
  border-radius: 50px;
  transform: translateX(50%);
  border: 1px solid var(--color-grey-500);

  @media (max-width: 983px) {
    display: block;
  }
`;

export default function AppLayout() {
  return (
    <Div>
      <P>
        <DarkModeToggle />
      </P>
      <Palet>
        {/* hi */}
        <p
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            // backgroundColor: "red",
          }}
        >
          <NavLink to={"/"}>
            <IoMdHome style={{ width: "30px", height: "30px" }} />
          </NavLink>
          <NavLink to={"/about"}>
            <SiAboutdotme style={{ width: "30px", height: "30px" }} />
          </NavLink>
          <NavLink to={"/project"}>
            <FaProjectDiagram style={{ width: "30px", height: "30px" }} />
          </NavLink>
          <NavLink to={"/contact"}>
            <IoMdContacts style={{ width: "30px", height: "30px" }} />
          </NavLink>

          {/* <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
          <FaGithub style={{ width: "30px", height: "30px" }} />
          <FaTwitter style={{ width: "30px", height: "30px" }} /> */}
        </p>
      </Palet>
      <Header />
      <Outlet />
    </Div>
  );
}
