# WeatherApp

The WeatherApp is a React application designed for retrieving and displaying weather information for a specified city. It leverages the OpenWeatherMap API to obtain real-time weather data.

## Features

### Search Functionality:

- Users can input the name of a city into the search bar.
- The app fetches weather data for the specified city from the OpenWeatherMap API.

### Weather Information Display:

- Temperature, location, and weather icon are prominently displayed.
- Additional details include humidity percentage and wind speed.

### Error Handling:

- Alerts are presented in case the city input is empty or the specified city is not found.

## Components

### Container (div):

- Houses the entire WeatherApp component.
- Includes a title (h1) and a top bar for city input and search functionality.

### Top Bar:

- Input field for entering the city name.
- Search icon triggers the weather data retrieval function.

### Weather Information:

- Displays weather icon, temperature, and location.
- Icons for humidity and wind speed are also displayed.

### Data Container:

- Presents additional weather details such as humidity and wind speed.
- Each detail is accompanied by an icon and corresponding value.

## Usage

To use the app:

1. Enter the name of the desired city in the search bar.
2. Click the search icon to fetch and display the weather information.
3. View real-time weather details, including temperature, location, humidity, and wind speed.

The WeatherApp provides a straightforward and visually appealing interface for checking current weather conditions in different cities.

Feel free to explore and customize the app to suit your specific requirements.
