import { AiFillGithub, AiFillYoutube, AiOutlineCodepen, AiOutlineInstagram } from "react-icons/ai";
import { CiAirportSign1, CiStar, CiTrophy } from 'react-icons/ci';

export const menuText = [
    {
        title: "여행 유튜버 홈",
        icon: <CiAirportSign1 />,
        src: "/"
    }, {
        title: "오늘의 추천 픽!!",
        icon: <CiTrophy />,
        src: "/today"
    }, {
        title: "유명 유튜버 모음",
        icon: <CiStar />,
        src: "/traveler"
    }
]

export const keywordText = [
    {
        title: "여행",
        src: "/search/여행"
    }, {
        title: "빠니보틀",
        src: "/search/빠니보틀"
    }, {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    }, {
        title: "곽튜브",
        src: "/search/곽튜브"
    }, {
        title: "Joe튜브",
        src: "/search/Joe튜브"
    }, {
        title: "국제커플",
        src: "/search/국제커플"
    }, {
        title: "캐럿맨 여행기",
        src: "/search/캐럿맨여행기"
    }, {
        title: "희철리즘",
        src: "/search/희철리즘"
    }, {
        title: "여행가 제이",
        src: "/search/여행가제이"
    }, {
        title: "테디여행기",
        src: "/search/테디여행기"
    }, {
        title: "채코제",
        src: "/search/채코제"
    }, {
        title: "노마드션",
        src: "/search/노마드션"
    }, {
        title: "둥지언니",
        src: "/search/둥지언니"
    }, {
        title: "모칠레로",
        src: "/search/모칠레로"
    }, {
        title: "제이치핏",
        src: "/search/제이치핏"
    }, {
        title: "브루스리 TV",
        src: "/search/브루스리TV"
    }, {
        title: "뉴진스",
        src: "/search/뉴진스"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    }, {
        title: "Codepen",
        src: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    }, {
        title: "Youtube",
        src: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    }, {
        title: "Instagram",
        src: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    }
]