import React, { Component } from "react";
import CityList from "../../components/CityList/CityList";
import CardCurrent from "../../components/CardCurrent/CardCurrent";
import CardForcast from "../../components/CardForcast/CardForcast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as actions from "../../store/actions/actions";

import { connect } from "react-redux";

class MainPage extends Component {
  state = {
    query: "",
    inCelsius: true,
  };

  handleChange = (event) => {
    let query = event.target.value;
    query = query.replace(/[^A-Za-z]/gi, "");
    this.setState({ query });
    if (query !== "") {
      this.props.getCities(query);
    }
  };

  searchCityInfo = (city) => {
    this.setState({ query: "" });
    this.props.getCityWeather(city);
    this.props.setSelectedCity(city);
  };

  toggelFavorites = (city) => {
    this.props.toggleFavorite(city);
  };

  switchUnits = () => {
    this.setState({ inCelsius: !this.state.inCelsius });
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        return this.props.getDefaultCityData(position.coords);
      });
    } else {
      return this.props.getDefaultCityData(null);
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <h1>Find Location</h1>
        <div className="d-flex row justify-content-center position-relative">
          <form action="" className="col-md-6">
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                value={this.state.query}
                onChange={this.handleChange}
              />
              <div className="row w-100">
                {this.props.optionList &&
                this.props.optionList.length &&
                this.state.query !== "" ? (
                  <CityList
                    favoriteCityList={this.props.favoriteList}
                    optionList={this.props.optionList}
                    onSelectCity={(city) => this.searchCityInfo(city)}
                    onToggelFavorite={(city) => this.toggelFavorites(city)}
                  >
                    {" "}
                  </CityList>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
        {this.props.selectedCity && this.props.currentWeather ? (
          <div className="d-flex flex-column align-items-center ">
            <div className="d-flex align-items-center pb-3">
              <h2 className="mb-0 pr-2">{this.props.selectedCity.cityName} </h2>
              <button className="btn btn-info" onClick={this.switchUnits}>
                {this.state.inCelsius ? "C" : "F"}
              </button>
            </div>
            <CardCurrent
              isCelcius={this.state.inCelsius}
              forcastBtn={false}
              cityInfo={this.props.currentWeather}
            ></CardCurrent>
            <h2 className="mb-0 py-3">For the next 5 days: </h2>
            <CardForcast
              isCelcius={this.state.inCelsius}
              forcastData={this.props.forcast}
            ></CardForcast>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity,
    optionList: state.cities,
    forcast: state.selectedCityWeather.forcast,
    currentWeather: state.selectedCityWeather.currentWeather,
    favoriteList: state.favoriteCities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDefaultCityData: (coords) =>
      dispatch(actions.getDefaultCityData(coords)),
    getCities: (query) => dispatch(actions.getCities(query)),
    getCityWeather: (city) => dispatch(actions.getCityWeather(city)),
    toggleFavorite: (city) => dispatch(actions.toggleFavorites(city)),
    setSelectedCity: (city) => dispatch(actions.setSelectedCity(city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
