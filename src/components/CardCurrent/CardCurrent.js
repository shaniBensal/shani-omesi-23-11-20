import React from "react";
import "./Card.scss";
import { useHistory } from "react-router-dom";
import getIcon from '../../services/weather-image-service.js';

const CardCurrent = ({ cityInfo, forcastBtn, onSetSelectedCity, isCelcius }) => {
  const history = useHistory();

  const showForcast = (onSetSelectedCity) => {
    onSetSelectedCity();
    history.push("/");
  };

  const generateTemp = () => {
    if (!!isCelcius && cityInfo && cityInfo.Temperature) {
      return cityInfo.Temperature.Metric.Value + 'C';
    } else {
      return cityInfo.Temperature.Imperial.Value + 'F';
    }
  };
  
  return (
    <div className="card text-body">
      <img
        src={getIcon(cityInfo.WeatherIcon)}
        className="card-img-top"
        alt={cityInfo.WeatherText}
      />
      <div className="card-body">
        <h5 className="card-title">{cityInfo.WeatherText}</h5>
        <p className="card-text">
          {cityInfo.Temperature ? generateTemp(): ""}
        </p>
        {forcastBtn ? (
          <div className="card-footer bg-light">
            <button
            type="button" className="btn btn-primary"
              onClick={(event) => showForcast(onSetSelectedCity)}
            >
              Forcast
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default CardCurrent;
