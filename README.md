# Weather App 🌦️

A simple weather web application built using **Next.js (App Router)**, **TypeScript (TSX)**, and **Zustand** for state management. This app fetches real-time weather data using the **WeatherAPI** and automatically detects the user's location using the **Geolocation API**.

## Features 🚀

- 🌍 **Auto-detects user location** and fetches weather data.
- 🏙️ **Manual city search** for weather updates.
- 📅 **7-day weather forecast** with detailed conditions.
- 💾 **LocalStorage support** for persisting data after refresh.
- 🌡️ **Temperature, humidity, wind speed, and conditions display.**
- 📱 **Responsive design** for mobile and desktop.

---

## Installation & Setup ⚙️

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/DeFiDev-sys/Weather_App.git
cd weather-app
```

### 2️⃣ **Install Dependencies**

```sh
npm install  # or yarn install
```

### 3️⃣ **Create Environment Variables**

Create a `.env.local` file in the root directory and add your WeatherAPI key:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key_here
```

> Get your free API key from [WeatherAPI](https://www.weatherapi.com/).

### 4️⃣ **Run the Development Server**

```sh
npm run dev  # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5️⃣ **Build for Production**

```sh
npm run build && npm start  # or yarn build && yarn start
```

---

## Project Structure 📂

```
/weather-app
│── app/
│   ├── api/
│   │   ├── weatherApi/
│   │   │   ├── route.ts  # API route for fetching weather data
│   ├── (display)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│── components/
│   ├── UI/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Theme-Provider.tsx  # For the Dark Mode
│   ├── theme-toggle.tsx  # Displays weather details
│   ├── searchBar.tsx   # Allows user to enter a city manually
│   ├── weatherCard.tsx   # Holds the form of the data displayed
│── hooks/
│   ├── useGeoLocation.ts   # Custom hook to get user location
│── context/
│   ├── weatherStore.tsx   # Zustand state management for weather data
│── Screen/
│   ├── weatherDisplay.tsx   # Display the weather data and all its functionalities
│── styles/  # Tailwind CSS styles
│── public/  # Static assets (icons, images, etc.)
│── .env.local  # Environment variables
│── package.json  # Dependencies and scripts
│── README.md  # Project documentation
```

---

## Deployment 🌍

### **Deploy on Vercel** (Recommended for Next.js Apps)

```sh
npm install -g vercel  # Install Vercel CLI
vercel  # Deploy the project
```

> Alternatively, deploy manually from [Vercel Dashboard](https://vercel.com/).

---

## API Endpoints 🌐

| Method | Endpoint                                  | Description                           |
| ------ | ----------------------------------------- | ------------------------------------- |
| GET    | `/api/weatherApi?city=London`             | Fetch weather by city name            |
| GET    | `/api/weatherApi?lat=51.5074&lon=-0.1278` | Fetch weather by latitude & longitude |

---

## Technologies Used 🛠️

- **Next.js** (App Router)
- **TypeScript (TSX)**
- **Zustand** (State Management)
- **Tailwind CSS** (Styling)
- **Geolocation API** (Detect User Location)
- **WeatherAPI** (Weather Data)

---

## License 📝

This project is open-source and available under the [MIT License](LICENSE).

---

## Author 💡

Developed by **[Your Name]**. Feel free to reach out!

🌐 **GitHub**: [your-username](https://github.com/your-username)  
🐦 **Twitter**: [@your-handle](https://twitter.com/your-handle)  
📧 **Email**: your-email@example.com

---

## Contributing 🤝

Pull requests are welcome! If you'd like to contribute, please fork the repo and submit a PR.

```sh
git checkout -b feature-branch
```

Submit a **pull request** once your feature is complete!
