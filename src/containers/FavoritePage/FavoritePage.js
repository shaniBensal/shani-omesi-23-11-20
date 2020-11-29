import React, { Component } from "react";
import * as actions from "../../store/actions/actions";
import { BsFillHeartFill } from "react-icons/bs";

import CardCurrent from "../../components/CardCurrent/CardCurrent";

import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FavoritePage extends Component {
  state = {
    inCelsius: true,
  };

  removeCity = (key) => {
    this.props.toggleFavorite(key);
  };

  switchUnits = () => {
    this.setState({ inCelsius: !this.state.inCelsius });
  };

  componentDidMount() {
    this.props.getMultipleCityWeather();
  }

  render() {
    let arr = this.props.favoriteList;

    return (
      <div>
        <ToastContainer />
        <div className="d-flex justify-content-center pb-3">
          <h2 className="mb-0 pr-2">My Favorite Cities</h2>
          {arr && arr.length > 0 ? <button className="btn btn-info" onClick={this.switchUnits}>
            {this.state.inCelsius ? "C" : "F"}
          </button>: ""
          }
        </div>
        <div className="container d-flex flex-row flex-wrap align-items-center justify-content-center">
          {arr && arr.length > 0 && arr[0].currentWeather.WeatherIcon
            ? arr.map((city, index) => {
                return (
                  <div
                    key={city.key}
                    className="d-flex flex-column align-items-center pb-3 px-0 pr-3"
                  >
                    <div className="title d-flex align-items-center">
                      <h3 className="mb-0 pb-2">{city.cityName}</h3>
                      <p
                        className="mb-0 pl-2"
                        onClick={() => this.props.toggleFavorite(city)}
                      >
                        <BsFillHeartFill className="text-danger" />
                      </p>
                    </div>
                    <CardCurrent
                    isCelcius={this.state.inCelsius}
                      forcastBtn={true}
                      onSetSelectedCity={() => this.props.setSelectedCity(city)}
                      cityInfo={city.currentWeather}
                    ></CardCurrent>
                  </div>
                );
              })
            : <h3>No Favorits for now</h3>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteCities,
    showToast: state.showToast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMultipleCityWeather: () => dispatch(actions.getMultipleCityWeather()),
    toggleFavorite: (city) => dispatch(actions.toggleFavorites(city)),
    setSelectedCity: (city) => dispatch(actions.setSelectedCity(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
