import styles from "./CityCard.module.css";

function CityCard({ city }) {
  return (
    <div className={styles.cityContainer}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt="City" />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => {
          return <li key={index}>{fact}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityCard;
