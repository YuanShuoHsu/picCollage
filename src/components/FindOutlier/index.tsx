import { useState, ChangeEvent } from "react"
import styles from "./index.module.scss"

export default function FindOutlier() {

  const [practice, setPractice] = useState("")

  const handleSave = (event: ChangeEvent<HTMLInputElement>) => {
    setPractice(event.target.value)
  }

  const inputString1 = "10 9 8 6 4 2"
  const inputString2 = "7 9 1 6 3 5"

  const findOutlier = (inputString: string) => {
    const numbers = inputString.split(" ").map(Number);
    const parity = getParity(numbers.slice(0, 3));

    for (let i = 0; i < numbers.length; i++) {
      if (getParity([numbers[i]]) !== parity) {
        return i + 1;
      }
    }
  }

  const getParity = (numbers: number[]) => {
    const even = numbers.filter(n => n % 2 === 0).length;
    const odd = numbers.length - even;
    return even > odd ? 'even' : 'odd';
  }

  return (
    <div className={styles.findOutlier}>
      <p>Practice:</p>
      <p>{`${inputString1} => ${findOutlier(inputString1)}`}</p>
      <p>{`${inputString2} => ${findOutlier(inputString2)}`}</p>
      <div className={styles["findOutlier__box"]}>
        <input className={styles["findOutlier__box-input"]} onChange={handleSave} value={practice} type="text" />
        <span>{`=> ${findOutlier(practice)}`}</span>
      </div>
    </div>
  )
}