// ===== Part A =====
const titles = [
    "해리 포터와 마법사의 돌",
    "해리 포터와 비밀의 방",
    "해리 포터와 아즈카반의 죄수",
    "해리 포터와 불사조 기사단",
    "해리 포터와 죽음의 성물 1",
    "극장판 치이카와: 인어 섬의 비밀",
    "하트 오브 비스트",
    "수능, 출제의 비밀",
    "암살자(들)",
    "타짜: 벨제붑의 노래"
];

const ratings = [
    7.9, 7.7, 8.0, 7.6, 7.7,
    7.5, 7.0, 6.8, 8.2, 7.1
];

const years = [
    2001, 2002, 2004, 2007, 2010,
    2026, 2026, 2026, 2026, 2026
];

const audiences = [
    0, 0, 0, 0, 0,
    2393381, 82544, 39511, 3416350, 2035989
];

// ===== Part B =====
// Part B: 영화 객체 10건(Part A와 같은 순서)
const movies = [
    { title: "해리 포터와 마법사의 돌", year: 2001, date: "2001-12-14", rating: 7.9, audience: 0, poster: "/8YaP48tVfngbURGldWk1I5odsBK.jpg", type: "mine", rank: null },
    { title: "해리 포터와 비밀의 방", year: 2002, date: "2002-12-13", rating: 7.7, audience: 0, poster: "/bo8FuQPWKLqbg3WgAXYISkwrbZ9.jpg", type: "mine", rank: null },
    { title: "해리 포터와 아즈카반의 죄수", year: 2004, date: "2004-07-16", rating: 8.0, audience: 0, poster: "/anwNl1xbzXoj5Ax1nVw3WoDzHlw.jpg", type: "mine", rank: null },
    { title: "해리 포터와 불사조 기사단", year: 2007, date: "2007-07-11", rating: 7.6, audience: 0, poster: "/1ItejykqHTbFWbZXdzqlvqriv7K.jpg", type: "mine", rank: null },
    { title: "해리 포터와 죽음의 성물 1", year: 2010, date: "2010-12-15", rating: 7.7, audience: 0, poster: "/lOXvz8HrgOkp7AXGQp1APKeZqag.jpg", type: "mine", rank: null },
    { title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.5, audience: 2393381, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1 },
    { title: "하트 오브 비스트", year: 2026, date: "2026-10-28", rating: 7.0, audience: 82544, poster: "/zC4E522V1n3H4SGdYOaiqhF5DnS.jpg", type: "boxoffice", rank: 2 },
    { title: "수능, 출제의 비밀", year: 2026, date: "2026-10-28", rating: 6.8, audience: 39511, poster: "/ohrJjtvKciICoeH80z973JnBoHo.jpg", type: "boxoffice", rank: 3 },
    { title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 8.2, audience: 3416350, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 4 },
    { title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.1, audience: 2035989, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 5 }
];