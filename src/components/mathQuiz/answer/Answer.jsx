import styles from "./Answer.module.css";
import { useState } from "react";

function Answer({ countPoints }) {
  const [userAnswer, setUserAnswer] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    countPoints(userAnswer);
    setUserAnswer("");
  };

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Введите ваш ответ"
        value={userAnswer}
        onChange={handleChange}
      />
      <button type="submit">Checking</button>
    </form>
  );
}

export default Answer;
