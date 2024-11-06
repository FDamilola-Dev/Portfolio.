import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Container = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  ${(prop) =>
    prop.dto
      ? css`
          margin-bottom: 0px;
          grid-column: 2/11;
        `
      : ""}
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  /* align-items: center; */
  ${(prop) =>
    prop.margin
      ? css`
          margin-bottom: 10px;
        `
      : ""}/* &:active {
    transform: translateY();
  } */
`;

const Company = styled.p``;

const Role = styled.p`
  text-transform: capitalize;
`;

const Period = styled.span`
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 15px;
  color: var(--color-grey-400);
`;

const P = styled.p`
  transition: all 1s ease-in;
`;

// const Span = styled.span`
//   /* display: none;
//   &:hover {
//     display: block;
//   } */
// `;

export default function AboutOther({ exp, dto }) {
  //   const [dropDown, setDropDown] = useState(false);
  const [isShow, setIsShow] = useState(false);

  return (
    <Container dto={dto}>
      <InnerDiv onClick={() => setIsShow((show) => !show)} margin="10">
        <div>
          <Company>
            {exp.name}
            {/* <Span>{isShow ? "" : "hi"}</Span> */}
          </Company>
          <Role>{exp.role}</Role>
        </div>
        <Period>{`${exp.startDate} - ${exp.endDate}`}</Period>
      </InnerDiv>
      {isShow && <P>{exp.description}</P>}
    </Container>
  );
}

AboutOther.propTypes = {
  exp: PropTypes.object,
  dto: PropTypes.string,
};
