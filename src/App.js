import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ContactUS from "./Components/ContactUS";
import ListProduct from "./Components/ListProduct";
import Panier from "./Components/Panier";
import SingleProduct from "./Components/SingleProduct";
import Apropos from "./Components/Apropos";
import Login from "./Components/Login";
import Registre from "./Components/Registre";
import NotFound from "./Components/NotFound";
import AllAcualites from "./Components/AllAcualites";
import SingleActualite from "./Components/SingleActualite";
function App() {
  return (
    <BrowserRouter
    /* basename="/Nostorm_Mare"
    basename={document.baseURI.substring(
      document.baseURI.indexOf(window.location.origin) +
      window.location.origin.length,
      document.baseURI.lastIndexOf("/")
      
    )}
    */
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/ListProduct" element={<ListProduct />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/AllAcualites" element={<AllAcualites />} />
        <Route path="/actualite/:id" element={<SingleActualite />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
