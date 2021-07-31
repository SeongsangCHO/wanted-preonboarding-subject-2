# [Pre-onboarding Assignment 1] 미스터카멜 #2

## 과제구현목록
- Lacalstorage에 현재 출력 가능한 상품(관심 없는 상품을 제외)과 최근 조회한 상품 저장
- 관심 없음 표시 시 상품 상세에서 조회 불가
- randomPicker를 통해 '랜덤 상품 조회' 클릭 시 현 상품을 제외하고 랜덤 출력
- 상품 조회 이력 페이지에서 상품의 필터와 정렬
  - recentOrderFilter로 최근 조회순, lowPriceOrderFilter로 낮은 가격순으로 상품 정렬
  - 관심 없는 상품 숨기기, selectBrand로 브랜드 명으로 상품 필터

- checkTheTime을 통해 00시 상품 조회 이력 초기화

## 기본 요구 사항
- Class Component를 사용해 구현
- LocalStorage 사용해서 이력을 관리

## 설치 및 시작방법

```

$ npm install

$ npm start

```

## 프로젝트 구조 설명

- Product : 상품을 랜덤 로드하고 상품 조회 이력에 추가, 관심 없음 등록
- RecentList : 조회한 상품 리스트
- Utils : 로컬스토리지 setItem, getItem, 난수 생성 로직, 토글버튼 로직
- BrandFilter : 브랜드 명으로 상품 필터
    - HideNoInterestingFilter : 관심 없는 상품 숨기기 필터
    - OrderFilter: 최근 조회순, 낮은 가격순으로 상품 정렬

## 기능 영상
