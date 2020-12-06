import React from "react";
import service from "../../services/utils";
import getIcon from '../../services/weather-image-service';
import './CardForcast.scss';

const CardForcast = ({ forcastData, isCelcius }) => {
  const generareMaxMin = (index) => {
    if (!!isCelcius) {
      return {
        max: service.farenhiteToCelsius(
          forcastData[index].Temperature.Maximum.Value
        ),
        min: service.farenhiteToCelsius(
          forcastData[index].Temperature.Minimum.Value
        ),
      };
    } else {
      return {
        max: forcastData[index].Temperature.Maximum.Value,
        min: forcastData[index].Temperature.Minimum.Value,
      };
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {forcastData.map((cityInfo, index) => {
          return (
            <div className="card p-2 mb-2 mr-2" key={index}>
              <div className="row no-gutters">
                <div className="col-md-6 d-flex flex-column align-items-center text-body">
                  <p>
                    <b>Day: </b>
                  </p>
                  <img src={!!cityInfo.Day && !!cityInfo.Day.Icon ? getIcon(cityInfo.Day.Icon): "" } className="card-img" alt="..." />
                  <p>
                    <b>Night: </b>
                  </p>
                  <img src={!!cityInfo.Night && !!cityInfo.Night.Icon ? getIcon(cityInfo.Night.Icon): "" } className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body card-body py-2 h-100 d-flex flex-column justify-content-center">
                    <h5 className="card-title">
                      {service.dateConvertor(cityInfo.Date)}
                    </h5>
                    <p className="card-text">
                      {generareMaxMin(index).max} - {generareMaxMin(index).min}{" "}
                      ({isCelcius ? "C" : "F"})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardForcast;
