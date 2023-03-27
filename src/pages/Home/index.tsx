import styles from "./index.module.scss"

import Header from "../../components/Header"
import QuestionOne from "../../components/QuestionOne"
import QuestionTwo from "../../components/QuestionTwo"

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles["home__main"]}>
        <h2>FE Developer- 1st Call Question</h2>
        <QuestionOne />
        <QuestionTwo />
      </div>
    </div>
  )
}
