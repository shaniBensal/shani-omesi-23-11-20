function dateConvertor(forcastDate) {
  let date = new Date(forcastDate);
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return dt + '/' + month;
}

function farenhiteToCelsius(f) {
  let num = (5/9) * (f - 32)
  return (Math.round(num * 100) / 100).toFixed(2);
}

function arrangeFavoriteList(newFavoriteList, selectedCity){
      let index = newFavoriteList.findIndex(
        (itemInFavorite) => selectedCity.key == itemInFavorite.key
      );
      if (index >= 0) {
        newFavoriteList = newFavoriteList.filter(city => city.key !== selectedCity.key);
      } else {
        newFavoriteList.push(selectedCity);
      }
      localStorage.setItem('favoriteCityList', JSON.stringify(newFavoriteList));
      return newFavoriteList;
}

export default {
    dateConvertor,
    farenhiteToCelsius,
    arrangeFavoriteList
}
