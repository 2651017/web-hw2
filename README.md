# web-hw2
# 실습과제 #2: 영화 데이터를 자바스크립트로
이름/학번 : 김정희 / 2651017
사이트 주소 : https://2651017.github.io/web-hw2/
- 사용한 API: TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-30)

## 구현 항목 체크
- [x] 1. Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로 계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [x] 2. Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.
- [x] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [x] 4. 출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B 요약 3줄(textContent 한번).
- [x] 5. 코드 품질: 함수마다 "입력 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.
- [x] 6. 제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 기록, 어느 파일에도 API 키 없음.

## 자가 테스트 표
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' |'1,234,567' |
| 2 | average(movies).toFixed(1) | '7.6' |'7.6' |
| 3 | best(movies).title | '암살자(들)' |'암살자(들)' |
| 4 | sortBy(movies, "rating", true)[0].title | '암살자(들)' |'암살자(들)' |
| 5 | filterByRating(movies, 8).length | 2 |2 |
| 6 | search(movies, "인터 ").length | 0 | 0 |
| 7 | yearsSince("2014-11-06") | 12 | 12 |
| 8 | 4번 실행 뒤 movies[0].title | '해리 포터와 마법사의 돌' |'해리 포터와 마법사의 돌' |

## 어려웠던 점 3가지와 해결
- 1) tmdb.js에 응답을 붙여 넣을 때 앞부분이 중복되기도 하고, 형태를 맞추는 게 어려웠다.  중복된 부분을 지우고 ;를 붙여서 해결했다.
- 2) sortBy를 만들 때 계산 결과가 달라져서 힘들었다. 숫자는 빼기로 비교하게 작성하니 해결되었다.
- 3) tmdb를 다 넣는 부분에서 pretty print와 같이 복사해서 붙였더니 문제가 생겼다. pretty print를 실습과제 2를 다시보고 확인한 뒤 해결했다.

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
웹개발기초 실습과제 #2 안내 문서
## 생성형 AI 사용 내역 (없으면 "없음")
없음.
