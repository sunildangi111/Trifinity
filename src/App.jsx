import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TutorForm from "./pages/TutorForm";
import StudentForm from "./pages/StudentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor" element={<TutorForm />} />
        <Route path="/student" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;