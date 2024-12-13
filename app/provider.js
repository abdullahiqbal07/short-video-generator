"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetails } from "./_context/UserDetailsContext";
function Provider({ children }) {
  const { user } = useUser();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    console.log("Creating new user:", user);

    try {
      const response = await axios.post("/api/user", { user:user });
      console.log("User created/verified successfully:", response.data);

      // Update users state if needed
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <div>
      <UserDetails.Provider value={{users, setUsers}}>{children}</UserDetails.Provider>
    </div>
  );
}

export default Provider;
