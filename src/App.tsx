import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { useLocation } from "react-router-dom";

function App() {
  const [openMenuPopup, setOpenMenuPopup] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenMenuPopup(false);
  }, [location]);

  const handlePopupToggling = () => {
    setOpenMenuPopup((prev) => !prev);
  };

  return (
    <div className="App">
      <Header
        openMenuPopup={openMenuPopup}
        handlePopupToggling={handlePopupToggling}
      />
      {openMenuPopup ? <Menu /> : <Routing />}
      <Footer />
    </div>
  );
}

export default App;
