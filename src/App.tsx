import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateWiki, LandingPage, NotFound } from "./pages";
import { LayoutComponent } from "./layout/LayoutComponent";
import "./style/main.css";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<LayoutComponent />}>
     <Route index element={<LandingPage />} />
     <Route path="create" element={<CreateWiki />} />
     <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
  </Router>
 );
}

export default App;
