import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";
import { auth } from "../../firebase";

const Dashboard = () => {
  useEffect(() => {
    auth.currentUser
      ?.getIdToken()
      .then( async(idToken) => {
          const response = await axios.post(
          `${import.meta.env.VITE_APP_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${idToken}`
            },
          }
        );
        console.log(response)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="detailscontainer">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
