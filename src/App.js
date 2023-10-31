import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Client from "./pages/Client";
import Practice from "./pages/Practice";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/client" element={<Client />} />
          <Route path="/" element={<Practice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
