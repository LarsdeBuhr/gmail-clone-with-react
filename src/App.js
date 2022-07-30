import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
   return (
      <Router>
         <div className="app">
            <Header />
            <div className="div__body">
               <Sidebar />
               <Routes>
                  <Route path="/mail" element={<Mail />}></Route>
                  <Route path="/" element={<EmailList />}></Route>
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
