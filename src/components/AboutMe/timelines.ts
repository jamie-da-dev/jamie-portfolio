import { Language } from "../../types";

const timelines: Record<
  Language,
  { imgSrc: string; date: string; detail: string }[]
> = {
  en: [
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068924/aboutme1_rguyxo.jpg",
      date: "08.2001",
      detail: "Born in August 2001, marking the beginning of my journey.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068927/aboutme2_ze5kay.jpg",
      date: "03.2008",
      detail:
        "Embarked on my educational journey by starting elementary school, eager to learn and grow.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068923/aboutme3_rh7bqs.jpg",
      date: "06.2013",
      detail:
        "Significant life change by immigrating from Korea to New Zealand, embracing a new culture and environment.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068930/aboutme4_nkw6rw.jpg",
      date: "06.2020",
      detail:
        "Milestone in my personal life as I got married, starting a new chapter with my partner.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068926/aboutme5_jwcnml.jpg",
      date: "05.2024",
      detail:
        "Proudly graduated from the University of Auckland with a Bachelor of Science in Computer Science.",
    },
  ],
  ko: [
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068924/aboutme1_rguyxo.jpg",
      date: "2001.08",
      detail: "2001년 8월, 제가 태어나며 저의 이야기가 시작되었습니다.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068927/aboutme2_ze5kay.jpg",
      date: "2008.03",
      detail: "초등학교에 입학하며 배움과 성장을 향한 첫걸음을 내딛었습니다.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068923/aboutme3_rh7bqs.jpg",
      date: "2013.06",
      detail: "한국에서 뉴질랜드로 이주해 새로운 문화와 환경을 받아들였습니다.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068930/aboutme4_nkw6rw.jpg",
      date: "2020.06",
      detail: "결혼 후, 파트너와 함께 새로운 인생을 시작했습니다.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068926/aboutme5_jwcnml.jpg",
      date: "2024.05",
      detail: "오클랜드 대학교를 졸업하며 중요한 이정표를 세웠습니다.",
    },
  ],
  ja: [
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068924/aboutme1_rguyxo.jpg",
      date: "2001.08",
      detail: "2001年8月に生まれ、私の物語が始まりました。",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068927/aboutme2_ze5kay.jpg",
      date: "2008.03",
      detail: "小学校に入学し、学びと成長への一歩を踏み出しました。",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068923/aboutme3_rh7bqs.jpg",
      date: "2013.06",
      detail:
        "韓国からニュージーランドへ移住し、新しい文化と環境を受け入れました。",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068930/aboutme4_nkw6rw.jpg",
      date: "2020.06",
      detail: "結婚後、パートナーと共に新しい人生を歩み始めました。",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068926/aboutme5_jwcnml.jpg",
      date: "2024.05",
      detail:
        "オークランド大学を卒業し、コンピュータサイエンスの学士号を取得しました。",
    },
  ],
};

export default timelines;
