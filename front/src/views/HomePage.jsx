import HomePage from "../components/HomePage";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import { getData } from "../CRUD/generic";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const IntoItemPage = (Data) => {
    navigate("/ItemPage", { state: { Data: Data } });
  };

  const [test, isTest] = useState();
  useEffect(() => {
    getData("product").then((ev) => isTest(ev.data));
  }, []);
  return (
    <div>
      <TopBar />
      <HomePage IntoItemPage={IntoItemPage} test={test} />
    </div>
  );
};
export default Home;
