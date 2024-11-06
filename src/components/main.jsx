import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.main`
  /* border: 1px solid red; */
  /* display: grid;
  gap: 150px; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

export default function Main({ children }) {
  return <Div>{children}</Div>;
}

Main.propTypes = {
  children: PropTypes.node,
};
