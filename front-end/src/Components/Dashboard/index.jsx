import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { auth } from "../../firebase";
import authAxios from "../../utils/client";

const Dashboard = () => {
  const user = auth.currentUser;
  // console.log(user.uid)
  useEffect(() => {
    authAxios().then(async (axios) => {
      const response = await axios.post("/user");
      console.log(response);
    });
  }, []);

  useEffect(() => {
    authAxios().then(async(axios)=>{
      const res = await axios.get("/user");
      console.log(res)
    })
  }, [])

  return (
    <div className="detailscontainer">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
