import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import icon from "./assets/icon.jpg";
function App() {
  const api_key = "063e54db6553bd372bffc9fee653d5ae";
  const [city, setCity] = useState("delhi");
  const [country_code, setCountry_code] = useState("in");
  const [weather, setWeather] = useState<any>({});
  const [town, setTown] = useState<string>("delhi");
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${api_key}&units=metric`
      );

      console.log(res.data);
      setWeather(res.data);
      setTown(city);
    } catch (error) {
      console.log(error);
      console.log("Error");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#5a7ae4] text-white p-6">
        <div className="flex flex-row gap-4 items-center">
          <img src={icon} alt="icon" className="w-20 h-20 rounded-3xl" />
          <div>
            <h1 className="font-bold text-4xl">Weather App</h1>
            <span className="font-semibold">
              Get the weather of any city in the world
            </span>
          </div>
        </div>
        <div className="flex justify-around flex-col md:flex-row gap-2 mt-5">
          <div className="w-full md:w-1/3 md:min-h-[70vh] flex justify-center items-center">
            <div
              className="search-box text-black flex flex-col gap-4 justify-center items-center 
            bg-[#f1f1f1] p-6 rounded-3xl shadow-lg w-full md:w-1/2 h-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20       
            "
            >
              <input
                type="text"
                className="w-full px-2 py-1 rounded-lg bg-[#f1f1f1]"
                placeholder="City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <select
                name="country"
                id="country"
                className="w-full px-2 py-1 rounded-lg bg-[#f1f1f1]"
                defaultValue={"in"}
                value={country_code}
                onChange={(e) => setCountry_code(e.target.value)}
              >
                <option value="in" className="">
                  India
                </option>
                <option value="us">USA</option>
                <option value="uk">UK</option>
                <option value="jp">Japan</option>
                <option value="au">Australia</option>
              </select>
              <button
                className="bg-blue-600 text-black px-2 py-1 rounded-lg "
                onClick={fetchdata}
              >
                Search
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:min-h-[70vh] flex justify-center items-center">
            <div
              className="weather-box text-black
            bg-[#f1f1f1] p-6 rounded-3xl shadow-lg w-full md:w-1/2 min-h-1/2 backdrop-filter backdrop-blur-lg bg-opacity-20
            "
            >
              <h1 className="font-bold text-xl text-center"> Weather</h1>
              <div className="details pt-4 gap-3 flex flex-col">
                <span className="flex gap-2 items-end">
                  <h3 className="font-semibold text-4xl">
                    {weather.main?.temp}°C
                  </h3>
                  <h3 className="font-semibold text-xl">
                    {weather.weather?.[0].description}
                  </h3>
                </span>
                <h2 className="font-semibold text-md">{town}</h2>

    
                <h3 className="font-semibold text-xl">
                  Humidity: {weather.main?.humidity}%
                </h3>
                <h3 className="font-semibold text-xl">
                  Wind Speed: {weather.wind?.speed} m/s
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
