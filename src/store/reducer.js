import * as actions from "./actions/actionTypes";
import initialState from "./state";
import utilService from "../services/utils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case actions.SET_CITY_WEATHER:
      return {
        ...state,
        cities: [],
        selectedCityWeather: {
          forcast: action.payload.forcast,
          currentWeather: action.payload.currentWeather,
        },
      };
    case actions.SET_SELECTED_CITY: {
      return { ...state, selectedCity: action.payload };
    }
    case actions.TOGGLE_FAVORITE:
      let currFavoriteList = [...state.favoriteCities];
      let selectedCity = action.payload;
      let newFavoriteList = utilService.arrangeFavoriteList(
        currFavoriteList,
        selectedCity
      );
      return {
        ...state,
        favoriteCities: newFavoriteList,
      };
    case actions.SET_MULTIPLE_CITY_WEATHER:
      return {
        ...state,
        favoriteCities: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
