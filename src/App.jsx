import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/DashboardPage";
import Project from "./pages/ProjectPage";
import Setting from "./pages/SettingPage";
// import Report from "./pages/ReportPage";
// import Log from "./pages/LogPage";

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
          <Route path="/project/ongoing" element={<Project />} />
          <Route path="/project/completed" element={<Project />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/report" element={<Report />} />
          <Route path="/log" element={<Log />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
