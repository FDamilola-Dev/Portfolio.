import styled from "styled-components";
import PropTypes from "prop-types";

const List = styled.li`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* grid-template-rows: repeat(5, 1fr); */
  column-gap: 10px;
  font-size: 0.857rem;
  line-height: 1.25rem;
  margin-bottom: 15px;

  /* &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-500);
  } */
`;

export default function AboutList({ children, key }) {
  return <List key={key}>{children}</List>;
}

AboutList.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number,
};
