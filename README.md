# SkyTracker App 🌤️

### The most Beautiful Weather App (Made using React.js, Tailwind CSS, and Ant Design)

SkyTracker is a beautifully designed weather application built using the latest technologies including React.js ⚛️, Tailwind CSS 🎨, and Ant Design 🐜. This app provides accurate and up-to-date weather information powered by OpenWeather 🌦️ and Geoapify 🌍 APIs. It offers an intuitive user experience with a clean and responsive UI that adapts seamlessly to different screen sizes 📱💻🖥️ and modes 🌗.

![SkyTracker Banner](./src/assets/screenshots/pcblack.png)


## APIs Used
- **OpenWeather:** [OpenWeather API](https://openweathermap.org/api) 🌦️
  - Provides comprehensive weather data, including current weather conditions, forecasts, and historical data. The API delivers detailed information on temperature, humidity, wind speed, and other meteorological elements, ensuring that users receive accurate and real-time weather updates.

- **Geoapify:** [Geoapify Geocoding API](https://www.geoapify.com/geocoding-api) 🌍
  - Offers geocoding and reverse geocoding services, which translate addresses into geographic coordinates and vice versa. This API enables the app to pinpoint user locations and fetch corresponding weather data efficiently, enhancing the overall user experience with precise location-based weather information.

## Live Link 🚀
**This project is deployed at:** [SkyTracker App](https://sky-tracker-seven.vercel.app/)

## To Run Locally 🛠️
*You must have Node.js and NPM installed.*

1. **Clone this project on your local device & install necessary packages:**
    ```sh
    git clone https://github.com/Er-Abhay-FSD/SkyTracker
    cd SkyTracker
    npm install
    ```

2. **Get your 'OpenWeather' and 'Geoapify' API keys, then create a `.env` file & add your API keys there:**
    ```sh
    # inside .env file
    VITE_GEOCODING_API_KEY="your-geoapify-api-key"
    VITE_OPENWEATHER_API_KEY="your-openweather-api-key"
    ```

3. **Run the App:**
    ```sh
    npm run dev
    ```

## Features ✨
- **Most beautiful UI** that I've ever made
- **Dark and Light modes** for optimal viewing experience
- **Responsive UI** that looks great on all screen sizes
- Supports **Celsius and Fahrenheit** units
- **5-Day Weather Forecast** to plan your week ahead
- Efficient **API handling**
- **Industry-standard code structure** for maintainability

## Screenshots 📸
<div style="display: flex; flex-direction: column; gap: 20px;">
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <span style="font-size: 20px;">Mobiles 📱</span>
        <div style="display: flex; gap: 10px;">
            <img src="./src/assets/screenshots/phoneimg1.jpg" alt="Mobile screenshot 1" style="width: 46%; height: auto;"/>
            <img src="./src/assets/screenshots/phoneimg2.jpeg" alt="Mobile screenshot 2" style="width: 46%; height: auto;"/>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <span style="font-size: 20px;">Tablets 📱</span>
        <img src="./src/assets/screenshots/ss3.png" alt="Tablet screenshot 1" style="width: 100%; height: auto;"/>
        <img src="./src/assets/screenshots/ss4.png" alt="Tablet screenshot 2" style="width: 100%; height: auto;"/>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <span style="font-size: 20px;">Desktops 🖥️</span>
        <img src="./src/assets/screenshots/pcblack.png" alt="Desktop screenshot 1" style="width: 100%; height: auto;"/>
        <img src="./src/assets/screenshots/pclight.png" alt="Desktop screenshot 2" style="width: 100%; height: auto;"/>
    </div>
</div>


## Profile Features 📝
Click on **[SkyTracker](https://sky-tracker-seven.vercel.app/)** to view the full list of features available in this app. Below is a screenshot of my profile showing the project:

<div style="display: flex; flex-direction: column; gap: 10px;">
    <img src="./src/assets/screenshots/pcblackprofile.png" alt="Profile screenshot showing SkyTracker" style="width: 100%; height: auto;"/>
   <img src="./src/assets/screenshots/pclightprofile.png" alt="Profile screenshot showing SkyTracker" style="width: 100%; height: auto;"/>
</div>

## How to Contribute 🤝
1. **Fork the repository.**
2. **Create your feature branch:**
    ```sh
    git checkout -b feature/YourFeature
    ```
3. **Commit your changes:**
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch:**
    ```sh
    git push origin feature/YourFeature
    ```
5. **Open a pull request.**

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [ABHAY SINGH](https://github.com/dhiyochamp)
