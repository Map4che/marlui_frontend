import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
// import Footer from "./components/Footer";
// import { database } from "./db/db";
// import { useState } from "react";
// import Admin from "./pages/Admin";
//import Login from "./components/Login";

function App() {
  // const [auth, setAuth] = useState(false);

  // const verify = (state) => {
  //    setAuth(prop.auth);
  //  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/service" exact element={<Service />} />
          {/* {auth ? (
            <Route path="/admin" exact element={<Admin />} />
          ) : ( */}
        </Routes>
        {/* <Footer />  */}
      </Router>
    </>
  );
}

export default App;
