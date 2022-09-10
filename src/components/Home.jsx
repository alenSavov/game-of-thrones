import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useAxios} from "../hooks/useAxios";

// components
import MainBanner from "./MainBanner";
import MainSection from "./MainSection";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background-color: rgb(239, 241, 244);
`;

const Home = () => {
  const [seasons, setSeasons] = useState();

  // const {response, loading, error} = useAxios({
  //   url: "/Title/k_8rolfb4c/tt0944947",
  // });

  // useEffect(() => {
  //   if (response?.tvSeriesInfo) {
  //     setSeasons(response.tvSeriesInfo.seasons);
  //   }
  // }, [response]);

  // console.log("RESPONSE", response);

  return (
    <div className="App">
      <Wrapper>
        <MainBanner />
        <MainSection data={mockData} />
      </Wrapper>
    </div>
  );
};

export default Home;

const mockData = {
  id: "tt0944947",
  title: "Game of Thrones",
  originalTitle: "",
  fullTitle: "Game of Thrones (TV Series 2011–2019)",
  type: "TVSeries",
  year: "2011",
  image:
    "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7331_AL_.jpg",
  releaseDate: "2011-04-17",
  runtimeMins: null,
  runtimeStr: null,
  plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
  plotLocal: "",
  plotLocalIsRtl: false,
  awards:
    "Top rated TV #13 | Won 59 Primetime Emmys, 387 wins & 632 nominations total",
  directors: "",
  directorList: [],
  writers: "",
  writerList: [],
  stars: "Emilia Clarke, Peter Dinklage, Kit Harington",
  starList: [
    {
      id: "nm3592338",
      name: "Emilia Clarke",
    },
    {
      id: "nm0227759",
      name: "Peter Dinklage",
    },
    {
      id: "nm3229685",
      name: "Kit Harington",
    },
  ],
  actorList: [
    {
      id: "nm3592338",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_Ratio1.0000_AL_.jpg",
      name: "Emilia Clarke",
      asCharacter: "Daenerys Targaryen",
    },
    {
      id: "nm0227759",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_Ratio1.0000_AL_.jpg",
      name: "Peter Dinklage",
      asCharacter: "Tyrion Lannister",
    },
    {
      id: "nm3229685",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_Ratio1.0000_AL_.jpg",
      name: "Kit Harington",
      asCharacter: "Jon Snow",
    },
    {
      id: "nm0372176",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzIwMjIwNjg0M15BMl5BanBnXkFtZTgwOTI3MDEzMDE@._V1_Ratio1.0000_AL_.jpg",
      name: "Lena Headey",
      asCharacter: "Cersei Lannister",
    },
    {
      id: "nm3849842",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM5Mjg4MDQ3MF5BMl5BanBnXkFtZTgwMDA2MjkxMjI@._V1_Ratio1.0000_AL_.jpg",
      name: "Sophie Turner",
      asCharacter: "Sansa Stark",
    },
    {
      id: "nm3586035",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQ5NjM3ZDYtNzZjOS00YTdmLWJlMjEtMmNjNjczOGRiYWQwXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio1.0000_AL_.jpg",
      name: "Maisie Williams",
      asCharacter: "Arya Stark",
    },
    {
      id: "nm0182666",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzczZWMxYTItZDZhZC00ZTQ4LWE2OTMtYzI1ODhkYmViN2YyXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_Ratio1.0000_AL_.jpg",
      name: "Nikolaj Coster-Waldau",
      asCharacter: "Jaime Lannister",
    },
    {
      id: "nm0322513",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk2NzU2NjI2MF5BMl5BanBnXkFtZTcwMzI1OTQ3Mw@@._V1_Ratio1.5000_AL_.jpg",
      name: "Iain Glen",
      asCharacter: "Jorah Mormont",
    },
    {
      id: "nm4263213",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGQyODY2YTUtNTBhYy00NGY1LThlNmItYzkyODBiYjI2YTU3XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio1.0000_AL_.jpg",
      name: "John Bradley",
      asCharacter: "Samwell Tarly",
    },
    {
      id: "nm0654295",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWQyMjA2MzctY2Q1Mi00MWQzLWEwYTUtYTQ3NmY2NTQwNTlmXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_Ratio1.0000_AL_.jpg",
      name: "Alfie Allen",
      asCharacter: "Theon Greyjoy",
    },
    {
      id: "nm0384152",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDM3NDYyNDE5NV5BMl5BanBnXkFtZTcwNDIxNzQyOA@@._V1_Ratio1.0000_AL_.jpg",
      name: "Conleth Hill",
      asCharacter: "Lord Varys",
    },
    {
      id: "nm0192377",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjEyMDM0NzQ5NV5BMl5BanBnXkFtZTcwNDkyODQyNw@@._V1_Ratio1.0000_AL_.jpg",
      name: "Liam Cunningham",
      asCharacter: "Davos Seaworth",
    },
    {
      id: "nm3729225",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzA3MTcxMTMzM15BMl5BanBnXkFtZTcwMDI2MDg0Nw@@._V1_Ratio1.0000_AL_.jpg",
      name: "Gwendoline Christie",
      asCharacter: "Brienne of Tarth",
    },
    {
      id: "nm0318821",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjMwNzE4MzMxNl5BMl5BanBnXkFtZTgwOTYwMTEyMDE@._V1_Ratio1.0000_AL_.jpg",
      name: "Aidan Gillen",
      asCharacter: "Petyr 'Littlefinger' Baelish",
    },
    {
      id: "nm3652842",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjE0MjM5MDkwMV5BMl5BanBnXkFtZTgwMTM0NzkwNTE@._V1_Ratio1.0000_AL_.jpg",
      name: "Isaac Hempstead Wright",
      asCharacter: "Bran Stark",
    },
    {
      id: "nm0564920",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmIzMjdkZmEtMDA0Yy00YzVhLWEzYmEtOWRmZmMzODYxZDQ5XkEyXkFqcGdeQXVyMTAwMDczMTU3._V1_Ratio1.0000_AL_.jpg",
      name: "Rory McCann",
      asCharacter: "Sandor 'The Hound' Clegane",
    },
    {
      id: "nm2812026",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM3NzQ4ODU0M15BMl5BanBnXkFtZTcwMDM4Njg3OA@@._V1_Ratio1.0000_AL_.jpg",
      name: "Nathalie Emmanuel",
      asCharacter: "Missandei",
    },
    {
      id: "nm0283492",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjMxMTE3Nzg1N15BMl5BanBnXkFtZTgwNTc2MTk4MjI@._V1_Ratio1.0000_AL_.jpg",
      name: "Jerome Flynn",
      asCharacter: "Bronn",
    },
  ],
  fullCast: null,
  genres: "Action, Adventure, Drama",
  genreList: [
    {
      key: "Action",
      value: "Action",
    },
    {
      key: "Adventure",
      value: "Adventure",
    },
    {
      key: "Drama",
      value: "Drama",
    },
  ],
  companies: "Home Box Office (HBO), Television 360, Grok! Studio",
  companyList: [
    {
      id: "co0008693",
      name: "Home Box Office (HBO)",
    },
    {
      id: "co0335036",
      name: "Television 360",
    },
    {
      id: "co0167350",
      name: "Grok! Studio",
    },
  ],
  countries: "USA, UK",
  countryList: [
    {
      key: "USA",
      value: "USA",
    },
    {
      key: "UK",
      value: "UK",
    },
  ],
  languages: "English",
  languageList: [
    {
      key: "English",
      value: "English",
    },
  ],
  contentRating: "TV-MA",
  imDbRating: "9.2",
  imDbRatingVotes: "2039669",
  metacriticRating: "86",
  ratings: null,
  wikipedia: null,
  posters: null,
  images: null,
  trailer: null,
  boxOffice: {
    budget: "",
    openingWeekendUSA: "",
    grossUSA: "",
    cumulativeWorldwideGross: "",
  },
  tagline: null,
  keywords: "based on novel,dragon,politics,incest,nudity",
  keywordList: ["based on novel", "dragon", "politics", "incest", "nudity"],
  similars: [
    {
      id: "tt0903747",
      title: "Breaking Bad",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.5",
    },
    {
      id: "tt4574334",
      title: "Stranger Things",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.8019_AL_.jpg",
      imDbRating: "8.7",
    },
    {
      id: "tt11198330",
      title: "House of the Dragon",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.8",
    },
    {
      id: "tt2442560",
      title: "Peaky Blinders",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_Ratio0.8019_AL_.jpg",
      imDbRating: "8.8",
    },
    {
      id: "tt7366338",
      title: "Chernobyl",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt1520211",
      title: "The Walking Dead",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.1",
    },
    {
      id: "tt13380510",
      title: "Game of Thrones",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTM3N2ZiZTgtYjlhOC00NGI2LTk5MWItNDBiOGVhZmNhMzZkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_Ratio1.0048_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt1190634",
      title: "The Boys",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.8019_AL_.jpg",
      imDbRating: "8.7",
    },
    {
      id: "tt2306299",
      title: "Vikings",
      image:
        "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.5",
    },
    {
      id: "tt0108778",
      title: "Friends",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6860_AL_.jpg",
      imDbRating: "8.9",
    },
    {
      id: "tt0475784",
      title: "Westworld",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.5",
    },
    {
      id: "tt0386676",
      title: "The Office",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.0",
    },
  ],
  tvSeriesInfo: {
    yearEnd: "2019",
    creators: "David Benioff, D.B. Weiss",
    creatorList: [
      {
        id: "nm1125275",
        name: "David Benioff",
      },
      {
        id: "nm1888967",
        name: "D.B. Weiss",
      },
    ],
    seasons: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  tvEpisodeInfo: null,
  errorMessage: null,
};
