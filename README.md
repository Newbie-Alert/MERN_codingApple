# Implementing a Full Online Course Platform 🎓

**MERN Stack — CodingApple Clone Project**

A hands-on MERN project built by recreating the real course site I’m currently taking.
This was my **first full MERN portfolio project**, designed to fully understand authentication, session management, CRUD, cart systems, and dynamic routing.

---

## ✨ Preview

<p align="center">
  <img src="https://github.com/Newbie-Alert/Imitation_codingApple/blob/main/mdImg/%EA%B9%83%ED%97%991.png?raw=true" width="45%">
  <img src="https://github.com/Newbie-Alert/Imitation_codingApple/blob/main/mdImg/%EA%B9%83%ED%97%992.png?raw=true" width="48%">
</p>
<p align="center">
  <img src="https://github.com/Newbie-Alert/Imitation_codingApple/blob/main/mdImg/%EA%B9%83%ED%97%993.png?raw=true" width="46%">
  <img src="https://github.com/Newbie-Alert/Imitation_codingApple/blob/main/mdImg/%EA%B9%83%ED%97%994.png?raw=true" width="48%">
</p>

---

## 🧩 Tech Stack

* **MongoDB**
* **Express**
* **React**
* **Node.js**
* **axios**
* Session-based authentication, dynamic routing, and server communication

---

## 📱 Core Features

### 🔐 Session Login

* Local strategy authentication using **passport.js**
* Session-based user login
* Navbar UI updates depending on login state
* Cart icon displays item count in real time

### 🛒 Shopping Cart

* Add-to-cart system with item quantity updates
* Delete / reduce quantity
* Cart persists through session
* Responsive UI

### 📚 Course Detail Page

* Loads full course data through URL parameters
* Curriculum table, introduction, reviews
* `react-html-parser` converts stored HTML strings into rendered HTML
* “Enroll” button adds the course to the cart
* Sending course names via params to the board

### 📝 Board (Forum)

* Fetches all posts related to each course
* Clicking a post sends title + metadata to backend and shows detail page
* Create post form toggle
* Full CRUD operations

### 💬 Comments & Replies

* Nested replies
* Parent comment identified using dataset attribute & objectId
* Replies stored inside parent comment document
* Full threaded comment structure

### 🧾 Signup

* Regex-based validation for username/password
* Warning modal for invalid characters (Korean / symbols not allowed)
* Password strength indicator
* Kakao Address API for address search

---

## 🔨 Known Issues / Fixes

* ❌ Refresh showed raw JSON
  → ✔️ Fixed by separating client routes from server routes
* ❌ Cart icon wouldn't update without refresh
  → Planned fix with React Query + Socket.io
* ❌ State resetting on refresh
  → Fixed using conditional rendering until data is loaded

---

## 🗓 Daily Development Log (Short Version)

### Day 1–4

* Nav, Main page, responsive UI

### Day 5

* Backend integration
* Session login with passport.js
* Nav updates dynamically after login

### Day 6–7

* Course Page UI + fetching list from DB

### Day 8

* Course detail API via URL params
* Fixed state initialization issues

### Day 9

* Finished detail page
* Learned about useEffect timing

### Day 10

* DB restructuring for reviews / curriculum

### Day 11–12

* Built review & reviewCount collections
* Responsive detail page
* Implemented star rating (mix-blend-mode trick)

### Day 13

* Board (forum) post CRUD
* Complex API routing via multiple URL params

### Day 14

* Cart system
* Fixed refresh errors with conditional rendering

### Day 15

* Deployment done
* Login UI bug still remaining

### Day 16–17

* Studied Socket.io / SSE
* Working on real-time updates

### Day 18–20

* Comment + nested reply system
* Built ObjectId-based parent-child structure

### Day 21

* Solved JSON refresh issue
* Learned about browser behavior (URL → actual GET request to server)

---

# 🎯 Summary (Upwork-Friendly)

This project demonstrates:

* Full MERN stack development
* Session authentication with Passport
* Dynamic routing using parameters
* Shopping cart logic with quantity management
* Nested comment architecture
* HTML parsing for course content
* Course detail + curriculum system
* Forum/board CRUD
* Real-world problems & fixes: refresh issues, DB modeling, API structuring
* Deployment experience (Google Cloud / App Engine)

---

# 강의사이트 구현 프로젝트 🎓

**MERN 스택 — 코딩애플 사이트 클론**

현재 실제로 수강 중인 “코딩애플” 사이트를 그대로 풀스택으로 구현해본 프로젝트입니다.
로그인, 장바구니, 게시판, 댓글/대댓글, 강의 상세 등 **실전 기능 중심**으로 개발했습니다.

---

## 🧩 기술 스택

* MongoDB
* Express
* React
* Node.js
* axios

세션 로그인, 서버-클라이언트 통신, URL 파라미터 기반 데이터 로딩 등
풀스택 핵심 기능을 모두 다뤘습니다.

---

## 📱 구현 기능 요약

### 🔐 세션 로그인

* passport.js Local 전략 사용
* 세션 기반 인증
* 로그인 상태에 따라 Nav UI 변경
* 장바구니 아이콘에 실시간 개수 표시

### 🛒 장바구니

* 강의 추가 / 중복 시 수량 증가
* X 버튼 클릭 시 삭제 또는 수량 감소
* 테이블 UI 렌더링

### 📚 상세페이지

* URL parameter로 강의 데이터 로드
* 커리큘럼, 리뷰, 소개
* `react-html-parser` 로 HTML 렌더
* 신청하기 → 장바구니 추가
* 게시판으로 강좌명 전달

### 📝 게시판

* 강좌별 게시물 리스트
* 게시글 상세보기
* 게시글 CRUD
* UI 기반 글쓰기 폼 제어

### 💬 댓글/대댓글

* ObjectId 기반 대댓글 구조
* dataset을 이용한 parent comment 식별
* 중첩된 댓글 구조 구축 완료

### 🧾 회원가입

* 정규표현식 기반 검증
* 모달을 이용한 경고 처리
* 비밀번호 강도 표시
* 카카오 주소 API

---

## 🛠 해결한 문제들

* 새로고침 시 JSON만 보이던 문제 해결
* useEffect 타이밍 문제 → 조건부 렌더링
* 장바구니 실시간 반영 문제 (Socket.io 예정)

---

## 🗓 일자별 개발 기록 (요약)

* **1~4일:** Nav, Main Page
* **5일:** 백엔드 통신, passport 세션 로그인
* **6~8일:** Course Page, Detail API
* **9~10일:** DB 구조 재정비
* **11~13일:** 리뷰/별점/게시판/CRUD
* **14~15일:** 장바구니, 배포
* **16~21일:** 실시간 통신 학습, 댓글/대댓글, 새로고침 문제 해결

---
