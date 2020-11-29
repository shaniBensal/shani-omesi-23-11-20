import React from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import './CityList.scss';
const selectCity=(event, item, onSelectCity)=> {
  event.preventDefault();
  onSelectCity(item);
}

const toggleFavorite =(event, item, onToggelFavorite)=> {
  event.stopPropagation();
  onToggelFavorite(item);
}

const CityList = ( props) => {
  return (
    <div>
      <ul className="list-group city-list position-absolute">
        {props.optionList.map((item) => {
          let isFavorite = props.favoriteCityList.find(city => item.key == city.key);
          return (
            <li className="list-group-item d-flex justify-content-between pointer" onClick={(event) => selectCity(event, item, props.onSelectCity)} key={item.key}>
              <p className="mb-0 pr-2">
              {item.cityName}
              </p>
              <p className ="mb-0" onClick={event => toggleFavorite(event, item, props.onToggelFavorite)}>
                {
                  isFavorite ? <BsFillHeartFill className="text-danger"/> : <BsHeart className="non-favorite-icon"/>
                }
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CityList;
