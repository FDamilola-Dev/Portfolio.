import styled from "styled-components";
import PropTypes from "prop-types";

const Li = styled.li`
  width: 400px;
  /* width: 373px; */
  min-height: 467px;
  /* box-shadow: var(--shadow-md); */
  box-shadow: 0 0 4px black;
  border-radius: 20px;
  /* background-color: var(--); */
  /* border: 1px solid red; */

  @media (max-width: 983px) {
    width: 90%;
  }
`;

export default function ProjectCard({ children, key }) {
  return <Li key={key}>{children}</Li>;
}

ProjectCard.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number,
};
