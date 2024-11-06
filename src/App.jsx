import GlobalStyle from "./styles/GlobalStyle";
// import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AppLayout from "./components/AppLayout";
import AboutPage from "./page/AboutPage";
import ProjectPage from "./page/ProjectPage";
import TechStackPage from "./page/TechStackPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate to={"/"} replace />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/tech" element={<TechStackPage />} />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Routes>
        {/* <Header /> */}
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
