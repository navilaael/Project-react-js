import Navbar from "./components/Navbar"; // Pastikan folder ini benar
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Beranda from "./pages/beranda/Beranda";
import Footer from "./components/Footer";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./store/Store";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Profil from "./pages/Profil";


function App() {
  const theme = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/Profil" element={<Profil />} />
          </Routes>
          <Footer />
        </Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
