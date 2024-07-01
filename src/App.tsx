import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FaCloud } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
function App() {
  const api_key = "063e54db6553bd372bffc9fee653d5ae";
  const [city, setCity] = useState("delhi");
  const [country_code, setCountry_code] = useState("in");
  const [weather, setWeather] = useState<any>({});
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${api_key}&units=metric`
      );

      setWeather(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="min-h-screen   text-white px-2 md:px-6">
        <nav className="py-2 font-bold text-4xl">WeatherApp</nav>
        <div className="divider"></div>
        <section className="py-2 flex flex-wrap gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="select select-bordered w-full max-w-xs"
            value={country_code}
            onChange={(e) => setCountry_code(e.target.value)}
          >
            <option value="in">India</option>
            <option value="us">USA</option>
            <option value="uk">UK</option>
            <option value="jp">Japan</option>
            <option value="au">Australia</option>

            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="it">Italy</option>
            <option value="ca">Canada</option>
          </select>
          <button className="btn btn-neutral w-min" onClick={fetchdata}>
            Search
          </button>
        </section>
        <section className="pt-10">
          <div className="flex justify-center items-center  flex-col">
            <span className="text-2xl font-bold text-center">
              Current Weather
            </span>
            <div className="flex  flex-col sm:flex-row justify-around w-full py-10">
              <div className=" flex justify-center items-center">
                {weather.name},{weather.sys?.country}
              </div>
              <div className=" flex justify-center items-center">
                {weather.main?.temp}°C
              </div>
              <div className=" flex justify-center items-center">
                {weather.weather?.[0]?.main}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <span className="text-2xl font-bold text-center">
              Wind Conditions
            </span>
            <div className="flex  flex-col sm:flex-row justify-around w-full py-10">
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="icon">
                      <CiTempHigh className="text-3xl" />
                    </div>
                    <div className="name">Feel like</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.main?.feels_like}°C
                  </span>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="icon">
                      <FaWind className="text-3xl" />
                    </div>
                    <div className="name">Wind</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.wind?.speed} m/s
                  </span>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="icon">
                      <WiHumidity className="text-3xl" />
                    </div>
                    <div className="name">Humidity</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.main?.humidity}%
                  </span>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="icon">
                      <FaCloud className="text-2xl" />
                    </div>
                    <div className="name">Clouds</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.clouds?.all}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <span className="text-2xl font-bold text-center">
              More About Weather
            </span>
            <div className="flex  flex-col sm:flex-row justify-around w-full py-10">
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Presure</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.main?.pressure}
                  </span>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Sunrise</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {new Date(weather.sys?.sunrise * 1000).toLocaleTimeString()}
                  </span>
                </div>
              </div>{" "}
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Sunset</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {new Date(weather.sys?.sunset * 1000).toLocaleTimeString()}
                  </span>
                </div>
              </div>{" "}
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Visibility</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.visibility}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  flex-col sm:flex-row justify-around w-full py-10">
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Min Temp</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.main?.temp_min}°C
                  </span>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Max Temp</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.main?.temp_max}°C
                  </span>
                </div>
              </div>{" "}
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Latitude</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.coord?.lat}
                  </span>
                </div>
              </div>{" "}
              <div className=" flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-1 justify-center item-center text-gray-200 pb-2">
                    <div className="name">Longitude</div>
                  </div>
                  <span className="font-extrabold text-lg">
                    {weather.coord?.lon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
