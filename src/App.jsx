import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import CvPage from "./pages/CvPage";
import InterviewPage from "./pages/InterviewPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/entrevista" element={<InterviewPage />} />
        <Route path="/carreras" element={<CareersPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
