import React from "react";
import "./App.css";
import Main from "./components/main/main.jsx";
import Catalog from "./components/catalog/catalog.jsx";
import Production from "./components/production/production.jsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/contacts.jsx"
import TemplayetPage from "./TemplayetPage";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TemplayetPage/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/production" element={<Production/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
