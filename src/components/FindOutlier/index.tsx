import styles from "./index.module.scss"

export default function FindOutlier() {

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
      <p className={styles["findOutlier__text"]}>{`${inputString1} => ${findOutlier(inputString1)}`}</p>
      <p className={styles["findOutlier__text"]}>{`${inputString2} => ${findOutlier(inputString2)}`}</p>
    </div>
  )
}