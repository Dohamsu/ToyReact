import React from "react";

const Login = () => {
  return (
    <div>
      <ul>
        <h4> 아이디 </h4>
        <input
          className="loginId"
          type="text"
          placeholder="아이디를 입력하세요."
        ></input>
        <h4> 비밀번호 </h4>
        <input
          className="loginPw"
          type="text"
          placeholder="비밀번호를 입력하세요."
        ></input>
      </ul>

      <button> 로그인 </button>
      <button> ID 찾기 </button>
      <button> PW 찾기 </button>
    </div>
  );
};

export default Login;
