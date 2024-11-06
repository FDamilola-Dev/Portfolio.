import styled, { css } from "styled-components";

const H4 = styled.h4`
  text-transform: capitalize;
  font-size: 1.27rem;
  font-weight: 700;
  /* margin-bottom: 30px; */
  ${(props) =>
    props.margin
      ? css`
          margin-bottom: 20px;
        `
      : ""}
`;

export default H4;
