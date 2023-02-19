import "./App.css";
import { HeaderComponent } from "./components/header/Header.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";

import HomePage from "./pages/Home.page";
import NotFoundPage from "./components/NotFound.page";
import ProjectsPage from "./pages/Projects.page";
import ContactsPage from "./pages/Contacts.page";

export const navItems = ["projects", "contacts"];

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path={"/" + navItems[0]} element={<ProjectsPage />} />
          <Route path={"/" + navItems[1]} element={<ContactsPage />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
