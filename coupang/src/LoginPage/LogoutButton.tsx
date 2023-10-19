//LogoutButton.tsx
import React from "react";
import axios from "axios";

interface LogoutButtonProps {
  onLogout: () => void;
}
// const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
//   const handleLogout = async () => {
export const logoutUser = async () => {
  console.log("Logout function triggered");

  const logoutUrl = "http://43.201.30.126:8080/api/user/logout";
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("토큰이 없습니다.");
    return;
  } else {
    console.log("토큰이 존재합니다:", token);
  }

  try {
    const response = await axios.get(logoutUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      localStorage.removeItem("token");
      console.log("서버에서 로그아웃 성공");
      alert("로그아웃 되었습니다");
      window.location.href = "/login";
    } else {
      console.error("서버에서 로그아웃 실패");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        console.log("Logout button clicked!");
        // handleLogout();
        logoutUser();
      }}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
