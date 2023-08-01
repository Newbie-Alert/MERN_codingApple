import React, { useState } from "react";
import styles from "./signin.module.css";

function SignIn() {
  let [info, setInfo] = useState("");
  let [infoSwitch, setInfoSwitch] = useState(false);

  function IdRegex(userId) {
    let regExp = /^[a-zA-Z0-9]*$/gi;

    return regExp.test(userId);
  }

  console.log(IdRegex("aggean0323"));

  function AlertTimeOut() {
    setTimeout(() => {
      setInfoSwitch(false);
    }, 1500);
  }
  return (
    <div className={styles.sign_in_container}>
      <form className={styles.sign_in_form} action="/user/signin" method="POST">
        {infoSwitch == true ? <ModalComp info={info} /> : null}
        <div className={`${styles.input_id} ${styles.input_box}`}>
          <label htmlFor="input_userId">아이디</label>
          <input
            required
            name="user-id"
            type="text"
            id="input_userId"
            className={`${styles.sign_in_input} ${styles.input_id}`}
            onChange={(e) => {
              if (IdRegex(e.target.value) == true) {
              } else if (IdRegex(e.target.value) == false) {
                setInfo("ID");
                setInfoSwitch(true);
                AlertTimeOut();
                e.target.value = "";
              }
            }}
          />
          <p
            style={{
              color: "red",
              letterSpacing: "0.01rem",
            }}
          >
            * 영문과 숫자 조합
          </p>
        </div>

        <div className={`${styles.input_email} ${styles.input_box}`}>
          <label htmlFor="input_userEmail">이메일</label>
          <input
            required
            name="user-email"
            type="text"
            id="input_userEmail"
            className={`${styles.sign_in_input} ${styles.input_id}`}
          />
        </div>

        <div className={`${styles.input_pw} ${styles.input_box}`}>
          <label htmlFor="input_userPw">비밀번호</label>
          <input
            required
            name="user-password"
            type="text"
            id="input_userPw"
            className={`${styles.sign_in_input} ${styles.input_id}`}
          />
          <p
            style={{
              color: "red",
              letterSpacing: "0.01rem",
            }}
          >
            * 숫자/영문/특수문자 조합(!,@,#,$,*) 8글자 이상
          </p>
        </div>

        <div className={`${styles.input_name} ${styles.input_box}`}>
          <label htmlFor="input_userName">이름</label>
          <input
            required
            name="user-name"
            type="text"
            id="input_userName"
            className={`${styles.sign_in_input} ${styles.input_id}`}
          />
        </div>
      </form>
    </div>
  );
}

/*
 ** 정규식 형식 체크
 ** 예시 1) $.regExpCheck($('#corp_num').val(), 'num2', 'str');
 ** 예시 2) $.regExpCheck($('#tel').val(), 'tel');
 */

let regExpCheck = function (sVal, sRegExpType, sReturnType) {
  if (typeof sReturnType == "undefined") {
    sReturnType = "bool";
  }
  var sRegExp1 = /^[]/;
  var sRegExp2 = /.*/;
  var sExpType = sRegExpType.toLowerCase();
  switch (sExpType) {
    case "eng":
      // 영문 체크
      sRegExp1 = /^[a-zA-Z\s-]/gi;
      break;
    case "tel1":
    case "tel2":
    case "tel":
      // 휴대폰번호 체크(하이픈 포함)
      sRegExp1 = /^01([0|16789]?)-?([0-9]{3,4})-?([0-9]{4})$/;
      // 휴대폰번호 체크(하이픈 미포함)
      sRegExp2 = /^(01[016789])([0-9]{7,8})$/;
      break;
    case "corpnum":
      // 사업자 등록번호 체크
      sRegExp1 = /^[0-9_-]{10,12}$/;
      break;
    case "passwd":
      // 비밀번호 체크
      sRegExp1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
      break;
    case "num1":
    case "num2":
    case "num":
      // 숫자 체크(하이픈 미포함)
      sRegExp1 = /[^0-9]/gi;
      // 숫자 체크(하이픈 포함)
      sRegExp2 = /^[0-9\s-]+$/;
      break;
    case "email":
      // 이메일 체크
      sRegExp1 =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,20}$/;
      break;
    case "url":
      // URL 체크
      sRegExp1 =
        /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;
      break;
    case "param":
      // URL 파라미터 체크
      sRegExp1 = /[&]+([^=&]+)=([^&]*)/gi;
      break;
    default:
      break;
  }

  // 형식 여부만 return
  if (sReturnType === "bool") {
    // 기본 형식체크 결과값
    var bRegExpResult = true;
    if (sRegExpType === "tel") {
      if (sVal !== "" && !sRegExp1.test(sVal) && !sRegExp2.test(sVal)) {
        bRegExpResult = false;
      }
    } else {
      if (sVal !== "" && !sRegExp1.test(sVal)) {
        bRegExpResult = false;
      }
    }

    return bRegExpResult;

    // 정규식에 맞지 않은 문자열 빈값으로 처리해서 return
  } else {
    if (sExpType === "tel2" || sExpType === "num2") {
      return sVal.replace(sRegExp2, "");
    }
    return sVal.replace(sRegExp1, "");
  }
};

// MODAL COMP
function ModalComp({ info }) {
  return (
    <div className={styles.alert_modal}>
      <p>{info}를 확인해주세요</p>
    </div>
  );
}

export default SignIn;