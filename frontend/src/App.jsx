import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-300 h-screen flex flex-col">
        <div className="bg-white shadow-lg h-screen shadow-stone-400 mx-48 my-16 rounded-2xl">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio/:projectId" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
