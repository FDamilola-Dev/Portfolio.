import styled from "styled-components";
import { NavLink } from "react-router-dom";

// const Div = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   color: var(--color-gray-100);

//   @media (max-width: 983px) {
//     display: none;
//   }
//   /* width: 60%; */
//   /* border: 1px solid red; */
// `;

const P = styled.p`
  text-transform: capitalize;
  cursor: pointer;
  white-space: nowrap;
`;

export default function NavItems() {
  return (
    <>
      <P>
        <NavLink to={"/"}>Home</NavLink>
      </P>
      <P>
        <NavLink to={"/about"}>about</NavLink>
      </P>
      <P>
        <NavLink to={"/tech"}>tech stack</NavLink>
      </P>
      <P>
        <NavLink to={"/project"}>project</NavLink>
      </P>
      <P>
        <NavLink to={"/contact"}>contact</NavLink>
      </P>
    </>
  );
}
