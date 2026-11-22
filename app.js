// ===== Part A =====
let sumA = 0;
let maxA = 0;
let count8A = 0;
let d2020A = 0;
let d2010A = 0;
let d2000A = 0;
let dEtcA = 0;
let bigA = "";

for (let i = 0; i < titles.length; i++) {
    sumA += ratings[i];

    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }

    if (ratings[i] >= 8) {
        count8A++;
    }

    const decade = years[i] - (years[i] % 10);
    switch (decade) {
        case 2020:
            d2020A++;
            break;
        case 2010:
            d2010A++;
            break;
        case 2000:
            d2000A++;
            break;
        default:
            dEtcA++;
            break;
    }

    if (audiences[i] >= 1000000) {
        bigA += (bigA === "" ? "" : " ") + titles[i];
    }
}

if (bigA === "") {
    bigA = "없음";
}

const avgA = sumA / ratings.length;

console.log("A1 평균 평점:", avgA);
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", count8A + "편");
console.log(
    "A4 2020년대 " + d2020A + "편, 2010년대 " + d2010A + "편, 2000년대 " + d2000A + "편, 그 이전 " + dEtcA + "편"
);
console.log("A5 관객 100만 이상:", bigA);

// ===== Part B =====
// average : 배열 ⇒ 평균 평점(숫자. 10주차 함수와 같음) 
function average(list) {
    if (list.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].rating;
    }
    return sum / list.length;
}

// best : 배열 ⇒ 최고 평점 객체
function best(list) {
    let topMovie = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > topMovie.rating) {
            topMovie = list[i];
        }
    }
    return topMovie;
}

// filterByRating : 배열, 숫자 ⇒ 새 배열
function filterByRating(list, min) {
    return list.filter((m) => m.rating >= min);
}

// sortBy : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열 
function sortBy(list, key, desc) {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
}

// search : 배열, 문자열 ⇒ 새 배열
function search(list, keyword) {
    const q = keyword.trim().toLowerCase();
    return list.filter((m) => m.title.toLowerCase().includes(q));
}

// formatNumber : 숫자나 숫자 문자열 ⇒ "1,234,567" 
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince : "2014-11-06" ⇒ 올해까지 몇 년(숫자) 
function yearsSince(dateStr) {
    const year = Number(dateStr.slice(0, 4));
    return new Date().getFullYear() - year;
}

const bestMovie = best(movies);
const topAudienceMovie = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent = [
    `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점`,
    `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`,
    `관객 1위 ${topAudienceMovie.title} (누적 ${formatNumber(topAudienceMovie.audience)}명)`
].join("\n");

// ===== Part C =====
// getList : 응답 객체 => 영화 배열
function getList(data) {
  return data.results;
}

// averageBy : 배열, 키 이름 => 해당 키 값의 평균(숫자)
function averageBy(list, key) {
  if (list.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i][key];
  }
  return sum / list.length;
}

// Part B average 중복 제거: averageBy 재활용
function average(list) {
  return averageBy(list, "rating");
}

const nowPlayingList = getList(TMDB);

console.log(
  `C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${nowPlayingList.length}편`
);
console.log("C2 상영작 평균 평점:", averageBy(nowPlayingList, "vote_average").toFixed(1));
console.table(
  sortBy(nowPlayingList, "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

const searchKeyword = "a";
console.log(
  `C4 '${searchKeyword}' 검색: ${search(nowPlayingList, searchKeyword).length}편`
);