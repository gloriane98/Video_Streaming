import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import authAxios from "../../utils/client";

const Dashboard = () => {
  useEffect(() => {
    authAxios().then(async (axios) => {
      const response = await axios.post("/user");
      // console.log(response)
    }).catch(err=> console.log(err));
  }, []);

  useEffect(() => {
    authAxios().then(async (axios) => {
      const res = await axios.get("/user");
      localStorage.setItem("userId",res.data._id)
      // console.log(res)
    }).catch(err=> console.log(err));
  }, []);

  return (
    <div className="detailscontainer">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
