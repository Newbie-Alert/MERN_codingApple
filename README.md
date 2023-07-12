## 1일 차

### Nav Comp 제작

## 2일 차

### MainPage_section 제작

## 3일 차

### MainPage_2번 section 제작, MainPage 반응형 적용

## 4일 차

### MainPage 완료

# Server Tutorial 후

[백엔드 학습](https://github.com/Newbie-Alert/serverTutorial)

## 서버와 연동하여 로그인 기능 추가

- **passport** 라이브러리를 통하여 local 방식 인증을 사용
- useEffect를 통해 Nav 컴포지션이 마운트 될 시, DB의 유저 데이터 속 activate 값에 따라 UI 변경

## 6일 차

### Course Page 만드는 중

- DB에서 강의 목록 정보를 가져와 UI 생성
- mongo DB의 search index를 통해 UI목록을 최신순, 가나다순, 인기순으로 정렬하는 기능을 추가할 예정
  <br/>

### 필요한 부분

- mongo DB에 데이터를 등록해놓을 때 하나하나 손으로 넣기에는 시간이 오래 걸려서
  mongo DB 명령어에 대해 학습해야겠다.

## 7일 차

- course Page UI 수정

## 8일 차

- 서버에서 url parameter를 사용하여 각각의 detail페이지에 필요한 정보를 제공할 수 있도록 API를 제작하였다.  
   이제 detail페이지를 열 때 해당 detail page에 필요한 데이터를 가져올 수 있다.  
   예) detail/0 페이지를 열면 detail/0 에 해당하는 정보를 가져옴.

  ### 원리

  요청에 담겨오는 `url parameter`와 `같은 id 값을 가진 데이터`를 DB에서 찾아서 프론트로 전달해주는 것.  
   주의할 부분은 `url parameter`는 `String 타입`이라서 `형변환이 필요`하다는 것

  ```javascript
  server.js;

  app.get("/detail/:id", function (req, res) {
    db.collection("data").findOne(
      { id: parseInt(req.params.id) },
      function (err, result) {
        res.json(result);
      }
    );
  });
  ```

### 제작은 실패했다

#### 실패 사유

- 서버에서 데이터를 가져와 state에 적용하기까지는 성공했으나,  
  STATE가 자꾸 새로고침 할 때마다 초기화 되어 데이터가 없다고 한다.

## 9일 차

### Detail Page 제작 성공

### 해결방안

- 8일 차에는 프론트에서 get요청을 할 때 이전에 만들어 놓은 API에 요청을 했었는데 (요청 주소만 다르고 요청 처리 방식은 똑같은 것)  
  `url parameter`를 사용한 API로 데이터를 받아올 수 있게 수정하였더니 해결됐다.  
  서버에서 처리 하는 방식은 같은데  
  왜 url parameter를 사용하는 페이지에서는 새로고침 할 때마다 useEffect가 작동하지 않았었는지 아직 이유는 잘 모르겠다.....🤔🤔🤔🤔🤔🤔

## 10일 차

### 산 넘어 산 \_ DB의 데이터들

8일 차에서 조금 막혔다가 해결하고 넘어오니  
이번엔 DB에 할 일이 많아 속도가 더뎌졌다.  
Detail Page에 정보가 상당히 많이 들어간다.  
처음에는 간단히 생각하고 주먹구구 식으로 DB를 만들었는데  
강좌의 커리큘럼 테이블에 들어갈 정보들,  
리뷰단에 들어갈 리뷰 데이터들까지..  
리뷰는 리뷰를 강좌 카테고리별로 나눠야하고,
할 일이 많아서 머리가 복잡하다.  
프론트도 bootstrap을 사용하지 않고 만들고 있지만 언젠가 bootstrap을 써야할 수도 있을 거 같다.

### 문제와 해결

### Html parsing

DB에서 커다란 `String`형태의 `html`자료를 리액트에 바인딩 해보니  
아래와 같이 String 형태로 나오는 문제가 있었다.

```
<p>&nbsp;</p>
<p>Next.js는 프론트엔드부터 서버까지 만들 수 있는 React기반 프레임워크입니다.</p>
<p>이것만 사용해도 풀스택 웹개발이 가능합니다.&nbsp;</p>
<p>&nbsp;</p>
<p>Next.js 사용시 서버사이드 렌더링이 쉽기 때문에&nbsp;</p>
```

구글링을 해보니 `String형태의 html`을 `html로 렌더`해서 출력해주는 라이브러에 대해 알게 됐다.
`react-html-parser` 라는 라이브러리였는데
사용법과 효과는 아래와 같았다.

### react-html-parser 사용법

```javascript
<detail.jsx 코드>

import {HtmlParser} from "react-html-parser";

// main
function Detail(){
  return(
    ~~~~~
  )
}

// component
function TAB({ data }) {
  // string 형태의 html을 변수에 담고
  const htmlString = data.about;
  // htmlParser() 안에 앞서 만든 변수를 인자로 보낸다
  return <div className={styles.tab}>{HtmlParser(htmlString)}</div>;
}
```

### react-html-parser 적용 후 결과

```txt
Next.js는 프론트엔드부터 서버까지 만들 수 있는 React기반 프레임워크입니다.

이것만 사용해도 풀스택 웹개발이 가능합니다.



Next.js 사용시 서버사이드 렌더링이 쉽기 때문에
```
