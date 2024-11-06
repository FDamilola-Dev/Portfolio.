import Main from "../components/main";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <TechStack />
        <Project />
      </Main>
      <Footer />
    </>
  );
}
