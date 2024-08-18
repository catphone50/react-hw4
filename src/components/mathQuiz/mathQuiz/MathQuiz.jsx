import { useState, useEffect } from "react";
import styles from "./MathQuiz.module.css";
import Answer from "../answer/Answer";

function MathQuiz({}) {
  const [level, setLevel] = useState(10);
  const [points, setPoints] = useState(0);
  const [leftNum, setLeftNum] = useState(0);
  const [rightNum, setRightNum] = useState(0);
  const [sing, setSing] = useState("+");
  const [answer, setAnswer] = useState(0);
  const [massage, setMassage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  function handleChange(event) {
    setLevel(event.target.value);
  }

  function getRandomNumber(level) {
    return Math.floor(Math.random() * level) + 1;
  }

  function getRandomSing() {
    return Math.random() < 0.5 ? "+" : "-";
  }

  function updatePoints(userAnswer) {
    if (userAnswer === answer.toString()) {
      setPoints(points + 1);
      setMassage("Yeeeap!");
      setMessageClass(styles.success);
      setTimeout(() => {
        setMassage("");
      }, 2000);
    } else {
      setPoints(points - 1);
      setMassage("Noooo!");
      setMessageClass(styles.error);
      setTimeout(() => {
        setMassage("");
      }, 2000);
    }
  }

  function newExercise() {
    const newLeftNum = getRandomNumber(level);
    const newRightNum = getRandomNumber(level);
    const newSing = getRandomSing();
    const newAnswer =
      newSing === "+" ? newLeftNum + newRightNum : newLeftNum - newRightNum;

    setLeftNum(newLeftNum);
    setRightNum(newRightNum);
    setSing(newSing);
    setAnswer(newAnswer);
  }

  useEffect(() => {
    newExercise();
  }, [level, points]);

  return (
    <div className={styles.formContainer}>
      <select className={styles.select} id="city" onChange={handleChange}>
        <option value={10}>level 1</option>
        <option value={100}>level 2</option>
        <option value={1000}>level 3</option>
      </select>

      <h2>Points {points}</h2>

      <p className={styles.exercise}>
        {leftNum} {sing} {rightNum} = "?"
      </p>

      <Answer countPoints={updatePoints} />
      <p className={`${styles.massage} ${messageClass}`}>{massage}</p>
    </div>
  );
}

export default MathQuiz;
