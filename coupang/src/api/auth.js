import axiosClient from "../api/index";

async function signup({
  gender,
  name,
  email,
  password,
  phone,
  address,
  detailedAddress,
  img,
  certificationNumber,
}) {
  try {
    const response = await axiosClient.post(
      "http://43.201.30.126:8080/api/user/signup",
      {
        gender: gender,
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
        detailedAddress: detailedAddress,
        img: img,
        certificationNumber: certificationNumber,
      }
    );

    if (response.data.success) {
      const tokenWithBearer = response.headers["authorization"];
      if (tokenWithBearer && tokenWithBearer.startsWith("Bearer ")) {
        const token = tokenWithBearer.split(" ")[1];
        console.log("반환된 토큰:", token);
        localStorage.setItem("token", token);
        return {
          token: token,
          message: "성공적으로 회원가입되었습니다.",
        };
      } else {
        return {
          message: "토큰이 반환되지 않았습니다.",
        };
      }
    }
  } catch (error) {
    console.error("API 호출 오류:", error.message);
    if (error.response && error.response.data) {
      return {
        success: false,
        message: error.response.data.message || "서버에 연결할 수 없습니다.",
      };
    } else {
      return {
        success: false,
        message: "서버에 연결할 수 없습니다.",
      };
    }
  }
}

export default signup;
