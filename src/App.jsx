import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import MainLayout from "./layouts/MainLayout";
import Project from "./pages/Project";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าที่จะไม่ให้มี Navbar / Sidebar ให้วางแยกไว้นอก MainLayout */}
        <Route path="/" element={<Login />} />

        {/* หน้าที่ต้องการ Navbar / Sidebar ให้วางไว้ข้างใน Route ของ MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/project" element={<Project />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
