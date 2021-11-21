

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];     
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];   

  export const getDayfromUnix = (unix) => {
    const date = new Date(unix * 1000);
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
  };

  export const filterForecast = (array) => {
    return array.filter((e, index) => (index + 1) % 8 === 0);
  };

  export const getTimefromUnix = (unix) => {
    const hours = new Date(unix * 1000).getHours();
    const minutes = new Date(unix * 1000).getMinutes();
    const twoDigitMinutes = minutes.toString().padStart(2, "0");
    return `${hours}:${twoDigitMinutes}`;
    };


    export const cities = [
      "Abuja",
      "Amsterdam",
      "Aswān",
      "Athens",
      "Bangkok",
      "Barcelona",
      "Belgrade",
      "Brno",
      "Budapest",
      "Buenos Aires",
      "Cape Town",
      "Dakar",
      "El Alto",
      "Hanoi",
      "Harbin",
      "Kingston",
      "Kuala Lumpur",
      "Kuwait",
      "Kyiv",
      "Lagos",
      "Ljubljana",
      "London",
      "Madrid",
      "Melbourne",
      "Miami",
      "Minsk",
      "Moscow",
      "New Delhi",
      "New York",
      "Norilsk",
      "Paris",
      "Porto",
      "Prague",
      "Reykjavik",
      "Seoul",
      "Skopje",
      "Sofia",
      "Split",
      "Sydney",
      "São Paulo",
      "Tallinn",
      "Tenerife",
      "Tirana",
      "Toronto",
      "Vancouver",
      "Vienna",
      "Vilnius",
      "Warsaw",
      "Winnipeg",
      "Yakutsk",
    ]; 