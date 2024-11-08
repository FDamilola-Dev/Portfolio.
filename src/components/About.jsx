import styled, { css } from "styled-components";
import H4 from "../UI/H4";
import AboutList from "../UI/AboutList";
import Image from "../UI/Image";
import AboutOther from "../UI/AboutOther";
const Div = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 0.857rem;
`;

const Container = styled.div`
  margin-bottom: 20px;
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
  align-items: center;
  ${(prop) =>
    prop.margin
      ? css`
          margin-bottom: 10px;
        `
      : ""}
`;

const experienceArr = [
  {
    name: "SAIL",
    logo: "/Headshot.jpg",
    role: "Fullstack Engineer",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat quam iusto debitis. Expedita tenetur, odit, repudiandae alias porro sequi maiores blanditiis ea distinctio esse minus. Excepturi ipsam vero mollitia.",
  },
];

export default function About() {
  return (
    <Div>
      <Container>
        <H4>About me</H4>
        <InnerDiv>
          I am an aspiring Software Developer with a foundational knowledge of
          programming and hands-on experience in AI tools. Currently advancing
          technical skills through a structured software development program. I
          am analytical thinking, attention to detail, and a commitment to
          continuous learning, with a background in roles requiring management
          and effective communication.eager to apply newly acquired technical
          abilities in an entry-level software development role.
        </InnerDiv>
      </Container>
      <Container>
        <H4 margin="10">Work Experience</H4>
        <ul>
          {experienceArr.map((exp, indx) => (
            <AboutList key={indx}>
              <Image src={exp.logo} alt={exp.name} />
              <AboutOther dto="dto" exp={exp} />
            </AboutList>
          ))}
        </ul>
      </Container>
    </Div>
  );
}
