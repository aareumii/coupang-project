import React from "react";
import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    console.log("Logout function triggered"); // 함수가 시작될 때 로그 출력

    try {
      const logoutUrl = "http://43.201.30.126:8080/api/user/logout";
      // 먼저 토큰의 값을 가져옵니다.
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("토큰이 없습니다.");
        return;
      } else {
        console.log("토큰이 존재합니다:", token); // 토큰의 값 로그 출력
      }

      // 로그아웃 요청을 보내고, 헤더에 토큰을 포함시킵니다.
      const response = await axios.get(logoutUrl, {
        headers: {
          token: token,
        },
      });

      if (response.status === 200) {
        console.log("서버에서 로그아웃 성공");
        // 로컬 스토리지에서 토큰을 삭제합니다.
        // localStorage.removeItem("Authorization");
        localStorage.removeItem("token");

        // 로그인 페이지로 리디렉션
        window.location.href = "/login"; // 페이지를 새로고침하지 않고 리디렉션
      } else {
        console.error("서버에서 로그아웃 실패");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button
      onClick={() => {
        console.log("Logout button clicked!"); // 버튼 클릭시 로그 출력
        handleLogout();
      }}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
