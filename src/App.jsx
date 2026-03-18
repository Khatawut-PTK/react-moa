import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/DashboardPage";
import Project from "./pages/ProjectPage";
import Setting from "./pages/SettingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าที่จะไม่ให้มี Navbar / Sidebar ให้วางแยกไว้นอก MainLayout */}
        <Route path="/" element={<Login />} />

        {/* หน้าที่ต้องการ Navbar / Sidebar ให้วางไว้ข้างใน Route ของ MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
