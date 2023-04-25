import React from "react";
import LoginModal from "./components/LoginModal";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(() => {
    const data = localStorage.getItem("token");
    if (!data) return true;
    return false;
  });

  return (
    <div>
      {open ? (
        <LoginModal open={open} setOpen={setOpen} />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      )}
      {/* 
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
    </div>
  );
};

export default App;
