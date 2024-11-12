import styled, { css } from "styled-components";
import H4 from "../UI/H4";
import AboutList from "../UI/AboutList";
import Image from "../UI/Image";
import AboutOther from "../UI/AboutOther";
const Div = styled.div`
  max-width: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 0.857rem;
  margin-left: 100px;
  @media (max-width: 983px) {
    margin-left: 0px;
    max-width: 100%;
    padding: 10px;
  }
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
    name: "Sail",
    logo: "/Headshot.jpg",
    role: "FullStack Engineer",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat quam iusto debitis. Expedita tenetur, odit, repudiandae alias porro sequi maiores blanditiis ea distinctio esse minus. Excepturi ipsam vero mollitia.",
  },
  // {
  //   name: "Tilka",
  //   logo: "/Headshot.jpg",
  //   role: "Backend Engineer",
  //   startDate: "January 2023",
  //   endDate: "Present",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat quam iusto debitis. Expedita tenetur, odit, repudiandae alias porro sequi maiores blanditiis ea distinctio esse minus. Excepturi ipsam vero mollitia.",
  // },
];

const educationArr = [
  {
    school: "Yaba College of Technology",
    department: "Hospitality and Hotel management",
    startDate: "Feb 2018",
    endDate: "Dec 2019",
    degree: "HND",
  },
  // {
  //   school: "Bells university of Technology",
  //   department: "Hospitality and Hotel management",
  //   startDate: "Feb 2017",
  //   endDate: "Dec 2018",
  //   degree: "HND",
  // },
  // {
  //   school: "Yaba College of Technology",
  //   department: "Hospitality and Hotel management",
  //   startDate: "Feb 2017",
  //   endDate: "Dec 2018",
  //   degree: "OND",
  // },
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
      <Container>
        <H4 margin="10">Education</H4>
        <ul>
          {educationArr.map((exp, indx) => (
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
