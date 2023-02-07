import Login from "./views/Login";
import Main from "./views/Mainpage";
import CustomerCreateAccount from "./views/CustomerCreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "./CRUD/generic";

function Ways() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    getData("company").then((company) => setTest(company.data));
  }, []);

  console.log(test);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index={true} element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/CustomerCreateAccount"
            element={<CustomerCreateAccount />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
