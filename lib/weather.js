// lib/weather.js
export const cities = [
  { name: "London", id: 2643743 },
  { name: "New York", id: 5128581 },
  { name: "Tokyo", id: 1850147 },
  { name: "Paris", id: 2988507 },
  { name: "Sydney", id: 2147714 },
];

export async function fetchWeather(cityId) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );

  const data = await res.json();

  console.log(`Weather data for cityId ${cityId}:`, data); // 🔍 Add this

  return data;
}

