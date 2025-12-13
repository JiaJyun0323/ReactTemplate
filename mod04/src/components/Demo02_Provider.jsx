import React, { createContext, useContext } from "react";
const UserContext = createContext(null);
const UserInfoContext = createContext(null);

export function MyProvider({ children }) {
  return (
    <>
      <UserContext value={{ username: "john", email: "john@uuu.com.tw" }}>
        <UserInfoContext value={{ age: 30, country: "USA", sex: "male" }}>
          {children}
        </UserInfoContext>
      </UserContext>
    </>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserInfo() {
  return useContext(UserInfoContext);
}
