import styles from "./CitySelector.module.css";

function CitySelector({ cities, onCityChange }) {
  const handleChange = (event) => {
    onCityChange(event.target.value);
  };

  return (
    <form className={styles.formContainer}>
      <label className={styles.label}>Choose a city:</label>
      <select className={styles.select} id="city" onChange={handleChange}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;
