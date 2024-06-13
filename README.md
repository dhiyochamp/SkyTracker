# SkyTracker App 🌤️

### The most Beautiful Weather App (Made using React.js, Tailwind CSS, and Ant Design)

![SkyTracker Banner](./src/assets/screenshots/banner.png)

## APIs Used
- **OpenWeather:** [OpenWeather API](https://openweathermap.org/api) (for weather information) 🌦️
- **Geoapify:** [Geoapify Geocoding API](https://www.geoapify.com/geocoding-api) (for geocoding) 🌍

## Live Link 🚀
**This project is deployed at:** [sky-tracker-seven.vercel.app](https://sky-tracker-seven.vercel.app)

## To Run Locally 🛠️
*You must have Node.js and NPM installed.*

1. Clone this project on your local device & install necessary packages:
    ```sh
    git clone https://github.com/Er-Abhay-FSD/SkyTracker
    cd SkyTracker
    npm install
    ```

2. Get your 'OpenWeather' and 'Geoapify' API keys, then create a `.env` file & add your API keys there:
    ```sh
    # inside .env file
    VITE_GEOCODING_API_KEY="your-geoapify-api-key"
    VITE_OPENWEATHER_API_KEY="your-openweather-api-key"
    ```

3. Run the App:
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
<div style="display:flex; flex-direction:column; gap:20px">
    <div style="display:flex; flex-direction:column; gap:10px">
        <span style="font-size:20px;">Mobiles 📱</span>
        <div style="display:flex; gap:10px">
            <img src="./src/assets/screenshots/ss5.png" alt="Mobile screenshot 1" style="width:46%; height:auto;"/>
            <img src="./src/assets/screenshots/ss6.png" alt="Mobile screenshot 2" style="width:46%; height:auto;"/>
        </div>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px">
        <span style="font-size:20px;">Tablets 📱</span>
        <img src="./src/assets/screenshots/ss3.png" alt="Tablet screenshot 1" style="width:100%; height:auto;"/>
        <img src="./src/assets/screenshots/ss4.png" alt="Tablet screenshot 2" style="width:100%; height:auto;"/>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px">
        <span style="font-size:20px;">Desktops 🖥️</span>
        <img src="./src/assets/screenshots/ss1.png" alt="Desktop screenshot 1" style="width:100%; height:auto;"/>
        <img src="./src/assets/screenshots/ss2.png" alt="Desktop screenshot 2" style="width:100%; height:auto;"/>
    </div>
</div>

## How to Contribute 🤝
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name](https://github.com/YourGitHubProfile)
