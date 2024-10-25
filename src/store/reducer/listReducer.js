import { NowPlaying, UpComing, TopRated, Populer } from "../action/listAction";

const filmstate = {
  NowPlaying: [],
  Populer: [],
  UpComing: [],
  TopRated: [],
};

const filmredus = (state = filmstate, action) => {
  switch (action.type) {
    case NowPlaying:
      return {
        ...state,
        NowPlaying: action.payload,
      };

    case Populer:
      return {
        ...state,
        Populer: action.payload,
      };

    case UpComing:
      return {
        ...state,
        UpComing: action.payload,
      };

    case TopRated:
      return {
        ...state,
        TopRated: action.payload,
      };

    default:
      return state;
  }
};

export default filmredus;
