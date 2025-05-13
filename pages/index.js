import { cities, fetchWeather } from '../lib/weather';

export async function getStaticProps() {
  const weatherData = await Promise.all(
    cities.map(async (city) => {
      const data = await fetchWeather(city.id);

      return {
        name: city.name,
        temperature: data?.main?.temp ?? 'N/A',
        condition: data?.weather?.[0]?.main ?? 'Unknown',
        lastUpdated: new Date().toISOString(),
      };
    })
  );

  return {
    props: { weatherData },
    revalidate: 600, // re-generate every 10 minutes
  };
}

export default function Home({ weatherData }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌦️ Real-Time Weather Dashboard</h1>
      <div style={styles.cardContainer}>
        {weatherData.map((city, idx) => (
          <div key={idx} style={styles.card}>
            <h2 style={styles.city}>{city.name}</h2>
            <p style={styles.temp}>🌡️ {city.temperature}°C</p>
            <p style={styles.condition}>☁️ {city.condition}</p>
            <p style={styles.updated}>
              🕒 Last Updated: {new Date(city.lastUpdated).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  city: {
    fontSize: '1.5rem',
    margin: '0 0 0.5rem',
    color: '#222',
  },
  temp: {
    fontSize: '1.2rem',
    color: '#e63946',
    margin: '0.3rem 0',
  },
  condition: {
    fontSize: '1rem',
    color: '#457b9d',
    margin: '0.3rem 0',
  },
  updated: {
    fontSize: '0.85rem',
    color: '#555',
    marginTop: '0.8rem',
  },
};
