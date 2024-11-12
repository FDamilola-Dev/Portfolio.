import styled, { css } from "styled-components";

const H4 = styled.h4`
  text-transform: capitalize;
  font-size: 1.27rem;
  font-weight: 700;
  font-size: 1.5rem;
  /* margin-bottom: 30px; */
  ${(props) =>
    props.margin
      ? css`
          margin-bottom: 20px;
        `
      : ""}
`;

// eslint-disable-next-line react-refresh/only-export-components
export default H4;
