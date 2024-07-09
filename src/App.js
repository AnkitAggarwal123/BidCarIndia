
import { Routes, Route } from "react-router-dom";
import AdminRouting from "./AdminRouting";
import UserRouting from "./UserRouting";


function App() {

  return (
    <Routes>
    {/* User Routes */}
    <Route path="/*" element={<UserRouting />} />

    {/* Admin Routes */}
    <Route path="/admin*" element={<AdminRouting />} />
  </Routes>
  );
}

export default App;