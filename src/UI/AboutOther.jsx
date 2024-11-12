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

  @media (max-width: 983px) {
    ${({ font }) =>
      font &&
      css`
        font-size: 10px;
      `}
  }

  &:active {
    transform: translateY(2px); /* Specify a value for translateY */
  }
`;

const Company = styled.p`
  white-space: nowrap;

  @media (max-width: 983px) {
    ${({ font }) =>
      font &&
      css`
        font-size: 11px;
      `}
  }
`;

const Role = styled.p`
  text-transform: capitalize;
  white-space: nowrap;
  @media (max-width: 983px) {
    ${({ font }) =>
      font &&
      css`
        font-size: 10px;
      `}
  }
`;

const Period = styled.span`
  padding: 5px 20px;
  border-radius: 10px;
  white-space: nowrap;
  font-size: 15px;
  color: var(--color-grey-400);
  @media (max-width: 983px) {
    ${({ font }) =>
      font &&
      css`
        font-size: 11px;
      `}
  }
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

  if (exp.school) {
    return (
      <Container dto={dto}>
        <InnerDiv onClick={() => setIsShow((show) => !show)} margin="10">
          <div>
            <Company font="font">
              {exp.school}
              {/* <Span>{isShow ? "" : "hi"}</Span> */}
            </Company>
            <Role font="font">{exp.department}</Role>
          </div>
          <Period font="font">{`${exp.startDate} - ${exp.endDate}`}</Period>
        </InnerDiv>
        {/* {isShow && <P>{exp.description}</P>} */}
      </Container>
    );
  }

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
