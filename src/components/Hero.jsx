import styled, { keyframes } from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  /* min-height: calc(100vh - 60px); */
  justify-content: center;
  gap: 50px;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  margin-bottom: 30px;
  visibility: hidden;
  /* visibility: visible; */

  /* flex-wrap: wrap; */
  /* flex: 1; */
  /* border: 1px solid red; */

  @media (max-width: 983px) {
    flex-direction: column;
    margin-bottom: 50px;
    gap: 20px;
  }
`;

const slideFromLeft = keyframes`
  from {
    transform: translateX(-900px);
    opacity: 0;
  }
 
 to {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;

 }
`;

const P = styled.p`
  max-width: 50%;

  @media (max-width: 983px) {
    max-width: 100vw;
  }

  animation: ${slideFromLeft} 0.8s linear 0.1s forwards;
`;

const ImageContainer = styled.div``;

const slideFromRight = keyframes`
  from {
    transform: translateX(900px);
    opacity: 0;
  }
 
 to {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
 }
`;

const Image = styled.img`
  border-radius: 5px;
  box-shadow: var(--shadow-lg);

  animation: ${slideFromRight} 0.8s ease-in 0.1s forwards;
`;

export default function Hero() {
  return (
    <Div>
      <P>
        Hi 👋, I&apos;m Fatimah Damilola Oyesanmi, a software developer based in
        Lagos, Nigeria. Passionate about crafting well-designed, efficient
        code,as I have experience building frontend applications using
        JavaScript and React. Tackling complex problems and finding creative
        solutions that push the limits of what&apos;s possible on the web
        excites me. Currently, I&apos;m deepening my technical skills through a
        structured software development program, while also bringing my
        background in management and communication to help me work effectively
        within teams. With enthusiasm to step into an entry-level role, I look
        forward to learning, applying my skills, and contributing to impactful
        projects.
      </P>
      <ImageContainer>
        <Image src="Headshot.jpg" alt="fatimah image" width={"300px"} />
      </ImageContainer>
    </Div>
  );
}
