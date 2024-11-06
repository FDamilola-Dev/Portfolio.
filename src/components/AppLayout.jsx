import Header from "./header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
// import SocialMedia from "./SocialMedia";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Div = styled.div`
  position: relative;
`;

const P = styled.p`
  position: fixed;
  right: 10px;
  top: 150px;
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
  min-width: 200px;
  padding: 10px;
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
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <FaLinkedinIn style={{ width: "15px" }} />
          <FaGithub style={{ width: "15px" }} />
          <FaTwitter style={{ width: "15px" }} />
        </p>
      </Palet>
      <Header />
      <Outlet />
    </Div>
  );
}
