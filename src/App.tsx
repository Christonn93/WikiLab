import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LayoutComponent } from "./layout/LayoutComponent";
import "./style/main.css";
import { NotFound } from "./pages/NotFound";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<LayoutComponent />}>
     <Route index element={<LandingPage />} />
     <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
  </Router>
 );
}

export default App;
