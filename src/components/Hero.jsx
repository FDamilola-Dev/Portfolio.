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
        Hi👋, <br /> my name is FATIMAH DAMILOLA OYESANMI, <br />A passionate
        Software Developer, I&apos;m a vibrant and articulate problem-solver
        with experience in writing well-designed, tested, and efficient code for
        the development of frontend applications utilizing JavaScript and
        TypeScript, I thrive in solving complex problems and pushing the
        boundaries of what&apos;s possible on the web.
      </P>
      <ImageContainer>
        <Image src="Headshot.jpg" alt="fatimah image" width={"300px"} />
      </ImageContainer>
    </Div>
  );
}
