import React from "react";
import Navbar from "./Components/Navbar";
import ProfileBody from "./Components/ProfileBody";
import ProfileView from "./Components/ProfileView";
import { Redirect } from "react-router-dom";

function AdminProfilePage() {
  alert("jj")
  const activeUserDetails = JSON.parse(localStorage.getItem("activeUser"));
  if (activeUserDetails === null || activeUserDetails.active === false) {
    // return <Redirect to="/" />;
  }
  return (
    <div>njnjn
      {/* <Navbar />
      <ProfileView />mkmk
      <ProfileBody /> */}
    </div>
  );
}

export default AdminProfilePage;
