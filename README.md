# WeatherApp

WeatherApp is a simple, yet powerful React application that provides real-time weather information for any city around the globe. Utilizing the OpenWeatherMap API, it displays current weather conditions, including temperature, humidity, wind speed, and more.

## Features

- **Search by City and Country:** Easily find the weather for your city by typing the city name and selecting the country from a dropdown list.
- **Real-Time Weather Data:** Displays current weather conditions such as temperature, weather status (e.g., Cloudy, Sunny), feels like temperature, wind conditions, humidity, and cloudiness.
- **Additional Weather Details:** Provides more detailed weather information like pressure, sunrise and sunset times, visibility, minimum and maximum temperatures, and geographical coordinates (latitude and longitude).

## Technologies Used

- React.js
- Axios for API requests
- OpenWeatherMap API for fetching weather data
- Tailwind CSS for styling
- React Icons for weather icons
- daizyui for the dropdown component
- TypeScript for type checking
- Vite for build tooling
- ESLint and Prettier for code formatting

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/WeatherApp.git
```

2. Change the directory:

```bash
cd WeatherApp
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:3000` to view the app.


### API Key

The application requires an API key from OpenWeatherMap. You can obtain it by signing up at OpenWeatherMap and replacing the api_key variable in the App.tsx file with your own API key.

### Contributing

Contributions are welcome! If you have a feature request or bug report, please open a new issue on the GitHub repository.