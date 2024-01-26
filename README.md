Weather App Readme
This simple weather application fetches data from the public API provided by the Institute of Meteorology and Water Management (IMGW) in Poland. It allows users to select a weather station from a dropdown menu and view relevant weather information.

Features
Dynamic Dropdown: The application dynamically populates a dropdown menu with weather station options retrieved from the IMGW API.

Display Weather Data: Upon selecting a weather station, the application displays essential weather information such as date, time, temperature, precipitation, and atmospheric pressure.

How to Use
Clone the repository to your local machine.

bash
Copy code
git clone https://github.com/mati2003-code/weather-app.git
Open the index.html file in a web browser.

Select a weather station from the dropdown menu to view its current weather data.

Code Structure
The application is built using only HTML and JavaScript. Here's a brief overview of the main components:

HTML (index.html): Contains the structure of the web page, including the dropdown menu, table for displaying weather data, and necessary elements.

JavaScript (script.js): Handles the logic for fetching weather data from the IMGW API, populating the dropdown menu, and displaying the selected station's weather information.

Dependencies
This application relies on the fetch function to make asynchronous requests to the IMGW API.
Setup
No additional setup is required. Simply open the index.html file in a web browser to start using the weather application.

Known Issues
This application assumes a stable internet connection for fetching weather data. In case of network issues, the application may not function correctly.
Contributing
Feel free to contribute to the project by submitting bug reports or opening pull requests. Your feedback and contributions are highly appreciated.
